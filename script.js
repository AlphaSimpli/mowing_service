// Initialiser EmailJS avec ta clé publique
emailjs.init("TUaXa3FeoCG93amNT");

document.addEventListener('DOMContentLoaded', function () {

    // --- GESTION DU FORMULAIRE DE CONTACT ---
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitButton = contactForm.querySelector('.submit-button');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Envoi en cours...';
            submitButton.disabled = true;

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };

            emailjs.send('service_qp2udwg', 'template_ob07e25', formData)
                .then(function () {
                    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
                    contactForm.reset();
                })
                .catch(function (error) {
                    alert('Désolé, une erreur est survenue. Veuillez réessayer plus tard.');
                    console.error('Erreur EmailJS :', error);
                })
                .finally(function () {
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                });
        });
    }

    // --- GESTION DU MENU HAMBURGER ---
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav ul.nav-links');


    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            menu.classList.toggle('active');
        menuToggle.addEventListener('touchstart', function(e) {
            e.preventDefault(); // empêche double déclenchement click+touchstart
            toggleMenu();
        });
    }
});
