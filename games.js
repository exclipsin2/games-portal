const GAMES = [
    {
        id: 1,
        title: '2048',
        description: 'Slide tiles to combine them and reach the 2048 tile!',
        category: 'puzzle',
        url: 'https://gabrielecirulli.github.io/2048/',
        emoji: '🔢',
        tags: ['puzzle', 'numbers', 'strategy']
    },
    {
        id: 2,
        title: 'Flappy Bird',
        description: 'Navigate the bird through the pipes without hitting them.',
        category: 'action',
        url: 'https://nebraskajs.com/2048/flappy_bird/',
        emoji: '🐦',
        tags: ['action', 'arcade', 'classic']
    },
    {
        id: 3,
        title: 'Snake Game',
        description: 'Classic snake game - eat food and grow longer!',
        category: 'arcade',
        url: 'https://www.playsnake.org/',
        emoji: '🐍',
        tags: ['arcade', 'classic', 'addictive']
    },
    {
        id: 4,
        title: 'Pac-Man',
        description: 'Navigate the maze and eat all pellets while avoiding ghosts.',
        category: 'arcade',
        url: 'https://games.cdn.famobi.com/html5/pacman/',
        emoji: '👾',
        tags: ['arcade', 'classic', 'multiplayer']
    },
    {
        id: 5,
        title: 'Tetris',
        description: 'Stack falling blocks to complete rows and score points.',
        category: 'puzzle',
        url: 'https://tetris.com/play-tetris',
        emoji: '🧩',
        tags: ['puzzle', 'classic', 'blocks']
    },
    {
        id: 6,
        title: 'Agar.io',
        description: 'Grow your cell by eating smaller ones in this multiplayer game!',
        category: 'multiplayer',
        url: 'https://agar.io/',
        emoji: '⭕',
        tags: ['multiplayer', 'io-game', 'strategy']
    },
    {
        id: 7,
        title: 'Slither.io',
        description: 'Control a snake and try to become the longest in the arena.',
        category: 'multiplayer',
        url: 'https://slither.io/',
        emoji: '🐛',
        tags: ['multiplayer', 'io-game', 'action']
    },
    {
        id: 8,
        title: 'Wordle',
        description: 'Guess the 5-letter word in 6 tries!',
        category: 'puzzle',
        url: 'https://www.nytimes.com/games/wordle/index.html',
        emoji: '🔤',
        tags: ['puzzle', 'words', 'daily']
    },
    {
        id: 9,
        title: 'Cookie Clicker',
        description: 'Click cookies and build an empire! An idle game classic.',
        category: 'arcade',
        url: 'https://orteil.dashnet.org/cookieclicker/',
        emoji: '🍪',
        tags: ['arcade', 'idle', 'clicker']
    },
    {
        id: 10,
        title: 'Dino Game',
        description: 'Help the dinosaur avoid obstacles in this classic Chrome game.',
        category: 'action',
        url: 'https://chromedino.com/',
        emoji: '🦕',
        tags: ['action', 'arcade', 'classic']
    },
    {
        id: 11,
        title: 'Minesweeper',
        description: 'Uncover tiles and avoid the mines in this classic puzzle game.',
        category: 'puzzle',
        url: 'https://minesweeper.online/',
        emoji: '💣',
        tags: ['puzzle', 'classic', 'strategy']
    },
    {
        id: 12,
        title: 'Geometry Dash',
        description: 'Jump and fly through obstacles in perfect sync with the music.',
        category: 'action',
        url: 'https://www.geometrydash.download/',
        emoji: '🟦',
        tags: ['action', 'platformer', 'music']
    },
    {
        id: 13,
        title: 'Chess',
        description: 'Play chess against AI or other players online.',
        category: 'strategy',
        url: 'https://chess.com/play/online',
        emoji: '♟️',
        tags: ['strategy', 'board', 'multiplayer']
    },
    {
        id: 14,
        title: 'Checkers',
        description: 'Jump your pieces over your opponent\'s pieces in this classic game.',
        category: 'strategy',
        url: 'https://www.gamesforthebrain.com/game/checkers/',
        emoji: '🏁',
        tags: ['strategy', 'board', 'classic']
    },
    {
        id: 15,
        title: 'Memory Tiles',
        description: 'Match pairs of identical tiles in this memory game.',
        category: 'puzzle',
        url: 'https://www.memorymazing.com/memory-game',
        emoji: '🧠',
        tags: ['puzzle', 'memory', 'brain']
    },
    {
        id: 16,
        title: 'Breakout',
        description: 'Bounce a ball to break bricks at the top of the screen.',
        category: 'arcade',
        url: 'https://breakout.digitalgoods.io/',
        emoji: '🧱',
        tags: ['arcade', 'classic', 'action']
    },
    {
        id: 17,
        title: 'Space Invaders',
        description: 'Defend Earth from waves of alien invaders.',
        category: 'arcade',
        url: 'https://www.spaceinvaders.de/',
        emoji: '👽',
        tags: ['arcade', 'classic', 'shooting']
    },
    {
        id: 18,
        title: 'Missile Command',
        description: 'Defend your city from falling missiles using your anti-missile defenses.',
        category: 'arcade',
        url: 'https://www.retrogames.cc/games/missile-command/play.html',
        emoji: '🚀',
        tags: ['arcade', 'classic', 'defense']
    },
    {
        id: 19,
        title: '2048 Variants',
        description: 'Play variations of the popular 2048 game with different themes.',
        category: 'puzzle',
        url: 'https://2048game.com/',
        emoji: '🎮',
        tags: ['puzzle', 'numbers', 'variants']
    },
    {
        id: 20,
        title: 'Sudoku',
        description: 'Solve number puzzles by filling grids with the right numbers.',
        category: 'puzzle',
        url: 'https://sudoku.com/',
        emoji: '🔢',
        tags: ['puzzle', 'numbers', 'classic']
    },
    {
        id: 21,
        title: 'Crossword',
        description: 'Solve crossword puzzles with words and clues.',
        category: 'puzzle',
        url: 'https://www.crosswordlabs.com/create',
        emoji: '✒️',
        tags: ['puzzle', 'words', 'brain']
    },
    {
        id: 22,
        title: 'Connect Four',
        description: 'Place your pieces in the grid and get four in a row to win.',
        category: 'strategy',
        url: 'https://www.mathsisfun.com/games/connect4.html',
        emoji: '🔴',
        tags: ['strategy', 'board', 'multiplayer']
    },
    {
        id: 23,
        title: 'Tic Tac Toe',
        description: 'The classic three-in-a-row game against AI or a friend.',
        category: 'strategy',
        url: 'https://playtictactoe.org/',
        emoji: '⭕',
        tags: ['strategy', 'classic', 'quick']
    },
    {
        id: 24,
        title: 'Hangman',
        description: 'Guess the word letter by letter before you run out of guesses!',
        category: 'puzzle',
        url: 'https://www.hangmanwordgame.com/',
        emoji: '🔤',
        tags: ['puzzle', 'words', 'classic']
    },
    {
        id: 25,
        title: 'Typing Master',
        description: 'Improve your typing speed in this fun typing game.',
        category: 'arcade',
        url: 'https://www.typingmaster.com/games',
        emoji: '⌨️',
        tags: ['arcade', 'educational', 'skill']
    }
];

// Game categories
const CATEGORIES = [
    { name: 'all', label: 'All Games' },
    { name: 'puzzle', label: 'Puzzle' },
    { name: 'action', label: 'Action' },
    { name: 'arcade', label: 'Arcade' },
    { name: 'strategy', label: 'Strategy' },
    { name: 'multiplayer', label: 'Multiplayer' }
];
