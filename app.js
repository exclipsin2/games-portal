// DOM Elements
const gamesGrid = document.getElementById('gamesGrid');
const searchBox = document.getElementById('searchBox');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('gameModal');
const closeBtn = document.querySelector('.close');
const gameFrame = document.getElementById('gameFrame');

let currentFilter = 'all';
let currentSearch = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayGames(GAMES);
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    // Search functionality
    searchBox.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        filterAndDisplayGames();
    });

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            filterAndDisplayGames();
        });
    });

    // Modal close
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Filter and Display Games
function filterAndDisplayGames() {
    let filtered = GAMES.filter(game => {
        const matchesFilter = currentFilter === 'all' || game.category === currentFilter;
        const matchesSearch = 
            game.title.toLowerCase().includes(currentSearch) ||
            game.description.toLowerCase().includes(currentSearch) ||
            game.tags.some(tag => tag.toLowerCase().includes(currentSearch));
        
        return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
        gamesGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <h2>No games found</h2>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
    } else {
        displayGames(filtered);
    }
}

// Display Games
function displayGames(games) {
    gamesGrid.innerHTML = '';
    
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <div class="game-card-image">${game.emoji}</div>
            <div class="game-card-content">
                <div class="game-card-title">${game.title}</div>
                <div class="game-card-description">${game.description}</div>
                <div class="game-card-tags">
                    ${game.tags.map(tag => `<span class="game-tag">${tag}</span>`).join('')}
                </div>
                <button class="play-btn" onclick="openGame(${game.id})">Play Now</button>
            </div>
        `;
        gamesGrid.appendChild(gameCard);
    });
}

// Open Game Modal
function openGame(gameId) {
    const game = GAMES.find(g => g.id === gameId);
    if (!game) return;

    document.getElementById('modalTitle').textContent = game.title;
    document.getElementById('modalDescription').textContent = game.description;
    document.getElementById('modalControls').textContent = `Category: ${game.category} | Tags: ${game.tags.join(', ')}`;
    
    gameFrame.src = game.url;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    modal.style.display = 'none';
    gameFrame.src = '';
    document.body.style.overflow = 'auto';
}

// Keyboard shortcut to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
