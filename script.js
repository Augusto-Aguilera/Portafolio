// 1. Menú Móvil
const toggle = document.getElementById("mobile-toggle");
const nav = document.getElementById("nav-list");

toggle.onclick = () => {
    nav.classList.toggle("active");
};

// 2. Animación Reveal (Aparecer al bajar)
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.onscroll = reveal;
reveal(); // Ejecución inicial

// 3. Formulario a WhatsApp
document.getElementById('contact-form').onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const msg = document.getElementById('message').value;
    const phone = "542657521775";
    const text = encodeURIComponent(`Hola Patrick, soy ${name}. Mi consulta es: ${msg}`);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
};

// 4. Cerrar menú al elegir sección
document.querySelectorAll('.nav-links a').forEach(link => {
    link.onclick = () => nav.classList.remove('active');
});