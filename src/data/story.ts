import { StoryData, EndingData } from '@/types/game';

export const storyData: StoryData = {
  characters: [
    {
      id: 'akira',
      name: 'Akira',
      description: 'Your cheerful childhood friend who always brightens your day',
      personality: 'Cheerful, energetic, and supportive',
      color: '#FFB6C1', // Light pink
    },
    {
      id: 'kazuki',
      name: 'Kazuki',
      description: 'A mysterious transfer student with a hidden past',
      personality: 'Brooding, mysterious, and protective',
      color: '#9370DB', // Medium purple
    },
    {
      id: 'haruto',
      name: 'Haruto',
      description: 'The gentle class president who loves books and tea',
      personality: 'Scholarly, gentle, and thoughtful',
      color: '#87CEEB', // Sky blue
    },
  ],
  
  scenes: {
    // Opening scene
    'opening': {
      id: 'opening',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      dialogues: [
        { speaker: 'Narrator', text: 'Welcome to Heartfelt Academy, where your romantic journey begins...' },
        { speaker: 'You', text: "It's my first day at this prestigious school. I wonder what adventures await me?" },
        { speaker: 'Narrator', text: 'As you walk through the cherry blossom-lined path, you notice three distinct figures...' },
      ],
      nextSceneId: 'character-intro',
    },
    
    // Character introductions
    'character-intro': {
      id: 'character-intro',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      dialogues: [
        { speaker: 'Akira', text: 'Hey! There you are! I knew we\'d end up at the same school - we always stick together, right?', characterId: 'akira' },
        { speaker: 'You', text: 'Akira! Of course you\'d find me on the first day. Some things never change!' },
        { speaker: 'Kazuki', text: '...Another new face. How... predictable.', characterId: 'kazuki' },
        { speaker: 'You', text: '(Who is this mysterious person? There\'s something unsettling about him...)' },
        { speaker: 'Haruto', text: 'Welcome to Heartfelt Academy. I\'m Haruto, the class president. Please feel free to ask if you need any assistance.', characterId: 'haruto' },
      ],
      choices: [
        {
          text: 'Catch up with Akira',
          nextSceneId: 'akira-route-1',
          effects: [{ characterId: 'akira', points: 10 }],
        },
        {
          text: 'Ask Kazuki about himself',
          nextSceneId: 'kazuki-route-1',
          effects: [{ characterId: 'kazuki', points: 10 }],
        },
        {
          text: 'Thank Haruto for his kindness',
          nextSceneId: 'haruto-route-1',
          effects: [{ characterId: 'haruto', points: 10 }],
        },
      ],
    },
    
    // Akira Route
    'akira-route-1': {
      id: 'akira-route-1',
      background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      dialogues: [
        { speaker: 'Akira', text: "I'm so happy to see you again! Remember when we used to play in the park?", characterId: 'akira' },
        { speaker: 'You', text: 'Of course! You always won at hide and seek.' },
        { speaker: 'Akira', text: "Haha! That's because I knew all your hiding spots!", characterId: 'akira' },
        { speaker: 'Akira', text: 'Hey, want to grab lunch together? I know a great spot!', characterId: 'akira' },
      ],
      choices: [
        {
          text: 'I\'d love to! Lead the way!',
          nextSceneId: 'akira-route-2',
          effects: [{ characterId: 'akira', points: 15 }],
        },
        {
          text: 'Maybe another time, I should explore on my own first.',
          nextSceneId: 'common-route-1',
          effects: [{ characterId: 'akira', points: -5 }],
        },
      ],
    },
    
    'akira-route-2': {
      id: 'akira-route-2',
      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      dialogues: [
        { speaker: 'Akira', text: 'This is my favorite spot on campus! The view is amazing, right?', characterId: 'akira' },
        { speaker: 'You', text: 'It\'s beautiful! You can see the whole city from here.' },
        { speaker: 'Akira', text: 'I come here when I need to think or just relax.', characterId: 'akira' },
        { speaker: 'Akira', text: 'You know... I\'m really glad you\'re here. I was worried we\'d lost touch forever.', characterId: 'akira' },
      ],
      choices: [
        {
          text: 'I missed you too, Akira.',
          nextSceneId: 'akira-ending',
          effects: [{ characterId: 'akira', points: 20 }],
        },
        {
          text: 'It\'s nice to have a familiar face around.',
          nextSceneId: 'common-route-2',
          effects: [{ characterId: 'akira', points: 10 }],
        },
      ],
    },
    
    // Kazuki Route
    'kazuki-route-1': {
      id: 'kazuki-route-1',
      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      dialogues: [
        { speaker: 'Kazuki', text: 'Why are you interested in me?', characterId: 'kazuki' },
        { speaker: 'You', text: 'You seem... different from the others. In a good way.' },
        { speaker: 'Kazuki', text: '...Different. That\'s one way to put it.', characterId: 'kazuki' },
        { speaker: 'Kazuki', text: 'Most people avoid me. You\'re either brave or foolish.', characterId: 'kazuki' },
      ],
      choices: [
        {
          text: 'Maybe I\'m both. Want to find out?',
          nextSceneId: 'kazuki-route-2',
          effects: [{ characterId: 'kazuki', points: 15 }],
        },
        {
          text: 'I just believe everyone deserves a chance.',
          nextSceneId: 'common-route-1',
          effects: [{ characterId: 'kazuki', points: 5 }],
        },
      ],
    },
    
    'kazuki-route-2': {
      id: 'kazuki-route-2',
      background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
      dialogues: [
        { speaker: 'Kazuki', text: 'You\'re interesting. Not many people challenge me like that.', characterId: 'kazuki' },
        { speaker: 'You', text: 'Is that a compliment?' },
        { speaker: 'Kazuki', text: 'Take it however you want.', characterId: 'kazuki' },
        { speaker: 'Kazuki', text: 'There\'s something about you... You\'re not afraid of the shadows.', characterId: 'kazuki' },
        { speaker: 'Kazuki', text: 'Perhaps you\'re the light I\'ve been searching for...', characterId: 'kazuki' },
      ],
      choices: [
        {
          text: 'And maybe you\'re the mystery I want to solve.',
          nextSceneId: 'kazuki-ending',
          effects: [{ characterId: 'kazuki', points: 20 }],
        },
        {
          text: 'Everyone has light and shadow within them.',
          nextSceneId: 'common-route-2',
          effects: [{ characterId: 'kazuki', points: 10 }],
        },
      ],
    },
    
    // Haruto Route
    'haruto-route-1': {
      id: 'haruto-route-1',
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      dialogues: [
        { speaker: 'Haruto', text: 'You\'re very polite. That\'s refreshing.', characterId: 'haruto' },
        { speaker: 'You', text: 'Thank you. You\'ve been very welcoming.' },
        { speaker: 'Haruto', text: 'Would you like me to show you the library? It\'s my favorite place on campus.', characterId: 'haruto' },
        { speaker: 'Haruto', text: 'I often spend my free time there, reading or studying.', characterId: 'haruto' },
      ],
      choices: [
        {
          text: 'I\'d love to see it! I enjoy reading too.',
          nextSceneId: 'haruto-route-2',
          effects: [{ characterId: 'haruto', points: 15 }],
        },
        {
          text: 'Maybe later, I\'m still getting my bearings.',
          nextSceneId: 'common-route-1',
          effects: [{ characterId: 'haruto', points: 5 }],
        },
      ],
    },
    
    'haruto-route-2': {
      id: 'haruto-route-2',
      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      dialogues: [
        { speaker: 'Haruto', text: 'This section has all the classic literature. Do you have a favorite author?', characterId: 'haruto' },
        { speaker: 'You', text: 'I enjoy many different authors. What about you?' },
        { speaker: 'Haruto', text: 'I find solace in poetry. It speaks to the soul in ways prose cannot.', characterId: 'haruto' },
        { speaker: 'Haruto', text: 'Would you... like to read together sometime? I could recommend some books.', characterId: 'haruto' },
        { speaker: 'Haruto', text: 'Your company would make the stories even more enjoyable.', characterId: 'haruto' },
      ],
      choices: [
        {
          text: 'I\'d cherish every moment we spend together.',
          nextSceneId: 'haruto-ending',
          effects: [{ characterId: 'haruto', points: 20 }],
        },
        {
          text: 'That sounds nice. Friends who read together stay together!',
          nextSceneId: 'common-route-2',
          effects: [{ characterId: 'haruto', points: 10 }],
        },
      ],
    },
    
    // Common routes
    'common-route-1': {
      id: 'common-route-1',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      dialogues: [
        { speaker: 'Narrator', text: 'You spend the day exploring the campus and meeting other students.' },
        { speaker: 'You', text: 'This school is full of interesting people.' },
        { speaker: 'Narrator', text: 'As the sun sets, you wonder about the connections you\'ll make here.' },
      ],
      nextSceneId: 'common-route-2',
    },
    
    'common-route-2': {
      id: 'common-route-2',
      background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
      dialogues: [
        { speaker: 'Narrator', text: 'Days pass, and you find yourself thinking about the people you\'ve met.' },
        { speaker: 'You', text: 'Each of them is special in their own way...' },
        { speaker: 'Narrator', text: 'Who will capture your heart?' },
      ],
      choices: [
        {
          text: 'Spend more time with Akira',
          nextSceneId: 'akira-ending',
          effects: [{ characterId: 'akira', points: 15 }],
        },
        {
          text: 'Seek out Kazuki',
          nextSceneId: 'kazuki-ending',
          effects: [{ characterId: 'kazuki', points: 15 }],
        },
        {
          text: 'Visit Haruto in the library',
          nextSceneId: 'haruto-ending',
          effects: [{ characterId: 'haruto', points: 15 }],
        },
      ],
    },
    
    // Endings
    'akira-ending': {
      id: 'akira-ending',
      background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      dialogues: [
        { speaker: 'Akira', text: 'You know what? Being with you makes every day an adventure!', characterId: 'akira' },
        { speaker: 'Akira', text: 'I don\'t want to just be your childhood friend anymore...', characterId: 'akira' },
        { speaker: 'Akira', text: 'I want to be someone special to you. Will you give me a chance?', characterId: 'akira' },
        { speaker: 'You', text: 'Akira... you\'ve always been special to me.' },
        { speaker: 'Narrator', text: '~ Akira\'s Route: Happy Ending ~' },
      ],
      isEnding: true,
    },
    
    'kazuki-ending': {
      id: 'kazuki-ending',
      background: 'linear-gradient(135deg, #330867 0%, #30cfd0 100%)',
      dialogues: [
        { speaker: 'Kazuki', text: 'You\'ve changed me. I didn\'t think anyone could break through my walls.', characterId: 'kazuki' },
        { speaker: 'Kazuki', text: 'But you... you saw through the darkness to find the real me.', characterId: 'kazuki' },
        { speaker: 'Kazuki', text: 'Stay by my side. Be my light in this world.', characterId: 'kazuki' },
        { speaker: 'You', text: 'I\'ll always be here for you, Kazuki.' },
        { speaker: 'Narrator', text: '~ Kazuki\'s Route: Mysterious Love Ending ~' },
      ],
      isEnding: true,
    },
    
    'haruto-ending': {
      id: 'haruto-ending',
      background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
      dialogues: [
        { speaker: 'Haruto', text: 'In all the books I\'ve read, no story compares to ours.', characterId: 'haruto' },
        { speaker: 'Haruto', text: 'You\'ve brought color to my world of words and pages.', characterId: 'haruto' },
        { speaker: 'Haruto', text: 'Would you be willing to write our story together?', characterId: 'haruto' },
        { speaker: 'You', text: 'I\'d love nothing more, Haruto.' },
        { speaker: 'Narrator', text: '~ Haruto\'s Route: Gentle Romance Ending ~' },
      ],
      isEnding: true,
    },
    
    'neutral-ending': {
      id: 'neutral-ending',
      background: 'linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)',
      dialogues: [
        { speaker: 'Narrator', text: 'Your time at Heartfelt Academy has been filled with wonderful friendships.' },
        { speaker: 'You', text: 'I\'ve made so many precious memories here.' },
        { speaker: 'Narrator', text: 'Though romance hasn\'t bloomed yet, your story is far from over...' },
        { speaker: 'Narrator', text: '~ Friendship Ending ~' },
      ],
      isEnding: true,
    },
  },
  
  startSceneId: 'opening',
};

export const endings: EndingData[] = [
  {
    characterId: 'akira',
    title: 'Childhood Love Blooms',
    description: 'Your bond with Akira has grown into something beautiful.',
    sceneId: 'akira-ending',
  },
  {
    characterId: 'kazuki',
    title: 'Mystery Unveiled',
    description: 'You\'ve captured the heart of the mysterious Kazuki.',
    sceneId: 'kazuki-ending',
  },
  {
    characterId: 'haruto',
    title: 'A Gentle Romance',
    description: 'You and Haruto have found love among the books.',
    sceneId: 'haruto-ending',
  },
];

export function getEndingForCharacter(relationships: Record<string, number>): string {
  const scores = Object.entries(relationships);
  if (scores.length === 0) return 'neutral-ending';
  
  const highest = scores.reduce((prev, current) => 
    current[1] > prev[1] ? current : prev
  );
  
  if (highest[1] < 20) return 'neutral-ending';
  
  const ending = endings.find(e => e.characterId === highest[0]);
  return ending ? ending.sceneId : 'neutral-ending';
}