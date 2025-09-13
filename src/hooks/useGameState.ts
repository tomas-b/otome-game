'use client';

import { useState, useEffect, useCallback } from 'react';
import { GameState, Scene, Choice, SaveGame } from '@/types/game';
import { storyData, getEndingForCharacter } from '@/data/story';

const SAVE_KEY = 'otome-game-saves';
const AUTO_SAVE_KEY = 'otome-game-autosave';

const initialGameState: GameState = {
  currentSceneId: 'opening',
  currentDialogueIndex: 0,
  relationships: {},
  relationshipStats: {},
  visitedScenes: [],
  unlockedCharacters: [],
  gamePhase: 'menu',
  dialogueHistory: [],
  storyFlags: {},
  variables: {},
  lastSaveVersion: 2,
};

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Get current scene
  const currentScene = storyData.scenes[gameState.currentSceneId];

  // Auto-save on state change
  useEffect(() => {
    if (typeof window !== 'undefined' && gameState.gamePhase === 'playing') {
      localStorage.setItem(AUTO_SAVE_KEY, JSON.stringify(gameState));
    }
  }, [gameState]);

  // Start new game
  const startNewGame = useCallback(() => {
    const newState: GameState = {
      ...initialGameState,
      gamePhase: 'playing',
      relationships: {
        akira: 0,
        kazuki: 0,
        haruto: 0,
      },
      relationshipStats: {
        akira: { affection: 20, trust: 75, suspicion: 0, lastInteraction: Date.now() }, // Childhood friend - high trust, some affection
        kazuki: { affection: 0, trust: 0, suspicion: 50, lastInteraction: Date.now() }, // Mysterious - no trust, high suspicion
        haruto: { affection: 5, trust: 30, suspicion: 0, lastInteraction: Date.now() }, // Gentle scholar - some baseline trust
      },
      dialogueHistory: [],
      storyFlags: {},
      variables: {},
    };
    setGameState(newState);
  }, []);

  // Continue from auto-save
  const continueGame = useCallback(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(AUTO_SAVE_KEY);
      if (saved) {
        setGameState(JSON.parse(saved));
      }
    }
  }, []);

  // Advance dialogue
  const advanceDialogue = useCallback(() => {
    if (!currentScene) return;

    // Add current dialogue to history
    const currentDialogue = currentScene.dialogues[gameState.currentDialogueIndex];
    if (currentDialogue) {
      setGameState(prev => ({
        ...prev,
        dialogueHistory: [...(prev.dialogueHistory || []), currentDialogue],
      }));
    }

    if (gameState.currentDialogueIndex < currentScene.dialogues.length - 1) {
      setGameState(prev => ({
        ...prev,
        currentDialogueIndex: prev.currentDialogueIndex + 1,
      }));
    } else if (currentScene.nextSceneId && !currentScene.choices) {
      // Auto-progress to next scene
      transitionToScene(currentScene.nextSceneId);
    }
  }, [currentScene, gameState.currentDialogueIndex]);

  // Make a choice
  const makeChoice = useCallback((choice: Choice) => {
    setIsTransitioning(true);
    
    // Apply relationship effects
    const newRelationships = { ...gameState.relationships };
    if (choice.effects) {
      choice.effects.forEach(effect => {
        // Handle legacy points system
        if (effect.points !== undefined) {
          newRelationships[effect.characterId] =
            (newRelationships[effect.characterId] || 0) + effect.points;
        }
        // Handle new multi-dimensional system
        // TODO: Add support for affection, trust, suspicion
      });
    }

    setTimeout(() => {
      setGameState(prev => ({
        ...prev,
        currentSceneId: choice.nextSceneId,
        currentDialogueIndex: 0,
        relationships: newRelationships,
        visitedScenes: [...prev.visitedScenes, prev.currentSceneId],
      }));
      setIsTransitioning(false);
    }, 500);
  }, [gameState.relationships]);

  // Transition to a scene
  const transitionToScene = useCallback((sceneId: string) => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      // Check if we should go to an ending based on relationships
      let targetSceneId = sceneId;
      const scene = storyData.scenes[sceneId];
      
      if (scene?.isEnding !== true && gameState.visitedScenes.length > 5) {
        const endingSceneId = getEndingForCharacter(gameState.relationships);
        if (endingSceneId !== 'neutral-ending' || gameState.visitedScenes.length > 8) {
          targetSceneId = endingSceneId;
        }
      }

      setGameState(prev => ({
        ...prev,
        currentSceneId: targetSceneId,
        currentDialogueIndex: 0,
        visitedScenes: [...prev.visitedScenes, prev.currentSceneId],
        gamePhase: storyData.scenes[targetSceneId]?.isEnding ? 'ending' : prev.gamePhase,
      }));
      setIsTransitioning(false);
    }, 500);
  }, [gameState.relationships, gameState.visitedScenes]);

  // Save game
  const saveGame = useCallback((saveName: string) => {
    if (typeof window !== 'undefined') {
      const saves = JSON.parse(localStorage.getItem(SAVE_KEY) || '[]') as SaveGame[];
      const newSave: SaveGame = {
        gameState,
        timestamp: Date.now(),
        saveName,
      };
      
      // Keep only last 5 saves
      const updatedSaves = [newSave, ...saves.slice(0, 4)];
      localStorage.setItem(SAVE_KEY, JSON.stringify(updatedSaves));
      
      return true;
    }
    return false;
  }, [gameState]);

  // Load game
  const loadGame = useCallback((saveIndex: number) => {
    if (typeof window !== 'undefined') {
      const saves = JSON.parse(localStorage.getItem(SAVE_KEY) || '[]') as SaveGame[];
      if (saves[saveIndex]) {
        setGameState(saves[saveIndex].gameState);
        return true;
      }
    }
    return false;
  }, []);

  // Get all saves
  const getSaves = useCallback((): SaveGame[] => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem(SAVE_KEY) || '[]');
    }
    return [];
  }, []);

  // Delete save
  const deleteSave = useCallback((saveIndex: number) => {
    if (typeof window !== 'undefined') {
      const saves = JSON.parse(localStorage.getItem(SAVE_KEY) || '[]') as SaveGame[];
      saves.splice(saveIndex, 1);
      localStorage.setItem(SAVE_KEY, JSON.stringify(saves));
    }
  }, []);

  // Return to main menu
  const returnToMenu = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      gamePhase: 'menu',
    }));
  }, []);

  // Restart game
  const restartGame = useCallback(() => {
    startNewGame();
  }, [startNewGame]);

  // Check if can continue
  const canContinue = useCallback(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(AUTO_SAVE_KEY) !== null;
    }
    return false;
  }, []);

  return {
    gameState,
    currentScene,
    isTransitioning,
    
    // Actions
    startNewGame,
    continueGame,
    advanceDialogue,
    makeChoice,
    saveGame,
    loadGame,
    getSaves,
    deleteSave,
    returnToMenu,
    restartGame,
    canContinue,
    
    // Data
    characters: storyData.characters,
  };
}