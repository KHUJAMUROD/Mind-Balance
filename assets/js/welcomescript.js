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

        // Функция удаления watermark
        function removeWatermark() {
            // Метод 1: CSS уже скрывает через селекторы
            // Метод 2: JS удаляет элементы принудительно
            const selectors = [
                '[class*="watermark"]',
                '[class*="badge"]',
                'a[href*="unicorn.studio"]',
                '.unicorn-badge',
                '.us-badge'
            ];
            
            selectors.forEach(selector => {
                document.querySelectorAll(selector).forEach(el => {
                    if (el.textContent.includes('unicorn') || el.href?.includes('unicorn')) {
                        el.style.display = 'none';
                        el.style.opacity = '0';
                        el.style.visibility = 'hidden';
                        el.remove();
                    }
                });
            });

            // Метод 3: MutationObserver для динамически добавляемых элементов
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) { // Element node
                            if (node.textContent?.includes('unicorn.studio') || 
                                node.href?.includes('unicorn.studio') ||
                                node.className?.includes('watermark')) {
                                node.style.display = 'none';
                                node.remove();
                            }
                            // Проверяем дочерние элементы
                            node.querySelectorAll?.('a, div, span').forEach(child => {
                                if (child.textContent?.includes('unicorn.studio') || 
                                    child.href?.includes('unicorn.studio')) {
                                    child.style.display = 'none';
                                    child.remove();
                                }
                            });
                        }
                    });
                });
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });

            // Остановим observer через 5 секунд после загрузки
            setTimeout(() => observer.disconnect(), 5000);
        }

        // Повторная проверка после полной загрузки
        window.addEventListener('load', () => {
            setTimeout(removeWatermark, 1000);
            setTimeout(removeWatermark, 2000);
        });

        // Плавная прокрутка для кнопок
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Параллакс-эффект при движении мыши (только на десктопе)
        if (window.matchMedia('(pointer: fine)').matches) {
            const heroContent = document.querySelector('.hero-content');
            document.addEventListener('mousemove', (e) => {
                const x = (window.innerWidth / 2 - e.pageX) / 50;
                const y = (window.innerHeight / 2 - e.pageY) / 50;
                heroContent.style.transform = `translate(${x}px, ${y}px)`;
            });
        }