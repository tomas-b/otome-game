'use client';

import { useState } from 'react';
import { useGameState } from '@/hooks/useGameState';
import MainMenu from '@/components/MainMenu';
import GameScreen from '@/components/GameScreen';
import EndingScreen from '@/components/EndingScreen';
import SaveLoadMenu from '@/components/SaveLoadMenu';

export default function Home() {
  const {
    gameState,
    currentScene,
    isTransitioning,
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
    characters,
  } = useGameState();

  const [showSaveMenu, setShowSaveMenu] = useState(false);
  const [saveMenuMode, setSaveMenuMode] = useState<'save' | 'load'>('save');

  const handleLoadGame = () => {
    setSaveMenuMode('load');
    setShowSaveMenu(true);
  };

  const handleSaveGame = () => {
    setSaveMenuMode('save');
    setShowSaveMenu(true);
  };

  // Handle keyboard shortcuts
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', (e) => {
      if (gameState.gamePhase === 'playing' && currentScene) {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          if (!currentScene.choices || currentScene.choices.length === 0) {
            advanceDialogue();
          }
        }
        if (e.key === 'Escape') {
          e.preventDefault();
          handleSaveGame();
        }
      }
    });
  }

  // Render based on game phase
  switch (gameState.gamePhase) {
    case 'menu':
      return (
        <>
          <MainMenu
            onNewGame={startNewGame}
            onContinue={continueGame}
            onLoadGame={handleLoadGame}
            canContinue={canContinue()}
          />
          {showSaveMenu && (
            <SaveLoadMenu
              saves={getSaves()}
              onSave={saveGame}
              onLoad={loadGame}
              onDelete={deleteSave}
              onClose={() => setShowSaveMenu(false)}
              mode={saveMenuMode}
            />
          )}
        </>
      );

    case 'playing':
      if (!currentScene) return null;
      return (
        <>
          <GameScreen
            scene={currentScene}
            dialogueIndex={gameState.currentDialogueIndex}
            characters={characters}
            onAdvance={advanceDialogue}
            onChoice={makeChoice}
            isTransitioning={isTransitioning}
          />
          {showSaveMenu && (
            <SaveLoadMenu
              saves={getSaves()}
              onSave={saveGame}
              onLoad={loadGame}
              onDelete={deleteSave}
              onClose={() => setShowSaveMenu(false)}
              mode={saveMenuMode}
            />
          )}
          {/* Quick Save/Load buttons */}
          <div className="fixed top-4 left-4 flex gap-2">
            <button
              onClick={handleSaveGame}
              className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg backdrop-blur-sm transition-colors"
              title="Save Game (ESC)"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V2" />
              </svg>
            </button>
            <button
              onClick={handleLoadGame}
              className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg backdrop-blur-sm transition-colors"
              title="Load Game"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </button>
          </div>
        </>
      );

    case 'ending':
      // Find which character's ending we got
      const endingCharacterId = Object.entries(gameState.relationships)
        .sort(([,a], [,b]) => b - a)[0]?.[0];
      
      return (
        <EndingScreen
          characterId={endingCharacterId}
          characters={characters}
          relationships={gameState.relationships}
          onReturnToMenu={returnToMenu}
          onRestart={restartGame}
        />
      );

    default:
      return null;
  }
}
