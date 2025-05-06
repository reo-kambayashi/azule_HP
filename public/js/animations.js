// Intersection Observerを使ってスクロール時にアニメーション
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-in-up, .fade-in-left').forEach(el => {
        observer.observe(el);
    });
});