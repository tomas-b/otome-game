import { StoryData, EndingData } from '@/types/game';

export const russianStoryData: StoryData = {
  characters: [
    {
      id: 'vladimir',
      name: 'Vladimir El Grande',
      description: 'Son of a king and a prophet servant, conqueror who took what was denied to him',
      personality: 'Charismatic, forceful, charitable yet troubled by alcohol',
      color: '#8B0000', // Dark red - royal and passionate
      portraits: {
        default: '/characters/vladimir/default.jpg',
        happy: '/characters/vladimir/happy.jpg',
        serious: '/characters/vladimir/serious.jpg',
        romantic: '/characters/vladimir/romantic.jpg',
        drunk: '/characters/vladimir/drunk.jpg',
        commanding: '/characters/vladimir/commanding.jpg'
      }
    },
    {
      id: 'ilya',
      name: 'Ilya',
      description: 'Miraculously healed warrior of immense strength and temperament',
      personality: 'Extremely strong, temperamental, protective, easily offended but quick to forgive',
      color: '#2F4F4F', // Dark slate gray - strength and earth
      portraits: {
        default: '/characters/ilya/default.jpg',
        angry: '/characters/ilya/angry.jpg',
        calm: '/characters/ilya/calm.jpg',
        protective: '/characters/ilya/protective.jpg',
        strong: '/characters/ilya/strong.jpg',
        temperamental: '/characters/ilya/temperamental.jpg'
      }
    },
    {
      id: 'dobrynya',
      name: 'Dobrynya',
      description: "Vladimir's uncle, diplomat who defeated a dragon with just a hat",
      personality: 'Diplomatic, sensible, courteous, cunning, enlightened',
      color: '#4682B4', // Steel blue - wisdom and diplomacy
      portraits: {
        default: '/characters/dobrynya/default.jpg',
        diplomatic: '/characters/dobrynya/diplomatic.jpg',
        cunning: '/characters/dobrynya/cunning.jpg',
        gentle: '/characters/dobrynya/gentle.jpg',
        archer: '/characters/dobrynya/archer.jpg',
        wise: '/characters/dobrynya/wise.jpg'
      }
    },
    {
      id: 'alyesha',
      name: 'Alyesha',
      description: "Young priest's son who wins battles with wit and charm",
      personality: 'Intelligent, agile, social, brutally honest, charming trickster',
      color: '#FF8C00', // Dark orange - youth and energy
      portraits: {
        default: '/characters/alyesha/default.jpg',
        playful: '/characters/alyesha/playful.jpg',
        cunning: '/characters/alyesha/cunning.jpg',
        flirty: '/characters/alyesha/flirty.jpg',
        witty: '/characters/alyesha/witty.jpg',
        charming: '/characters/alyesha/charming.jpg'
      }
    },
    {
      id: 'vassily',
      name: 'Vassily',
      description: 'Young man who believes he\'s perfect but has a good heart',
      personality: 'Arrogant, impulsive, secretly kind, respects his mother deeply',
      color: '#9370DB', // Medium purple - youth and pride
      portraits: {
        default: '/characters/vassily/default.jpg',
        arrogant: '/characters/vassily/arrogant.jpg',
        sincere: '/characters/vassily/sincere.jpg',
        respectful: '/characters/vassily/respectful.jpg',
        proud: '/characters/vassily/proud.jpg',
        gentle: '/characters/vassily/gentle.jpg'
      }
    },
    {
      id: 'anika',
      name: 'Anika the Invincible',
      description: 'Cursed warrior who challenged Death itself and lost',
      personality: 'Violent, sacrilegious, hopeless, cursed to be a wolf except on new moon nights',
      color: '#800080', // Purple - mystical curse
      portraits: {
        default: '/characters/anika/default.jpg',
        wolf: '/characters/anika/wolf.jpg',
        violent: '/characters/anika/violent.jpg',
        defeated: '/characters/anika/defeated.jpg',
        cursed: '/characters/anika/cursed.jpg',
        hopeless: '/characters/anika/hopeless.jpg'
      }
    },
    {
      id: 'nikita',
      name: 'Nikita',
      description: 'Stoic furrier who defeated a dragon with a branch',
      personality: 'Serious, dark humor, direct, protective of children, unaffected by most things',
      color: '#696969', // Dim gray - stoic and serious
      portraits: {
        default: '/characters/nikita/default.jpg',
        serious: '/characters/nikita/serious.jpg',
        amused: '/characters/nikita/amused.jpg',
        gentle: '/characters/nikita/gentle.jpg',
        stoic: '/characters/nikita/stoic.jpg',
        protective: '/characters/nikita/protective.jpg'
      }
    },
    {
      id: 'mikula',
      name: 'Mikula',
      description: 'Blessed farmer beloved by the earth itself',
      personality: 'Lucky, gentle, sweet, normal man with extraordinary fortune',
      color: '#228B22', // Forest green - earth and nature
      portraits: {
        default: '/characters/mikula/default.jpg',
        happy: '/characters/mikula/happy.jpg',
        lucky: '/characters/mikula/lucky.jpg',
        tender: '/characters/mikula/tender.jpg',
        blessed: '/characters/mikula/blessed.jpg',
        farming: '/characters/mikula/farming.jpg'
      }
    }
  ],

  scenes: {
    // Opening scene
    'opening': {
      id: 'opening',
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      dialogues: [
        { speaker: 'Narrator', text: 'The ancient Rus stretches before you, a land of heroes and legends...' },
        { speaker: 'You', text: 'I\'ve traveled far to reach this legendary court. They say the greatest warriors gather here.' },
        { speaker: 'Narrator', text: 'As you enter the grand hall, you see figures of renown, each with their own legendary tale...' },
      ],
      nextSceneId: 'character-intro',
    },

    // Character introductions
    'character-intro': {
      id: 'character-intro',
      background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)',
      dialogues: [
        { speaker: 'Vladimir', text: 'Another visitor to my court? Come, drink with us! I have 800 reasons to celebrate!', characterId: 'vladimir', emotion: 'commanding' },
        { speaker: 'Ilya', text: '*towers over everyone* Hmph. You look fragile. Can you even lift a sword?', characterId: 'ilya', emotion: 'temperamental' },
        { speaker: 'Dobrynya', text: '*bows courteously* Welcome, traveler. Please, ignore my nephew\'s boasting.', characterId: 'dobrynya', emotion: 'diplomatic' },
        { speaker: 'Alyesha', text: 'Oh, a new face! Tell me, are you here for adventure... or something more interesting?', characterId: 'alyesha', emotion: 'flirty' },
      ],
      choices: [
        {
          text: 'Join Vladimir for a drink',
          nextSceneId: 'vladimir-route-1',
          effects: [{ characterId: 'vladimir', points: 10 }],
        },
        {
          text: 'Challenge Ilya\'s assumption',
          nextSceneId: 'ilya-route-1',
          effects: [{ characterId: 'ilya', points: 10 }],
        },
        {
          text: 'Thank Dobrynya for his courtesy',
          nextSceneId: 'dobrynya-route-1',
          effects: [{ characterId: 'dobrynya', points: 10 }],
        },
        {
          text: 'Flirt back with Alyesha',
          nextSceneId: 'alyesha-route-1',
          effects: [{ characterId: 'alyesha', points: 10 }],
        },
      ],
    },

    // Vladimir Route
    'vladimir-route-1': {
      id: 'vladimir-route-1',
      background: 'linear-gradient(135deg, #8B0000 0%, #DC143C 100%)',
      dialogues: [
        { speaker: 'Vladimir', text: 'Ha! You have spirit! Not many dare to drink with me anymore.', characterId: 'vladimir', emotion: 'happy' },
        { speaker: 'You', text: 'I\'ve heard stories about you. Is it true you conquered a kingdom for love?' },
        { speaker: 'Vladimir', text: '*darkens* Not for love. For pride. She called me a bastard...', characterId: 'vladimir', emotion: 'serious' },
        { speaker: 'Vladimir', text: 'But enough of that! Tonight we feast! Tomorrow, I\'ll show you my kingdom.', characterId: 'vladimir', emotion: 'drunk' },
      ],
      choices: [
        {
          text: 'I\'d like to know the real you, not just the conqueror',
          nextSceneId: 'vladimir-route-2',
          effects: [{ characterId: 'vladimir', points: 15 }],
        },
        {
          text: 'Your past doesn\'t define you',
          nextSceneId: 'common-route-1',
          effects: [{ characterId: 'vladimir', points: 5 }],
        },
      ],
    },

    // Ilya Route
    'ilya-route-1': {
      id: 'ilya-route-1',
      background: 'linear-gradient(135deg, #2F4F4F 0%, #708090 100%)',
      dialogues: [
        { speaker: 'Ilya', text: '*surprised* You dare talk back to me?', characterId: 'ilya', emotion: 'angry' },
        { speaker: 'You', text: 'Strength isn\'t just about muscles. There are many kinds of power.' },
        { speaker: 'Ilya', text: '*laughs loudly* You\'re right! I like you already!', characterId: 'ilya', emotion: 'calm' },
        { speaker: 'Ilya', text: 'Come, let me show you real strength. But be careful - I protect what\'s mine.', characterId: 'ilya', emotion: 'protective' },
      ],
      choices: [
        {
          text: 'I can take care of myself, but I appreciate your protection',
          nextSceneId: 'ilya-route-2',
          effects: [{ characterId: 'ilya', points: 15 }],
        },
        {
          text: 'Show me your strength',
          nextSceneId: 'common-route-1',
          effects: [{ characterId: 'ilya', points: 5 }],
        },
      ],
    },

    // Dobrynya Route
    'dobrynya-route-1': {
      id: 'dobrynya-route-1',
      background: 'linear-gradient(135deg, #4682B4 0%, #87CEEB 100%)',
      dialogues: [
        { speaker: 'Dobrynya', text: 'Your manners are refreshing in this court of warriors.', characterId: 'dobrynya', emotion: 'gentle' },
        { speaker: 'You', text: 'I\'ve heard you defeated a dragon with just a hat. How is that possible?' },
        { speaker: 'Dobrynya', text: '*smiles mysteriously* Sometimes the greatest victories come from wisdom, not weapons.', characterId: 'dobrynya', emotion: 'cunning' },
        { speaker: 'Dobrynya', text: 'Would you like to learn the art of true diplomacy?', characterId: 'dobrynya', emotion: 'wise' },
      ],
      choices: [
        {
          text: 'I\'d be honored to learn from you',
          nextSceneId: 'dobrynya-route-2',
          effects: [{ characterId: 'dobrynya', points: 15 }],
        },
        {
          text: 'Wisdom and strength together would be ideal',
          nextSceneId: 'common-route-1',
          effects: [{ characterId: 'dobrynya', points: 5 }],
        },
      ],
    },

    // Alyesha Route
    'alyesha-route-1': {
      id: 'alyesha-route-1',
      background: 'linear-gradient(135deg, #FF8C00 0%, #FFA500 100%)',
      dialogues: [
        { speaker: 'Alyesha', text: 'Oh, you can keep up with me? This is rare!', characterId: 'alyesha', emotion: 'playful' },
        { speaker: 'You', text: 'I\'ve heard you win battles with words rather than swords.' },
        { speaker: 'Alyesha', text: 'Why fight when you can make your enemy fight themselves?', characterId: 'alyesha', emotion: 'cunning' },
        { speaker: 'Alyesha', text: 'But enough about battles... I\'m more interested in you.', characterId: 'alyesha', emotion: 'flirty' },
      ],
      choices: [
        {
          text: 'Your honesty is refreshing, even if it stings',
          nextSceneId: 'alyesha-route-2',
          effects: [{ characterId: 'alyesha', points: 15 }],
        },
        {
          text: 'You\'re quite the charmer, aren\'t you?',
          nextSceneId: 'common-route-1',
          effects: [{ characterId: 'alyesha', points: 5 }],
        },
      ],
    },

    // Common route
    'common-route-1': {
      id: 'common-route-1',
      background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
      dialogues: [
        { speaker: 'Narrator', text: 'Days pass in the legendary court, and you find yourself drawn to multiple heroes...' },
        { speaker: 'Vassily', text: 'You know, I\'m perfect in every way. Mother says so!', characterId: 'vassily', emotion: 'arrogant' },
        { speaker: 'Anika', text: '*growls* Stay away from me. I bring only destruction.', characterId: 'anika', emotion: 'cursed' },
        { speaker: 'Nikita', text: '*quietly* Children like you. That\'s... unusual.', characterId: 'nikita', emotion: 'gentle' },
        { speaker: 'Mikula', text: 'The earth blessed my fields again! Want to see?', characterId: 'mikula', emotion: 'happy' },
      ],
      nextSceneId: 'common-route-2',
    },

    // Additional routes would continue here...
    'common-route-2': {
      id: 'common-route-2',
      background: 'linear-gradient(135deg, #E6E6FA 0%, #D8BFD8 100%)',
      dialogues: [
        { speaker: 'Narrator', text: 'The time has come to choose your path among these legendary figures...' },
        { speaker: 'You', text: 'Each of them has captured my interest in different ways...' },
      ],
      choices: [
        {
          text: 'Pursue Vladimir\'s complex heart',
          nextSceneId: 'vladimir-ending',
          effects: [{ characterId: 'vladimir', points: 20 }],
        },
        {
          text: 'Stand beside Ilya\'s strength',
          nextSceneId: 'ilya-ending',
          effects: [{ characterId: 'ilya', points: 20 }],
        },
        {
          text: 'Learn from Dobrynya\'s wisdom',
          nextSceneId: 'dobrynya-ending',
          effects: [{ characterId: 'dobrynya', points: 20 }],
        },
        {
          text: 'Match wits with Alyesha',
          nextSceneId: 'alyesha-ending',
          effects: [{ characterId: 'alyesha', points: 20 }],
        },
      ],
    },

    // Endings
    'vladimir-ending': {
      id: 'vladimir-ending',
      background: 'linear-gradient(135deg, #8B0000 0%, #FFD700 100%)',
      dialogues: [
        { speaker: 'Vladimir', text: 'You see past my conquests to the man beneath...', characterId: 'vladimir', emotion: 'romantic' },
        { speaker: 'Vladimir', text: 'I\'ve had 800 concubinas, but none captured my heart like you.', characterId: 'vladimir', emotion: 'serious' },
        { speaker: 'Vladimir', text: 'Rule beside me. Not as a conquest, but as my equal.', characterId: 'vladimir', emotion: 'commanding' },
        { speaker: 'You', text: 'I accept, my complicated king.' },
        { speaker: 'Narrator', text: '~ Vladimir\'s Route: Crown of Thorns and Roses ~' },
      ],
      isEnding: true,
    },

    'ilya-ending': {
      id: 'ilya-ending',
      background: 'linear-gradient(135deg, #2F4F4F 0%, #87CEEB 100%)',
      dialogues: [
        { speaker: 'Ilya', text: 'You\'re stronger than I thought. Not in body, but in spirit.', characterId: 'ilya', emotion: 'calm' },
        { speaker: 'Ilya', text: 'I was warned not to seek certain things... but I\'m stubborn.', characterId: 'ilya', emotion: 'protective' },
        { speaker: 'Ilya', text: 'I\'ll protect you with the strength of gods and men combined.', characterId: 'ilya', emotion: 'strong' },
        { speaker: 'You', text: 'And I\'ll calm your storms, my giant.' },
        { speaker: 'Narrator', text: '~ Ilya\'s Route: Strength and Serenity ~' },
      ],
      isEnding: true,
    },

    'dobrynya-ending': {
      id: 'dobrynya-ending',
      background: 'linear-gradient(135deg, #4682B4 0%, #FFD700 100%)',
      dialogues: [
        { speaker: 'Dobrynya', text: 'I once saved a princess but couldn\'t marry her due to my status...', characterId: 'dobrynya', emotion: 'gentle' },
        { speaker: 'Dobrynya', text: 'But you... you don\'t care about such things, do you?', characterId: 'dobrynya', emotion: 'wise' },
        { speaker: 'Dobrynya', text: 'Let me show you a love built on respect and wisdom.', characterId: 'dobrynya', emotion: 'diplomatic' },
        { speaker: 'You', text: 'Status means nothing compared to your noble heart.' },
        { speaker: 'Narrator', text: '~ Dobrynya\'s Route: The Wise Heart\'s Victory ~' },
      ],
      isEnding: true,
    },

    'alyesha-ending': {
      id: 'alyesha-ending',
      background: 'linear-gradient(135deg, #FF8C00 0%, #FFD700 100%)',
      dialogues: [
        { speaker: 'Alyesha', text: 'You know I\'m a trickster, yet you stayed...', characterId: 'alyesha', emotion: 'charming' },
        { speaker: 'Alyesha', text: 'My honesty may sting, but it\'s real. Like my feelings for you.', characterId: 'alyesha', emotion: 'witty' },
        { speaker: 'Alyesha', text: 'Let\'s create chaos together, my clever love.', characterId: 'alyesha', emotion: 'flirty' },
        { speaker: 'You', text: 'With you, even chaos sounds like paradise.' },
        { speaker: 'Narrator', text: '~ Alyesha\'s Route: Love\'s Clever Game ~' },
      ],
      isEnding: true,
    },
  },

  startSceneId: 'opening',
};

