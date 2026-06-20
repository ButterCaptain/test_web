/**
 * Header Loader - Hire Ready Pro
 * Injects the shared navigation header into the #header-placeholder element
 * and sets the active class on the current page's nav link.
 */
(function () {
    'use strict';

    const headerHTML = `
    <nav class="nav" id="main-nav">
        <a href="index.html" class="logo">Hire Ready Pro</a>
        <div class="nav-links" id="nav-links">
            <a href="index.html" class="nav-link home-link">Home</a>
            <a href="about.html" class="nav-link">About</a>
            <div class="nav-item">
                <a href="services.html" class="nav-link">Services</a>
                <div class="nav-dropdown">
                    <span class="dropdown-header">Students & Graduates</span>
                    <a href="services.html#grads" class="dropdown-link" onclick="if(window.openTab)openTab(null,'grads')">Career Assessments</a>
                    <a href="services.html#grads" class="dropdown-link" onclick="if(window.openTab)openTab(null,'grads')">Resume & LinkedIn</a>
                    <a href="services.html#grads" class="dropdown-link" onclick="if(window.openTab)openTab(null,'grads')">Interview Prep</a>
                    <span class="dropdown-header">Professionals</span>
                    <a href="services.html#pros" class="dropdown-link" onclick="if(window.openTab)openTab(null,'pros')">Career Strategy</a>
                    <a href="services.html#pros" class="dropdown-link" onclick="if(window.openTab)openTab(null,'pros')">Executive Positioning</a>
                    <a href="services.html#pros" class="dropdown-link" onclick="if(window.openTab)openTab(null,'pros')">Job Search Support</a>
                </div>
            </div>
            <a href="framework.html" class="nav-link">Framework</a>
            <a href="contact.html" class="nav-link">Contact</a>
            <a href="contact.html" class="btn-primary" style="padding: 8px 20px; font-size: 12px; border-radius: 8px;">Get Started</a>
            <!-- Burger Menu for Mobile -->
            <div class="nav-item burger-menu mobile-only">
                <span class="nav-link burger-icon" style="font-size: 24px;">☰</span>
                <div class="nav-dropdown burger-dropdown-right">
                    <a href="index.html" class="dropdown-link">Home</a>
                    <a href="about.html" class="dropdown-link">About</a>
                    <a href="services.html" class="dropdown-link">Services</a>
                    <a href="framework.html" class="dropdown-link">Framework</a>
                    <a href="contact.html" class="dropdown-link">Contact</a>
                </div>
            </div>
        </div>
    </nav>`;

    // Inject header HTML into placeholder
    const placeholder = document.getElementById('header-placeholder');
    if (placeholder) {
        placeholder.innerHTML = headerHTML;
    }

    // Set active class on the current page's nav link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    const navLinks = document.querySelectorAll('#main-nav .nav-link');
    navLinks.forEach(function (link) {
        const href = link.getAttribute('href');
        if (href && href.split('#')[0] === currentPath) {
            link.classList.add('active');
        }
    });

    // Also highlight burger dropdown links for the current page
    const dropdownLinks = document.querySelectorAll('.burger-dropdown-right .dropdown-link');
    dropdownLinks.forEach(function (link) {
        const href = link.getAttribute('href');
        if (href && href.split('#')[0] === currentPath) {
            link.classList.add('active');
        }
    });
})();
