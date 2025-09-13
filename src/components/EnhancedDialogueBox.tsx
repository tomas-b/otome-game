'use client';

import { useState } from 'react';
import { DialogueLine } from '@/types/game';
import TypewriterText from './TypewriterText';

interface EnhancedDialogueBoxProps {
  dialogue: DialogueLine;
  onAdvance: () => void;
  isLastDialogue: boolean;
  showChoices: boolean;
  textSpeed?: number;
  skipMode?: boolean;
}

export default function EnhancedDialogueBox({ 
  dialogue, 
  onAdvance, 
  isLastDialogue,
  showChoices,
  textSpeed = 50,
  skipMode = false
}: EnhancedDialogueBoxProps) {
  const [isTextComplete, setIsTextComplete] = useState(false);

  const handleClick = () => {
    if (isTextComplete && !showChoices) {
      onAdvance();
      setIsTextComplete(false);
    }
  };

  return (
    <div 
      className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-6 md:p-8"
      style={{ height: '278px' }} // Standard otome game dialogue box height
    >
      <div className="max-w-4xl mx-auto h-full flex flex-col">
        {/* Speaker Name with distinct color per character */}
        <div className="mb-2" style={{ marginTop: '-22px' }}>
          <span 
            className="font-bold text-lg md:text-xl px-3 py-1 rounded-t-lg inline-block"
            style={{
              backgroundColor: 'rgba(255, 182, 193, 0.2)',
              color: dialogue.characterId === 'akira' ? '#FFB6C1' :
                     dialogue.characterId === 'kazuki' ? '#9370DB' :
                     dialogue.characterId === 'haruto' ? '#87CEEB' :
                     '#FFFFFF'
            }}
          >
            {dialogue.speaker}
          </span>
        </div>
        
        {/* Dialogue Text with Typewriter Effect */}
        <div 
          className="text-white text-base md:text-lg leading-relaxed flex-1 cursor-pointer"
          onClick={handleClick}
          style={{ width: '60%', margin: '0 auto' }} // Central 60% for optimal readability
        >
          <TypewriterText
            text={dialogue.text}
            speed={textSpeed}
            onComplete={() => setIsTextComplete(true)}
            skipAnimation={skipMode}
          />
        </div>
        
        {/* Continue Indicator */}
        {!showChoices && isTextComplete && (
          <div className="text-right pr-4">
            <span className="text-white/60 text-sm animate-pulse">
              ▼ Click to continue
            </span>
          </div>
        )}
      </div>
    </div>
  );
}