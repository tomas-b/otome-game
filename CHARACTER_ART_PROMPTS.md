# Character Art Generation Prompts for Otome Game

## General Style Guidelines
For all character portraits, use these base style tags:
- **Style**: `anime style, visual novel character, otome game art, shoujo manga style, soft shading, detailed eyes, bishounen`
- **Quality**: `masterpiece, best quality, high resolution, detailed, professional artwork`
- **Composition**: `portrait, upper body, character sprite, transparent background or simple gradient background`
- **Negative prompts**: `low quality, blurry, distorted face, bad anatomy, extra fingers, poorly drawn hands, asymmetrical eyes`

## Character 1: Akira - Cheerful Childhood Friend

### Base Appearance
```
1boy, teenage boy, cheerful expression, warm smile, energetic pose, 
orange-red messy hair, short hair with slight spikes, bright amber eyes,
casual school uniform, loosened tie, partially unbuttoned blazer,
warm color palette, sunshine aura, approachable demeanor,
anime style, otome game character, bishounen, soft shading
```

### Emotional Variations

**Happy/Excited**
```
beaming smile, eyes closed smile, slightly blushing, hand raised in greeting,
energetic body language, leaning forward slightly
```

**Concerned/Worried**
```
gentle frown, worried eyes, hand reaching out, protective stance,
softer expression, eyebrows slightly furrowed
```

**Romantic/Tender**
```
soft smile, half-lidded eyes, gentle blush, intimate gaze,
hand near face, romantic lighting, warm atmosphere
```

### Color Palette
- Hair: #FF6B35 (Warm orange-red)
- Eyes: #FFA500 (Amber)
- Uniform: Navy blue blazer with white shirt
- Accent: #FFB6C1 (Light pink - his theme color)

---

## Character 2: Kazuki - Mysterious Brooding Type

### Base Appearance
```
1boy, teenage boy, mysterious expression, serious face, cold demeanor,
long dark purple hair, asymmetrical bangs covering one eye, deep violet eyes,
black school uniform, properly worn tie, closed blazer with silver accessories,
dark color palette, shadow effects, distant aura,
anime style, otome game character, bishounen, dramatic lighting
```

### Emotional Variations

**Default/Mysterious**
```
neutral expression, piercing gaze, arms crossed, slight smirk,
shadows over eyes, mysterious aura, wind-blown hair
```

**Surprised/Vulnerable**
```
wide eyes, slightly parted lips, guard dropped, genuine surprise,
both eyes visible, softer expression
```

**Protective/Intense**
```
sharp glare, protective stance, hand extended protectively,
intense expression, dramatic shadows, dangerous aura
```

### Color Palette
- Hair: #4B0082 (Dark purple/indigo)
- Eyes: #8B008B (Dark violet)
- Uniform: Black blazer with dark gray shirt
- Accent: #9370DB (Medium purple - his theme color)

---

## Character 3: Haruto - Gentle Scholarly Type

### Base Appearance
```
1boy, teenage boy, gentle smile, intellectual appearance, soft expression,
light blue hair, neat medium-length hair, clear blue eyes, glasses,
pristine school uniform, perfectly worn tie, blazer with student council pin,
light color palette, soft lighting, calming presence,
anime style, otome game character, bishounen, elegant posture
```

### Emotional Variations

**Reading/Focused**
```
adjusting glasses, book in hand, concentrated expression,
slightly serious face, scholarly pose
```

**Gentle/Caring**
```
warm smile, kind eyes, head tilted slightly, hand over heart,
soft expression, welcoming gesture
```

**Flustered/Shy**
```
blushing, glasses slightly askew, surprised expression,
hand adjusting glasses nervously, bashful smile
```

### Color Palette
- Hair: #B0E0E6 (Powder blue)
- Eyes: #4682B4 (Steel blue)
- Uniform: Light gray blazer with white shirt
- Accent: #87CEEB (Sky blue - his theme color)

---

## Scene Backgrounds

### School Entrance (Cherry Blossoms)
```
anime background, school gates, cherry blossom trees, petals falling,
spring atmosphere, morning light, romantic mood, 
visual novel background, no humans
```

### Library
```
anime background, school library, bookshelves, warm lighting,
window with afternoon sun, cozy atmosphere, wooden furniture,
visual novel background, no humans
```

### Rooftop
```
anime background, school rooftop, fence, blue sky with clouds,
sunset lighting option, cityscape in distance,
visual novel background, no humans
```

---

## Technical Specifications

### Recommended Settings for Stable Diffusion
- **Model**: Anything V5, CounterfeitV3, or other anime-focused models
- **Sampling method**: DPM++ 2M Karras or Euler a
- **Steps**: 20-30
- **CFG Scale**: 7-9
- **Size**: 512x768 (portrait) or 768x768 (square)
- **Upscale**: 2x with R-ESRGAN 4x+ Anime6B

### Recommended Settings for Midjourney
- **Base prompt addition**: `--niji 5` or `--niji 6` for anime style
- **Style**: `--style expressive` for more emotional range
- **Aspect ratio**: `--ar 2:3` for portraits
- **Quality**: `--q 2` for highest quality

### Recommended Settings for DALL-E 3
- Add: `in the style of high-quality Japanese visual novel art, professional otome game character design`
- Specify: `vertical portrait composition suitable for game sprite`

---

## Batch Generation Tips

1. **Consistency**: Generate multiple angles/expressions in one session using the same seed
2. **Expressions**: Create a base neutral expression first, then modify for emotions
3. **Outfit variations**: School uniform, casual clothes, formal wear
4. **Seasonal**: Summer/winter uniform variations
5. **CG scenes**: Two-character romantic scenes with specific poses

## Example Full Prompt (Akira - Happy)

```
1boy, teenage boy, cheerful expression, beaming smile, 
orange-red messy short hair with slight spikes, bright amber eyes,
navy blue school uniform, loosened red tie, partially unbuttoned blazer,
white shirt, warm smile, energetic pose, hand raised in greeting,
anime style, visual novel character, otome game art, bishounen,
soft shading, detailed eyes, masterpiece, best quality, high resolution,
portrait, upper body, simple gradient background, warm lighting
```

## Notes for Artists/Generators

- Maintain consistent character features across all expressions
- Eyes should be large and expressive (shoujo manga style)
- Include subtle highlights in hair for depth
- Soft color palettes work best for otome games
- Consider generating both left-facing and right-facing versions
- Create both day and evening lighting versions for versatility