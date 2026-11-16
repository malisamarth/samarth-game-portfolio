export type Project = {
  id: string; title: string; category: 'Gameplay' | 'Multiplayer' | 'Simulation' | 'AR';
  year: string; status: 'Prototype' | 'In development' | 'Experiment';
  tagline: string; description: string; stack: string[]; highlights: string[];
  accent: string; visual: string; featured?: boolean; images?: string[]; videoUrl?: string;
}

// Add real screenshot URLs to images and a YouTube embed URL or MP4 path to videoUrl when available.

export const projects: Project[] = [
  {
    id: 'tank-wars',
    title: 'Tank Wars',
    category: 'Gameplay',
    year: '2026',
    status: 'Prototype',
    tagline: 'Top-down combat and enemy behaviour.',
    description:
      'A top-down tank shooter prototype focused on player controls, enemy encounters and a compact gameplay loop.',
    stack: ['Unity', 'C#', 'AI', 'Gameplay Systems'],
    highlights: [
      'Implemented player tank controls and enemy movement behaviour.',
      'Built combat interactions, health handling and power-up mechanics.',
      'Added audio feedback and win/loss game states.',
    ],
    accent: 'orange',
    visual: 'tank',
    videoUrl: 'https://www.youtube.com/embed/BBgzOvZJd4Q',
  },
  {
    id: 'coop-physics',
    title: 'Co-op Physics Multiplayer',
    category: 'Multiplayer',
    year: '2026',
    status: 'Prototype',
    tagline: 'A physics-driven co-op experiment.',
    description:
      'A Unity multiplayer prototype exploring cooperative physics interactions, connected players and synchronized Rigidbody behaviour.',
    stack: ['Unity', 'C#', 'FishNet v4', 'Rigidbody'],
    highlights: [
      'Implemented dynamic joint constraints and weight-transfer interactions between connected players.',
      'Explored server-authoritative synchronization of Rigidbody physics states using FishNet.',
      'Built force-based movement and ServerRpc input handling to improve constraint stability.',
    ],
    accent: 'violet',
    visual: 'physics',
    videoUrl: 'https://www.youtube.com/embed/BBgzOvZJd4Q',
  },
  {
    id: 'drive-thru',
    title: 'Drive-Thru Food Game',
    category: 'Simulation',
    year: '2026',
    status: 'In development',
    tagline: 'A cozy pixel-art restaurant workflow.',
    description:
      'A drive-thru restaurant prototype where players process customer orders, prepare food and pack completed items.',
    stack: ['Unity', 'C#', '2D', 'UI Systems'],
    highlights: [
      'Built order and POS flows with item quantities, billing and customer information.',
      'Implemented waypoint-based car movement and counter-to-counter states.',
      'Designed sequential cooking queues and a grid-based food packing system.',
    ],
    accent: 'lime',
    visual: 'food',
    videoUrl: 'https://www.youtube.com/embed/BBgzOvZJd4Q',
  },
  {
    id: 'ar-train',
    title: 'AR Train Visualization',
    category: 'AR',
    year: '2026',
    status: 'Prototype',
    tagline: 'Explore a 3D model in augmented reality.',
    description:
      'An AR experience built around image-target tracking and interactive 3D model inspection.',
    stack: ['Unity', 'C#', 'Vuforia', 'AR'],
    highlights: [
      'Integrated Vuforia image-target tracking for model visualization.',
      'Implemented touch-based model rotation and scaling.',
      'Worked on contextual information UI for parts of the 3D model.',
    ],
    accent: 'cyan',
    visual: 'train',
    videoUrl: 'https://www.youtube.com/embed/BBgzOvZJd4Q',
  },
  {
    id: 'fishnet-lab',
    title: 'FishNet Multiplayer Experiments',
    category: 'Multiplayer',
    year: '2026',
    status: 'Experiment',
    tagline: 'Learning the building blocks of networked gameplay.',
    description:
      'A collection of focused experiments exploring multiplayer setup and synchronized gameplay behaviour with FishNet.',
    stack: ['Unity', 'C#', 'FishNet'],
    highlights: [
      'Explored networked player interactions and object synchronization.',
      'Worked with client/server gameplay flow and RPC-driven actions.',
      'Used small experiments to understand multiplayer architecture.',
    ],
    accent: 'blue',
    visual: 'network',
    videoUrl: 'https://www.youtube.com/embed/BBgzOvZJd4Q',
  },
  {
    id: '3d-runner',
    title: '3D Runner',
    category: 'Gameplay',
    year: '2025',
    status: 'Prototype',
    tagline: 'A focused experiment in 3D movement.',
    description:
      'A Unity prototype exploring a 3D runner gameplay loop and player movement.',
    stack: ['Unity', 'C#', '3D Gameplay'],
    highlights: [
      'Prototyped player movement and core runner interactions.',
      'Explored level flow and gameplay feedback.',
    ],
    accent: 'pink',
    visual: 'runner',
    videoUrl: 'https://www.youtube.com/embed/BBgzOvZJd4Q',
  },

    {
    id: '3d-runner',
    title: '3D Runner',
    category: 'Gameplay',
    year: '2025',
    status: 'Prototype',
    tagline: 'A focused experiment in 3D movement.',
    description:
      'A Unity prototype exploring a 3D runner gameplay loop and player movement.',
    stack: ['Unity', 'C#', '3D Gameplay'],
    highlights: [
      'Prototyped player movement and core runner interactions.',
      'Explored level flow and gameplay feedback.',
    ],
    accent: 'pink',
    visual: 'runner',
    videoUrl: 'https://www.youtube.com/embed/BBgzOvZJd4Q',
  },
];
