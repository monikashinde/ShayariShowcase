// Navigation handling
document.addEventListener('DOMContentLoaded', () => {
    // Handle navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    function showPage(pageId) {
        // Hide all pages
        pages.forEach(page => page.classList.remove('active'));
        
        // Show selected page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }
        
        // Update active nav link
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('data-page');
            if (linkPage === pageId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // Navigation click handlers
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            showPage(pageId);
            
            // Update URL hash
            window.location.hash = pageId;
        });
    });
    
    // Handle hero button
    const heroButton = document.querySelector('.hero-button');
    if (heroButton) {
        heroButton.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('collection');
            window.location.hash = 'collection';
        });
    }
    
    // Handle browser back/forward
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.slice(1);
        if (hash) {
            showPage(hash);
        } else {
            showPage('home');
        }
    });
    
    // Check initial hash
    const initialHash = window.location.hash.slice(1);
    if (initialHash && (initialHash === 'home' || initialHash === 'collection')) {
        showPage(initialHash);
    }
    
    // Load shayari
    loadShayari();
});

// Load and display shayari
async function loadShayari() {
    const container = document.getElementById('cardsContainer');
    
    try {
        const response = await fetch('/shayari.json');
        if (!response.ok) {
            throw new Error('Failed to load shayari');
        }
        
        const shayariList = await response.json();
        
        // Clear loading message
        container.innerHTML = '';
        
        // Create cards
        shayariList.forEach(shayari => {
            const card = createShayariCard(shayari);
            container.appendChild(card);
        });
        
    } catch (error) {
        console.error('Error loading shayari:', error);
        container.innerHTML = '<div class="loading">Error loading shayari. Please try again later.</div>';
    }
}

// Create a shayari card element
function createShayariCard(shayari) {
    const card = document.createElement('div');
    card.className = 'shayari-card';
    card.setAttribute('data-testid', `card-shayari-${shayari.id}`);
    
    card.innerHTML = `
        <div class="card-inner">
            <!-- Hindi Side -->
            <div class="card-face card-front">
                <div class="card-content">
                    <h3 class="card-title hindi" data-testid="text-hindi-title-${shayari.id}">
                        ${escapeHtml(shayari.hindiTitle)}
                    </h3>
                    
                    <div class="card-text-container">
                        <p class="card-text hindi" data-testid="text-hindi-content-${shayari.id}">
                            ${escapeHtml(shayari.hindiText)}
                        </p>
                    </div>
                    
                    <div class="card-footer">
                        <p class="card-date" data-testid="text-date-${shayari.id}">
                            ${escapeHtml(shayari.date)}
                        </p>
                        <p class="card-hint">Tap for English</p>
                    </div>
                </div>
            </div>
            
            <!-- English Side -->
            <div class="card-face card-back">
                <div class="card-content">
                    <h3 class="card-title" data-testid="text-english-title-${shayari.id}">
                        ${escapeHtml(shayari.englishTitle)}
                    </h3>
                    
                    <div class="card-text-container">
                        <p class="card-text" data-testid="text-english-content-${shayari.id}">
                            ${escapeHtml(shayari.englishText)}
                        </p>
                    </div>
                    
                    <div class="card-footer">
                        <p class="card-date" data-testid="text-date-english-${shayari.id}">
                            ${escapeHtml(shayari.date)}
                        </p>
                        <p class="card-hint">Tap to see Hindi</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add click handler for flip
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
    
    return card;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