export const russianEndings: EndingData[] = [
  {
    characterId: 'vladimir',
    title: 'Crown of Thorns and Roses',
    description: 'You\'ve conquered the conqueror\'s heart.',
    sceneId: 'vladimir-ending',
  },
  {
    characterId: 'ilya',
    title: 'Strength and Serenity',
    description: 'You\'ve become the calm to his storm.',
    sceneId: 'ilya-ending',
  },
  {
    characterId: 'dobrynya',
    title: 'The Wise Heart\'s Victory',
    description: 'Wisdom and love transcend all boundaries.',
    sceneId: 'dobrynya-ending',
  },
  {
    characterId: 'alyesha',
    title: 'Love\'s Clever Game',
    description: 'You\'ve matched wits and won hearts.',
    sceneId: 'alyesha-ending',
  },
  {
    characterId: 'vassily',
    title: 'Perfect Imperfection',
    description: 'You\'ve shown him true perfection lies in acceptance.',
    sceneId: 'vassily-ending',
  },
  {
    characterId: 'anika',
    title: 'Breaking the Curse',
    description: 'Love proved stronger than Death\'s curse.',
    sceneId: 'anika-ending',
  },
  {
    characterId: 'nikita',
    title: 'The Stoic\'s Smile',
    description: 'You\'ve melted the ice around his heart.',
    sceneId: 'nikita-ending',
  },
  {
    characterId: 'mikula',
    title: 'Earth\'s Blessing',
    description: 'The luckiest man found his greatest treasure.',
    sceneId: 'mikula-ending',
  },
];