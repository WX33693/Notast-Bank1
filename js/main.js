// التأكد من تحميل المستند بالكامل
document.addEventListener('DOMContentLoaded', function() {
    // تفعيل التأثيرات عند التمرير
    initScrollEffects();
    
    // تفعيل القائمة المتنقلة
    initMobileMenu();
});

// تأثيرات التمرير
function initScrollEffects() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// تفعيل القائمة المتنقلة
function initMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });

        // إغلاق القائمة عند النقر على أي رابط
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbarCollapse.classList.remove('show');
            });
        });
    }
}

// تأثيرات التحويم على العناصر
document.querySelectorAll('.hover-effect').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    element.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}); 