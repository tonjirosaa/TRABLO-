        // NAVBAR AND THEME TOGGLE SCRIPT

        const themeBtn = document.getElementById('themeBtn');
        const themeIcon = document.getElementById('themeIcon');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLeft = document.getElementById('navLeft');
        const navRight = document.getElementById('navRight');
        let isDark = false;
        let menuOpen = false;

        // Theme toggle
        themeBtn.addEventListener('click', () => {
            isDark = !isDark;
            themeIcon.textContent = isDark ? '☀️' : '🌙';
            
            if (isDark) {
                document.body.style.background = 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)';
                document.querySelector('nav').style.background = 'rgba(45, 55, 72, 0.95)';
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.style.color = '#e2e8f0';
                });
                if (navLeft.classList.contains('active')) {
                    navLeft.style.background = 'rgba(45, 55, 72, 0.98)';
                }
                if (navRight.classList.contains('active')) {
                    navRight.style.background = 'rgba(45, 55, 72, 0.98)';
                }
            } else {
                document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                document.querySelector('nav').style.background = 'rgba(255, 255, 255, 0.95)';
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.style.color = '#4a5568';
                });
                if (navLeft.classList.contains('active')) {
                    navLeft.style.background = 'rgba(255, 255, 255, 0.98)';
                }
                if (navRight.classList.contains('active')) {
                    navRight.style.background = 'rgba(255, 255, 255, 0.98)';
                }
            }
        });

        // Mobile menu toggle
        mobileMenuBtn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            
            if (menuOpen) {
                navLeft.classList.add('active');
                navRight.classList.add('active');
                mobileMenuBtn.textContent = '✕';
            } else {
                navLeft.classList.remove('active');
                navRight.classList.remove('active');
                mobileMenuBtn.textContent = '☰';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (menuOpen && !e.target.closest('nav')) {
                navLeft.classList.remove('active');
                navRight.classList.remove('active');
                mobileMenuBtn.textContent = '☰';
                menuOpen = false;
            }
        });

        // ENDS HERE NAVBAR AND THEME TOGGLE SCRIPT

