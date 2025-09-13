'use client';

import { Character } from '@/types/game';

interface EndingScreenProps {
  characterId?: string;
  characters: Character[];
  relationships: Record<string, number>;
  onReturnToMenu: () => void;
  onRestart: () => void;
}

export default function EndingScreen({
  characterId,
  characters,
  relationships,
  onReturnToMenu,
  onRestart,
}: EndingScreenProps) {
  const endingCharacter = characterId 
    ? characters.find(c => c.id === characterId)
    : null;

  const getEndingTitle = () => {
    if (!endingCharacter) return 'Friendship Route Complete';
    return `${endingCharacter.name}'s Route Complete`;
  };

  const getEndingMessage = () => {
    if (!endingCharacter) {
      return 'You\'ve made wonderful friends at Heartfelt Academy!';
    }
    return `You\'ve captured ${endingCharacter.name}'s heart!`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300">
      <div className="text-center p-8 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          The End
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          {getEndingTitle()}
        </h2>
        
        <p className="text-xl text-white/90 mb-8">
          {getEndingMessage()}
        </p>
        
        {/* Relationship Summary */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Final Relationships</h3>
          <div className="space-y-2">
            {characters.map(character => (
              <div key={character.id} className="flex justify-between items-center">
                <span className="text-white font-semibold">{character.name}</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-white/30 rounded-full h-4 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-400 to-purple-400"
                      style={{ 
                        width: `${Math.min(100, Math.max(0, relationships[character.id] || 0))}%` 
                      }}
                    />
                  </div>
                  <span className="text-white text-sm w-12 text-right">
                    {relationships[character.id] || 0}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={onRestart}
            className="bg-white/90 hover:bg-white text-purple-600 font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            Start New Game
          </button>
          
          <button
            onClick={onReturnToMenu}
            className="bg-white/70 hover:bg-white/80 text-purple-600 font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            Return to Menu
          </button>
        </div>
      </div>
    </div>
  );
}