'use client';

import { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number; // characters per second
  onComplete?: () => void;
  skipAnimation?: boolean;
}

export default function TypewriterText({ 
  text, 
  speed = 50, 
  onComplete,
  skipAnimation = false 
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Reset when text changes
    setDisplayedText('');
    setIsComplete(false);

    if (skipAnimation) {
      setDisplayedText(text);
      setIsComplete(true);
      onComplete?.();
      return;
    }

    let currentIndex = 0;
    const msPerChar = 1000 / speed;

    intervalRef.current = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setIsComplete(true);
        onComplete?.();
      }
    }, msPerChar);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text, speed, skipAnimation, onComplete]);

  const handleSkip = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setDisplayedText(text);
    setIsComplete(true);
    onComplete?.();
  };

  return (
    <div 
      className="relative cursor-pointer"
      onClick={!isComplete ? handleSkip : undefined}
    >
      <span className="whitespace-pre-wrap">{displayedText}</span>
      {!isComplete && (
        <span className="inline-block w-2 h-4 bg-white/60 animate-pulse ml-0.5" />
      )}
    </div>
  );
}