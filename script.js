window.addEventListener('scroll', () => {
    // Get the current vertical scroll position
    const scrollValue = window.scrollY;

    // Select your elements based on your HTML classes
    const giantBgText = document.querySelector('.giant-bg-text');
    const heroText = document.querySelector('.hero-text');

    if (giantBgText && heroText) {
        // Background text moves slowly upward as you scroll
        // Preserves your CSS centering (-50%, -50%) while introducing the parallax Y offset
        const bgTranslateY = -50 + (scrollValue * 0.02);
        giantBgText.style.transform = `translate(-50%, ${bgTranslateY}%)`;

        // Foreground text moves faster or in a slightly different ratio
        // Adjust the multiplier (0.15) to make it move faster or slower
        heroText.style.transform = `translateY(${scrollValue * -0.001}px)`;
    }
});