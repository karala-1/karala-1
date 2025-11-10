// Scroll suave adicional (opcional, algunos navegadores ya soportan scroll-behavior en CSS)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".bar").forEach(bar => {
        const value = bar.getAttribute("data-value");
        bar.style.width = value + "%";
    });
});



         // Animación para los elementos de la línea de tiempo
        document.addEventListener('DOMContentLoaded', function() {
            const timelineItems = document.querySelectorAll('.timeline-item');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.3 });
            
            timelineItems.forEach(item => {
                observer.observe(item);
            });
        });