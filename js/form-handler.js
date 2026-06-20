/**
 * Form Handler - Hire Ready Pro
 * Handles contact form submissions with a simulated backend response.
 * Adds loading state to the submit button, shows a styled success message
 * in #formResponse, and resets the form after submission.
 */
document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    const form = document.getElementById('contactForm');
    if (!form) return;

    const responseDiv = document.getElementById('formResponse');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach(function (value, key) {
            data[key] = value;
        });

        // ── Loading state ──
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.dataset.originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
            submitBtn.style.opacity = '0.7';
            submitBtn.style.cursor = 'wait';
        }

        // ── Simulate a network request (no real backend) ──
        setTimeout(function () {
            // Reset button state
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = submitBtn.dataset.originalText || 'Submit';
                submitBtn.style.opacity = '1';
                submitBtn.style.cursor = 'pointer';
            }

            // Show success message
            if (responseDiv) {
                responseDiv.innerHTML = `
                    <div style="
                        background: rgba(99, 102, 241, 0.1);
                        border: 1px solid rgba(99, 102, 241, 0.3);
                        border-radius: 12px;
                        padding: 24px;
                        text-align: center;
                        animation: fadeInUp 0.5s ease;
                    ">
                        <div style="font-size: 40px; margin-bottom: 12px;">✓</div>
                        <h3 style="color: #818cf8; margin-bottom: 8px; font-size: 18px;">Message Sent!</h3>
                        <p style="color: rgba(255,255,255,0.6); font-size: 14px;">
                            Thank you! We'll be in touch within 48 hours.
                        </p>
                    </div>`;
                responseDiv.style.display = 'block';
            }

            // Reset the form
            form.reset();

            // Auto-hide success message after 8 seconds
            setTimeout(function () {
                if (responseDiv) {
                    responseDiv.style.opacity = '0';
                    responseDiv.style.transition = 'opacity 0.5s ease';
                    setTimeout(function () {
                        responseDiv.innerHTML = '';
                        responseDiv.style.opacity = '1';
                        responseDiv.style.display = 'none';
                    }, 500);
                }
            }, 8000);

        }, 1500); // 1.5s simulated delay
    });
});
