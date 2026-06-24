const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
const particleCount = 60;
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.alpha = Math.random() * 0.5 + 0.2;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
        ctx.fillStyle = `rgba(56, 189, 248, ${this.alpha})`; 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}
function initParticles() {
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}
const words = ["Flutter Developer."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const target = document.getElementById("typing-text");
    if(!target) return;

    let current = words[wordIndex];
    
    if (isDeleting) {
        target.innerHTML = `I'm a <span style="color: #38bdf8; font-weight: 600;">${current.substring(0, charIndex - 1)}</span>|`;
        charIndex--;
    } else {
        target.innerHTML = `I'm a <span style="color: #38bdf8; font-weight: 600;">${current.substring(0, charIndex + 1)}</span>|`;
        charIndex++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(type, speed);
}
document.addEventListener("DOMContentLoaded", () => {
    initParticles();
    animateParticles();
    type();
});const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
const particleCount = 60;
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.alpha = Math.random() * 0.5 + 0.2;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
        ctx.fillStyle = `rgba(56, 189, 248, ${this.alpha})`; 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}
function initParticles() {
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}
const words = ["Flutter Developer."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const target = document.getElementById("typing-text");
    if(!target) return;

    let current = words[wordIndex];
    
    if (isDeleting) {
        target.innerHTML = `I'm a <span style="color: #38bdf8; font-weight: 600;">${current.substring(0, charIndex - 1)}</span>|`;
        charIndex--;
    } else {
        target.innerHTML = `I'm a <span style="color: #38bdf8; font-weight: 600;">${current.substring(0, charIndex + 1)}</span>|`;
        charIndex++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(type, speed);
}
document.addEventListener("DOMContentLoaded", () => {
    initParticles();
    animateParticles();
    type();
});
