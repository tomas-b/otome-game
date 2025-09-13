'use client';

import { DialogueLine } from '@/types/game';

interface DialogueHistoryProps {
  history: DialogueLine[];
  isOpen: boolean;
  onClose: () => void;
}

export default function DialogueHistory({ 
  history, 
  isOpen, 
  onClose 
}: DialogueHistoryProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-hidden">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/20">
          <h2 className="text-2xl font-bold text-white">Dialogue History</h2>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors p-2"
            aria-label="Close history"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* History Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {history.length === 0 ? (
            <p className="text-white/60 text-center py-8">No dialogue history yet</p>
          ) : (
            history.map((line, index) => (
              <div 
                key={index} 
                className="bg-white/10 rounded-lg p-4 backdrop-blur-sm"
              >
                <div className="text-pink-400 font-semibold mb-1">
                  {line.speaker}
                </div>
                <div className="text-white">
                  {line.text}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/20">
          <p className="text-white/60 text-sm text-center">
            Press H to toggle history • ESC to close
          </p>
        </div>
      </div>
    </div>
  );
}