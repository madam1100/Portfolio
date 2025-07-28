const lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
};

requestAnimationFrame(raf); 

const element = document.getElementById('.inspiring1');

const observer = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
} , {threshold: 0.1});

observer.observe(element);

const navP1 = document.getElementById('navP1');

navP1.addEventListener('click', function() {
    document.getElementById('proffDesc').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

window.addEventListener('wheel', (e) => {
    e.preventDefault()
    window.scrollBy({
        top: e.deltaY > 0 ? 50 : -50,
        behavior: smooth
    })
}, {passive: false})