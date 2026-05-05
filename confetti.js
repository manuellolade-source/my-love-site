function createConfetti(count) {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#667eea', '#764ba2', '#ff1493', '#FFD700', '#FF69B4', '#00CED1', '#FF6347', '#32CD32'];
    
    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Random position
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        
        // Random color
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random size
        const size = Math.random() * 8 + 4;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        
        // Random animation duration
        const duration = Math.random() * 2 + 2.5;
        confetti.style.animationDuration = duration + 's';
        
        // Random delay
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        
        // Random horizontal movement
        const xMove = Math.random() * 200 - 100;
        confetti.style.setProperty('--x-move', xMove + 'px');
        
        confettiContainer.appendChild(confetti);
        
        // Remove after animation completes
        setTimeout(() => {
            confetti.remove();
        }, (duration + 0.5) * 1000);
    }
}
