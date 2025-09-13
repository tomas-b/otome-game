'use client';

import { DialogueLine } from '@/types/game';

interface DialogueBoxProps {
  dialogue: DialogueLine;
  onAdvance: () => void;
  isLastDialogue: boolean;
  showChoices?: boolean;
}

export default function DialogueBox({ 
  dialogue, 
  onAdvance, 
  isLastDialogue,
  showChoices 
}: DialogueBoxProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Speaker Name */}
        <div className="mb-2">
          <span className="text-pink-400 font-bold text-lg md:text-xl">
            {dialogue.speaker}
          </span>
        </div>
        
        {/* Dialogue Text */}
        <div className="text-white text-base md:text-lg leading-relaxed mb-4 min-h-[60px]">
          {dialogue.text}
        </div>
        
        {/* Continue Indicator */}
        {!showChoices && (
          <button
            onClick={onAdvance}
            className="absolute bottom-4 right-6 text-white/60 hover:text-white transition-colors"
            aria-label="Continue"
          >
            {isLastDialogue ? (
              <span className="text-sm">Click to continue...</span>
            ) : (
              <svg 
                className="w-6 h-6 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
}