import { GameState, SaveGame } from '@/types/game';

const CURRENT_SAVE_VERSION = 2;

interface Migration {
  fromVersion: number;
  toVersion: number;
  migrate: (state: any) => any;
}

const migrations: Migration[] = [
  {
    // Migration from version 1 to 2: Add new fields
    fromVersion: 1,
    toVersion: 2,
    migrate: (state: any) => {
      return {
        ...state,
        relationshipStats: state.relationshipStats || {},
        dialogueHistory: state.dialogueHistory || [],
        storyFlags: state.storyFlags || {},
        variables: state.variables || {},
        lastSaveVersion: 2
      };
    }
  },
  // Add more migrations as needed
];

export function migrateSaveGame(save: SaveGame): SaveGame {
  let currentState = save.gameState;
  const startVersion = currentState.lastSaveVersion || 1;
  
  if (startVersion >= CURRENT_SAVE_VERSION) {
    return save; // No migration needed
  }

  // Apply migrations in order
  for (let version = startVersion; version < CURRENT_SAVE_VERSION; version++) {
    const migration = migrations.find(m => m.fromVersion === version);
    if (migration) {
      currentState = migration.migrate(currentState);
    }
  }

  return {
    ...save,
    gameState: currentState
  };
}

export function validateSaveGame(save: any): boolean {
  // Check if save has required structure
  if (!save || typeof save !== 'object') return false;
  if (!save.gameState || typeof save.gameState !== 'object') return false;
  if (!save.timestamp || typeof save.timestamp !== 'number') return false;
  if (!save.saveName || typeof save.saveName !== 'string') return false;
  
  const state = save.gameState;
  
  // Validate required state fields
  if (!state.currentSceneId || typeof state.currentSceneId !== 'string') return false;
  if (typeof state.currentDialogueIndex !== 'number') return false;
  if (!state.gamePhase) return false;
  
  return true;
}

export { CURRENT_SAVE_VERSION };