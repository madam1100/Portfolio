import TypeIt from "typeit";

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