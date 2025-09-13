'use client';

import { Choice } from '@/types/game';

interface ChoiceButtonsProps {
  choices: Choice[];
  onChoice: (choice: Choice) => void;
}

export default function ChoiceButtons({ choices, onChoice }: ChoiceButtonsProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="flex flex-col gap-4 p-6 max-w-2xl w-full">
        {choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => onChoice(choice)}
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}