/**
 * Footer Loader - Hire Ready Pro
 * Injects the shared footer HTML into the #footer-placeholder element.
 */
(function () {
    'use strict';

    const footerHTML = `
    <footer>
        <div class="footer-grid">
            <div>
                <span class="footer-logo">Hire Ready Pro</span>
                <p style="color: rgba(255,255,255,0.4); font-size: 14px; max-width: 300px; margin-top: 16px;">Empowering students, graduates, and professionals to navigate today's competitive job market with confidence.</p>
            </div>
            <div>
                <div class="footer-h">Services</div>
                <a href="services.html" class="footer-link">Career Assessments</a>
                <a href="services.html" class="footer-link">Resume & LinkedIn</a>
                <a href="services.html" class="footer-link">Interview Prep</a>
                <a href="services.html" class="footer-link">Job Search Strategy</a>
            </div>
            <div>
                <div class="footer-h">Company</div>
                <a href="about.html" class="footer-link">About Us</a>
                <a href="framework.html" class="footer-link">Our Framework</a>
                <a href="contact.html" class="footer-link">Contact</a>
            </div>
            <div>
                <div class="footer-h">Connect</div>
                <a href="mailto:info@hirereadypro.com" class="footer-link">info@hirereadypro.com</a>
                <a href="#" class="footer-link">LinkedIn</a>
            </div>
        </div>
        <div class="footer-bottom">
            <span>© 2026 Hire Ready Pro. All rights reserved.</span>
            <span>Formerly HireReady Grad</span>
        </div>
    </footer>`;

    // Inject footer HTML into placeholder
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.innerHTML = footerHTML;
    }
})();
