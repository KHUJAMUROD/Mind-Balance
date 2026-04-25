!function(){
    var u = window.UnicornStudio;
    if (u && u.init) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", function(){
                u.init();
                document.getElementById('hero').classList.remove('hero-loading');
                removeWatermark();
            });
        } else {
            u.init();
            document.getElementById('hero').classList.remove('hero-loading');
            removeWatermark();
        }
    } else {
        window.UnicornStudio = { isInitialized: false };
        var i = document.createElement("script");
        i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.9/dist/unicornStudio.umd.js";
        i.onload = function(){
            if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", function(){
                    UnicornStudio.init();
                    document.getElementById('hero').classList.remove('hero-loading');
                    removeWatermark();
                });
            } else {
                UnicornStudio.init();
                document.getElementById('hero').classList.remove('hero-loading');
                removeWatermark();
            }
        };
        (document.head || document.body).appendChild(i);
    }
}();

function removeWatermark() {
    document.querySelectorAll('[class*="watermark"], [class*="badge"], a[href*="unicorn.studio"]').forEach(el => {
        el.style.display = 'none';
        el.remove();
    });

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) {
                    if ((node.textContent || '').includes('unicorn.studio') || 
                        (node.href || '').includes('unicorn.studio')) {
                        node.remove();
                    }
                }
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    setTimeout(() => observer.disconnect(), 5000);
}

window.addEventListener('load', () => {
    setTimeout(removeWatermark, 500);
    setTimeout(removeWatermark, 1500);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});