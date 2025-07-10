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