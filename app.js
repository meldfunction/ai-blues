// Main application logic

// Quiz state
let quizAnswers = {
    feeling: null,
    profession: null
};

// Handle quiz option selection
function handleQuizSelection(questionId, route, element) {
    // Store answer
    quizAnswers[questionId] = route;
    
    // Visual feedback - mark as selected
    const options = element.parentElement.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    
    // If both questions answered, show result
    if (quizAnswers.feeling && quizAnswers.profession) {
        showQuizResult();
    }
}

// Show quiz result
function showQuizResult() {
    const resultDiv = document.getElementById('quiz-result');
    
    // Determine which path to recommend
    // For now, just use profession path as primary recommendation
    const recommendedPath = quizAnswers.profession;
    
    resultDiv.innerHTML = `
        <div class="card" style="background: linear-gradient(135deg, var(--color-primary), var(--color-accent)); color: white; text-align: center;">
            <h2 style="color: white; margin-bottom: 1rem;">Your Recommended Path</h2>
            <a href="#${recommendedPath}" class="btn btn-large" style="background: white; color: var(--color-primary);">
                View Your Personalized Path →
            </a>
        </div>
        
        <div class="card mt-lg">
            <h3>Before You Go</h3>
            <p>We also recommend checking out:</p>
            <ul>
                <li><a href="#discover">How to Discover What's Needed</a> - Essential for finding opportunities</li>
                <li><a href="#signals">Building Signal Networks</a> - How to navigate with others</li>
            </ul>
        </div>
    `;
    
    resultDiv.style.display = 'block';
    
    // Scroll to result
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Mobile navigation toggle
function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.main-nav')) {
                navList.classList.remove('active');
            }
        });
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize router
    router.init();
    
    // Initialize mobile navigation
    initMobileNav();
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
});

// Utility: scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add back-to-top button (optional enhancement)
function addBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--color-primary);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s, transform 0.1s;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;
    
    backToTop.addEventListener('click', scrollToTop);
    
    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
        } else {
            backToTop.style.opacity = '0';
        }
    });
    
    document.body.appendChild(backToTop);
}

// Add back-to-top when ready
document.addEventListener('DOMContentLoaded', addBackToTop);
