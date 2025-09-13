'use client';

import { Scene, Character, Choice } from '@/types/game';
import DialogueBox from './DialogueBox';
import CharacterPortrait from './CharacterPortrait';
import ChoiceButtons from './ChoiceButtons';

interface GameScreenProps {
  scene: Scene;
  dialogueIndex: number;
  characters: Character[];
  onAdvance: () => void;
  onChoice: (choice: Choice) => void;
  isTransitioning: boolean;
}

export default function GameScreen({
  scene,
  dialogueIndex,
  characters,
  onAdvance,
  onChoice,
  isTransitioning,
}: GameScreenProps) {
  // Safety check for scene and dialogues
  if (!scene || !scene.dialogues || scene.dialogues.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-pink-900">
        <p className="text-white">Loading scene...</p>
      </div>
    );
  }

  const currentDialogue = scene.dialogues[dialogueIndex];
  
  // Safety check for current dialogue
  if (!currentDialogue) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-pink-900">
        <p className="text-white">Loading dialogue...</p>
      </div>
    );
  }

  const isLastDialogue = dialogueIndex === scene.dialogues.length - 1;
  const showChoices = isLastDialogue && scene.choices && scene.choices.length > 0;
  
  // Find character for current dialogue
  const currentCharacter = currentDialogue.characterId 
    ? characters.find(c => c.id === currentDialogue.characterId)
    : undefined;

  return (
    <div 
      className="relative min-h-screen overflow-hidden transition-opacity duration-500"
      style={{ 
        background: scene.background,
        opacity: isTransitioning ? 0 : 1,
      }}
    >
      {/* Character Portrait */}
      {currentCharacter && (
        <CharacterPortrait 
          character={currentCharacter}
          emotion={currentDialogue.emotion}
        />
      )}
      
      {/* Dialogue Box */}
      <DialogueBox
        dialogue={currentDialogue}
        onAdvance={onAdvance}
        isLastDialogue={isLastDialogue}
        showChoices={showChoices}
      />
      
      {/* Choice Buttons */}
      {showChoices && scene.choices && (
        <ChoiceButtons
          choices={scene.choices}
          onChoice={onChoice}
        />
      )}
      
      {/* Menu Button */}
      <button
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg backdrop-blur-sm transition-colors"
        onClick={() => {
          if (confirm('Return to main menu? Your progress will be auto-saved.')) {
            window.location.reload();
          }
        }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
}