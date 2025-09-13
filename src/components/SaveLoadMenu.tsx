'use client';

import { useState } from 'react';
import { SaveGame } from '@/types/game';

interface SaveLoadMenuProps {
  saves: SaveGame[];
  onSave: (saveName: string) => void;
  onLoad: (saveIndex: number) => void;
  onDelete: (saveIndex: number) => void;
  onClose: () => void;
  mode: 'save' | 'load';
}

export default function SaveLoadMenu({
  saves,
  onSave,
  onLoad,
  onDelete,
  onClose,
  mode,
}: SaveLoadMenuProps) {
  const [saveName, setSaveName] = useState('');
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  const handleSave = () => {
    if (saveName.trim()) {
      onSave(saveName.trim());
      onClose();
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-purple-900/90 to-pink-900/90 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">
            {mode === 'save' ? 'Save Game' : 'Load Game'}
          </h2>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {mode === 'save' && (
          <div className="mb-6">
            <input
              type="text"
              placeholder="Enter save name..."
              value={saveName}
              onChange={(e) => setSaveName(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              maxLength={50}
            />
            <button
              onClick={handleSave}
              disabled={!saveName.trim()}
              className="mt-3 w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition-all duration-300"
            >
              Save Game
            </button>
          </div>
        )}

        <div className="space-y-3">
          {saves.length === 0 ? (
            <p className="text-white/60 text-center py-8">No saved games</p>
          ) : (
            saves.map((save, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-lg p-4 cursor-pointer transition-all duration-300 hover:bg-white/20 ${
                  selectedSlot === index ? 'ring-2 ring-pink-400' : ''
                }`}
                onClick={() => setSelectedSlot(index)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg">{save.saveName}</h3>
                    <p className="text-white/60 text-sm">{formatDate(save.timestamp)}</p>
                    <p className="text-white/40 text-xs mt-1">
                      Scene: {save.gameState.currentSceneId}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {mode === 'load' && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onLoad(index);
                          onClose();
                        }}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors"
                      >
                        Load
                      </button>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm('Delete this save?')) {
                          onDelete(index);
                        }
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}