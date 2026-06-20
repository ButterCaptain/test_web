/**
 * Scroll Animations - Hire Ready Pro
 * Uses IntersectionObserver to trigger entrance animations when elements
 * scroll into the viewport. Also handles counter animations that count
 * from 0 up to a data-target value.
 */
document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // ──────────────────────────────────────────────
    // Intersection Observer for scroll-based reveals
    // ──────────────────────────────────────────────
    const animatedSelectors = [
        '.animate-on-scroll',
        '.animate-slide-left',
        '.animate-slide-right',
        '.animate-scale'
    ];

    const scrollObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Stop observing once the animation has been triggered
                    scrollObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    // Observe all matching elements
    const animatedElements = document.querySelectorAll(animatedSelectors.join(', '));
    animatedElements.forEach(function (el) {
        scrollObserver.observe(el);
    });

    // ──────────────────────────────────────────────
    // Counter Animation
    // ──────────────────────────────────────────────
    /**
     * Animates a counter element from 0 to its data-target value.
     * @param {HTMLElement} el - The counter element
     */
    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-target'), 10);
        if (isNaN(target)) return;

        const duration = 2000; // 2 seconds
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic for a smooth deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.round(eased * target);

            el.textContent = currentValue.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                // Ensure we land exactly on the target
                el.textContent = target.toLocaleString();
            }
        }

        requestAnimationFrame(updateCounter);
    }

    // Observe counter elements separately so we can trigger the count animation
    const counterObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    const counterElements = document.querySelectorAll('.counter');
    counterElements.forEach(function (el) {
        // Initialize to 0 so the user sees the animation from the start
        el.textContent = '0';
        counterObserver.observe(el);
    });
});
