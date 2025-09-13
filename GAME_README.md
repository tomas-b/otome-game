# Heartfelt Academy - Otome Game Documentation

## Overview
This is a minimal otome (dating simulation) game built with Next.js 14+, TypeScript, and Tailwind CSS. The game features a visual novel interface with branching storylines, character relationships, and multiple endings.

## Features
- 3 romance-able characters with distinct personalities
- Branching story system with multiple choice points
- Relationship points tracking system
- Multiple endings based on player choices
- Save/load functionality using localStorage
- Smooth scene transitions
- Mobile-responsive design

## Project Structure

```
src/
├── types/
│   └── game.ts          # TypeScript interfaces for game data
├── data/
│   └── story.ts         # Story content and dialogue
├── hooks/
│   └── useGameState.ts  # Game state management hook
├── components/
│   ├── DialogueBox.tsx      # Dialogue display component
│   ├── CharacterPortrait.tsx # Character portrait display
│   ├── ChoiceButtons.tsx     # Interactive choice buttons
│   ├── MainMenu.tsx          # Main menu screen
│   ├── GameScreen.tsx        # Main gameplay screen
│   ├── EndingScreen.tsx      # Ending display
│   └── SaveLoadMenu.tsx      # Save/load interface
└── app/
    └── page.tsx         # Main game controller
```

## How to Play

### Controls
- **Click/Tap** or **Space/Enter**: Advance dialogue
- **ESC**: Open save menu (during gameplay)
- **Click choices**: Make story decisions

### Game Flow
1. Start from the main menu
2. Read dialogue and make choices
3. Build relationships with characters
4. Reach one of multiple endings based on your choices

## Adding Content

### Adding New Characters

1. Edit `src/data/story.ts` and add to the `characters` array:
```typescript
{
  id: 'character_id',
  name: 'Character Name',
  description: 'Character description',
  personality: 'Personality traits',
  color: '#HEX_COLOR', // Character's theme color
}
```

2. Initialize their relationship points in `useGameState.ts`:
```typescript
relationships: {
  akira: 0,
  kazuki: 0,
  haruto: 0,
  character_id: 0, // Add new character
}
```

### Adding New Scenes

Add scenes to the `scenes` object in `src/data/story.ts`:

```typescript
'scene-id': {
  id: 'scene-id',
  background: 'linear-gradient(...)', // CSS gradient or image URL
  dialogues: [
    { 
      speaker: 'Character Name', 
      text: 'Dialogue text',
      characterId: 'character_id', // Optional: show character portrait
      emotion: 'happy' // Optional: character emotion
    },
    // More dialogue lines...
  ],
  choices: [ // Optional: player choices
    {
      text: 'Choice text',
      nextSceneId: 'next-scene-id',
      effects: [
        { characterId: 'character_id', points: 10 } // Relationship effects
      ]
    },
    // More choices...
  ],
  nextSceneId: 'next-scene-id', // For linear progression (no choices)
  isEnding: false, // Set to true for ending scenes
}
```

### Creating Branching Paths

1. Use `choices` array in scenes to create decision points
2. Each choice can:
   - Lead to different scenes (`nextSceneId`)
   - Affect relationship points (`effects`)
   - Branch the story in different directions

Example:
```typescript
choices: [
  {
    text: 'Compliment their intelligence',
    nextSceneId: 'positive-response',
    effects: [{ characterId: 'haruto', points: 15 }]
  },
  {
    text: 'Challenge their opinion',
    nextSceneId: 'debate-scene',
    effects: [{ characterId: 'haruto', points: -5 }]
  }
]
```

### Adding New Endings

1. Create an ending scene with `isEnding: true`
2. Add to the `endings` array in `src/data/story.ts`:
```typescript
{
  characterId: 'character_id',
  title: 'Ending Title',
  description: 'Ending description',
  sceneId: 'ending-scene-id',
}
```

## Customization

### Styling
- Edit Tailwind classes in components for UI changes
- Modify gradient backgrounds in scene definitions
- Update character colors in the `characters` array

### Game Logic
- Adjust relationship point thresholds in `getEndingForCharacter()`
- Modify save slot limits in `useGameState.ts`
- Change transition durations in component files

### Character Portraits
Currently uses colored placeholder rectangles. To add actual images:
1. Add image files to `public/characters/`
2. Update character data with `portrait: '/characters/filename.png'`
3. Modify `CharacterPortrait.tsx` to display images instead of placeholders

## Development

### Run the game
```bash
pnpm dev
```

### Build for production
```bash
pnpm build
pnpm start
```

## Save System
- Auto-saves progress when playing
- Manual save slots (up to 5)
- Saves include:
  - Current scene and dialogue position
  - Relationship points
  - Visited scenes
  - Game state

## Tips for Content Creators

1. **Keep dialogues concise**: Mobile users appreciate shorter text blocks
2. **Balance choices**: Make each choice meaningful with different outcomes
3. **Use relationship effects wisely**: Small increments (5-10 points) for minor choices, larger (15-20) for major decisions
4. **Test all paths**: Ensure every branch leads to a proper conclusion
5. **Consider replay value**: Add enough variation to encourage multiple playthroughs

## Troubleshooting

### Game won't load
- Clear localStorage if corrupted saves cause issues
- Check browser console for errors

### Scenes not progressing
- Ensure all `nextSceneId` references exist
- Check that scenes have either `nextSceneId` or `choices`

### Endings not triggering
- Verify relationship point thresholds
- Check that ending scenes have `isEnding: true`

## Future Enhancements
- Add actual character artwork and backgrounds
- Implement sound effects and background music
- Add more complex relationship mechanics
- Create achievement system
- Add character gallery/profiles
- Implement multiple save profiles
- Add skip/fast-forward for seen text