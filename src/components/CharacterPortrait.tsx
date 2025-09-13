'use client';

import { Character } from '@/types/game';

interface CharacterPortraitProps {
  character: Character;
  emotion?: string;
  position?: 'left' | 'center' | 'right';
}

export default function CharacterPortrait({ 
  character, 
  emotion = 'normal',
  position = 'center' 
}: CharacterPortraitProps) {
  const positionClasses = {
    left: 'left-[10%]',
    center: 'left-1/2 -translate-x-1/2',
    right: 'right-[10%]',
  };

  return (
    <div 
      className={`absolute bottom-[200px] ${positionClasses[position]} transition-all duration-500 ease-in-out`}
    >
      <div 
        className="w-48 h-64 md:w-64 md:h-80 rounded-lg shadow-2xl"
        style={{
          background: character.color,
          opacity: 0.9,
        }}
      >
        {/* Placeholder character silhouette */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full bg-white/20" />
            <p className="text-white font-bold text-lg">{character.name}</p>
            <p className="text-white/80 text-sm capitalize">{emotion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}