document.addEventListener('DOMContentLoaded', () => {
    // Share Functionality
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: 'Lumina Bio',
                        text: 'Check out Alex Rivera\'s premium link bio!',
                        url: window.location.href,
                    });
                    console.log('Successful share');
                } catch (error) {
                    console.log('Error sharing', error);
                }
            } else {
                // Fallback: Copy to clipboard
                try {
                    await navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                } catch (err) {
                    console.error('Failed to copy: ', err);
                }
            }
        });
    }

    // Newsletter Form Handling
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                // Mock success
                const button = newsletterForm.querySelector('button');
                const originalText = button.textContent;
                
                button.textContent = 'Joined! ✨';
                button.disabled = true;
                button.classList.add('bg-green-500', 'text-white');
                emailInput.value = '';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                    button.classList.remove('bg-green-500', 'text-white');
                }, 3000);
            }
        });
    }

    // Dynamic Entrance for items
    const links = document.querySelectorAll('.links-stack a');
    links.forEach((link, index) => {
        link.style.animationDelay = `${0.3 + (index * 0.1)}s`;
    });
});
