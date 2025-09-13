// Type definitions for the otome game

export interface Character {
  id: string;
  name: string;
  description: string;
  personality: string;
  color: string; // Color theme for the character
  portrait?: string; // URL to portrait image (optional)
  portraits?: {
    default: string;
    [emotion: string]: string; // Additional emotion portraits
  };
}

export interface Choice {
  text: string;
  nextSceneId: string;
  effects?: RelationshipEffect[];
}

export interface RelationshipEffect {
  characterId: string;
  points?: number;
  affection?: number;
  trust?: number;
  suspicion?: number;
}

export interface RelationshipStats {
  affection: number;
  trust: number;
  suspicion?: number;
  lastInteraction?: number; // timestamp for decay calculation
}

export interface DialogueLine {
  speaker: string;
  text: string;
  characterId?: string; // Which character portrait to show
  emotion?: string; // Character emotion/expression
}

export interface Scene {
  id: string;
  background: string; // CSS gradient or image URL
  dialogues: DialogueLine[];
  choices?: Choice[];
  nextSceneId?: string; // For linear progression
  isEnding?: boolean;
}

export interface GameState {
  currentSceneId: string;
  currentDialogueIndex: number;
  relationships: Record<string, number>; // characterId -> affinity points (legacy)
  relationshipStats: Record<string, RelationshipStats>; // enhanced multi-dimensional
  visitedScenes: string[];
  unlockedCharacters: string[];
  gamePhase: 'menu' | 'characterSelect' | 'playing' | 'ending';
  selectedCharacter?: string;
  dialogueHistory: DialogueLine[];
  storyFlags: Record<string, boolean>;
  variables: Record<string, any>;
  lastSaveVersion?: number;
}

export interface SaveGame {
  gameState: GameState;
  timestamp: number;
  saveName: string;
}

export interface StoryData {
  characters: Character[];
  scenes: Record<string, Scene>;
  startSceneId: string;
}

export interface EndingData {
  characterId: string;
  title: string;
  description: string;
  sceneId: string;
}