const splash = document.querySelector('#splash');
const tracker = document.querySelector('#tracker');
const video2 = document.querySelector('#myVideo2');

function goNext() {
    splash.classList.add('hidden');

    setTimeout(() => {
        splash.style.display = 'none';

        video2.classList.remove('hidden');

        tracker.style.display = 'block';
        tracker.classList.add('hidden');

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                tracker.classList.remove('hidden');
            });
        });
    }, 800);
}

document.addEventListener('click', goNext, { once: true });
document.addEventListener('keydown', goNext, { once: true });