// Simple hash-based router for GitHub Pages
const router = {
    routes: {
        'home': Components.home,
        'discover': Components.discover,
        'diagnostic': Components.diagnostic,
        'systems': Components.systems,
        'amish': Components.amish,
        'signals': Components.signals,
        'tech-worker': () => Components.pathPage(SITE_DATA.paths['tech-worker']),
        'business-owner': () => Components.pathPage(SITE_DATA.paths['business-owner']),
        'parent-caregiver': () => Components.pathPage(SITE_DATA.paths['parent-caregiver']),
        'middle-manager': () => Components.pathPage(SITE_DATA.paths['middle-manager']),
        'young-person': () => Components.pathPage(SITE_DATA.paths['young-person']),
        'late-career': () => Components.pathPage(SITE_DATA.paths['late-career']),
        'skilled-trades': () => Components.pathPage(SITE_DATA.paths['skilled-trades'])
    },

    currentRoute: null,
    
    init() {
        // Listen for hash changes
        window.addEventListener('hashchange', () => this.handleRoute());
        
        // Handle initial load
        this.handleRoute();
    },

    handleRoute() {
        // Get hash without the #
        const hash = window.location.hash.slice(1) || 'home';
        
        // Update active nav link
        this.updateActiveNav(hash);
        
        // Render the appropriate component
        this.render(hash);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        this.currentRoute = hash;
    },

    updateActiveNav(route) {
        // Remove active class from all nav links
        document.querySelectorAll('.nav-list a').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to current route
        const activeLink = document.querySelector(`.nav-list a[href="#${route}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    },

    render(route) {
        const app = document.getElementById('app');
        const component = this.routes[route] || Components.notFound;
        
        // Fade out
        app.style.opacity = '0';
        
        // Wait for fade, then update content
        setTimeout(() => {
            app.innerHTML = component();
            
            // Fade in
            setTimeout(() => {
                app.style.opacity = '1';
            }, 50);
        }, 200);
    },

    navigate(hash) {
        window.location.hash = hash;
    }
};

// Add CSS transition for fade effect
const style = document.createElement('style');
style.textContent = `
    #app {
        transition: opacity 0.2s ease-in-out;
    }
`;
document.head.appendChild(style);
