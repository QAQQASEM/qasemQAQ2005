document.addEventListener('DOMContentLoaded', function() {
    // تبديل القائمة على الجوال
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        // تبديل class لعرض/إخفاء القائمة
        navLinks.classList.toggle('active');
        
        // تحويل الأيقونة إلى X عند فتح القائمة
        this.classList.toggle('open');
    });

    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });
});
