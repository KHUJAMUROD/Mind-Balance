/* -----------------------------------------------------------------------------------------------------  */
// Nav Bar //

// 1. Изменение шапки при скролле
// window.addEventListener('scroll', () => {
//     const nav = document.querySelector('.navbar');
//     if (window.scrollY > 50) {
//         nav.classList.add('scrolled');
//     } else {
//         nav.classList.remove('scrolled');
//     }
// });

// 2. Мобильное меню
// const burger = document.querySelector('.burger');
// const navLinks = document.querySelector('.nav-links');

// burger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//     // Анимация бургера
//     burger.classList.toggle('toggle');
// });

// Закрытие меню при клике на ссылку
// document.querySelectorAll('.nav-links a').forEach(link => {
//     link.addEventListener('click', () => {
//         navLinks.classList.remove('active');
//     });
// });

/* -----------------------------------------------------------------------------------------------------  */
// Hero //

window.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.hero-content');
    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';
    content.style.transition = 'all 1s ease-out';

    setTimeout(() => {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 300);
});

/* -----------------------------------------------------------------------------------------------------  */
// About Section //

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('.about-content');
    aboutSection.style.opacity = '0';
    aboutSection.style.transform = 'translateY(30px)';
    aboutSection.style.transition = 'all 0.8s ease-out';

    observer.observe(aboutSection);
});

/* -----------------------------------------------------------------------------------------------------  */
// Creators Section //

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Применяем анимацию к карточкам создателей
    document.querySelectorAll('.creator-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'all 0.8s ease-out';
        observer.observe(card);
    });
});

/* -----------------------------------------------------------------------------------------------------  */
// Benefits Section //

document.addEventListener('DOMContentLoaded', () => {
    const benefitObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Добавляем небольшую задержку для каждого следующего элемента
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.benefit-item, .dress-code-box').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        benefitObserver.observe(el);
    });
});

/* -----------------------------------------------------------------------------------------------------  */
// Why Baku Section //

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.why-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
});

/* -----------------------------------------------------------------------------------------------------  */
// Philosiphty Section //

const elementsToAnimate = document.querySelectorAll(
    '.phi-circle-visual, .phi-item, .philosophy-header'
);

/* -----------------------------------------------------------------------------------------------------  */
// Target Section //

const elementsToAnimate = document.querySelectorAll(
    '.target-item, .target-title'
);

/* -----------------------------------------------------------------------------------------------------  */
// Price Section //

const elementsToAnimate = document.querySelectorAll(
    '.price-column, .pricing-divider, .format-info, .limit-box'
);

/* -----------------------------------------------------------------------------------------------------  */
// Program //

const elementsToAnimate = document.querySelectorAll(
    '.timeline-item, .program-footer, .program-title'
);

/* -----------------------------------------------------------------------------------------------------  */
// Cta-Final Footer //

const elementsToAnimate = document.querySelectorAll(
    '.cta-title, .cta-text p, .cta-question, .cta-buttons, .cta-footer-note'
);

/* -----------------------------------------------------------------------------------------------------  */
// Nav Bar Burger //

// burger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//     burger.classList.toggle('toggle'); // Эта строка анимирует полоски в крестик
// });


/* -----------------------------------------------------------------------------------------------------  */
// Scrolling //

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Отменяем мгновенный прыжок
        
        const targetId = this.getAttribute('href'); // Получаем id цели (например, #about)
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Рассчитываем позицию
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' // Тот самый плавный эффект
            });
        }
    });
});
