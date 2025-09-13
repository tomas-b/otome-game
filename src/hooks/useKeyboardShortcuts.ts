'use client';

import { useEffect } from 'react';

interface KeyboardShortcutsProps {
  onQuickSave?: () => void;
  onQuickLoad?: () => void;
  onToggleHistory?: () => void;
  onAdvanceDialogue?: () => void;
  onToggleUI?: () => void;
  onSkip?: () => void;
  enabled?: boolean;
}

export function useKeyboardShortcuts({
  onQuickSave,
  onQuickLoad,
  onToggleHistory,
  onAdvanceDialogue,
  onToggleUI,
  onSkip,
  enabled = true
}: KeyboardShortcutsProps) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Quick Save (F5)
      if (e.key === 'F5') {
        e.preventDefault();
        onQuickSave?.();
      }
      
      // Quick Load (F9)
      if (e.key === 'F9') {
        e.preventDefault();
        onQuickLoad?.();
      }
      
      // Toggle History (H)
      if (e.key === 'h' || e.key === 'H') {
        onToggleHistory?.();
      }
      
      // Advance Dialogue (Space/Enter)
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        onAdvanceDialogue?.();
      }
      
      // Toggle UI (Tab)
      if (e.key === 'Tab') {
        e.preventDefault();
        onToggleUI?.();
      }
      
      // Skip Mode (Ctrl)
      if (e.ctrlKey) {
        onSkip?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enabled, onQuickSave, onQuickLoad, onToggleHistory, onAdvanceDialogue, onToggleUI, onSkip]);
}