'use client';

interface MainMenuProps {
  onNewGame: () => void;
  onContinue: () => void;
  onLoadGame: () => void;
  canContinue: boolean;
}

export default function MainMenu({ 
  onNewGame, 
  onContinue, 
  onLoadGame, 
  canContinue 
}: MainMenuProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400">
      <div className="text-center p-8">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
          Heartfelt Academy
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12">
          A romantic visual novel adventure
        </p>
        
        <div className="flex flex-col gap-4 max-w-md mx-auto">
          <button
            onClick={onNewGame}
            className="bg-white/90 hover:bg-white text-purple-600 font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            New Game
          </button>
          
          {canContinue && (
            <button
              onClick={onContinue}
              className="bg-white/80 hover:bg-white/90 text-purple-600 font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Continue
            </button>
          )}
          
          <button
            onClick={onLoadGame}
            className="bg-white/70 hover:bg-white/80 text-purple-600 font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Load Game
          </button>
        </div>
        
        <div className="mt-12 text-white/60 text-sm">
          <p>© 2024 Heartfelt Academy</p>
          <p>Created with Next.js & TypeScript</p>
        </div>
      </div>
    </div>
  );
}