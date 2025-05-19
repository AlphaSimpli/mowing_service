// Initialisation de EmailJS avec la clé publique
emailjs.init("TUaXa3FeoCG93amNT"); // Remplace par ta propre clé publique EmailJS

// Attente du chargement complet du DOM
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.textContent;

        // Mise à jour de l'état du bouton
        submitButton.textContent = 'Envoi en cours...';
        submitButton.disabled = true;

        // Récupération des données du formulaire
        const formData = {
            name: document.getElementById('name')?.value || '',
            email: document.getElementById('email')?.value || '',
            phone: document.getElementById('phone')?.value || '',
            message: document.getElementById('message')?.value || ''
        };

        // Envoi du formulaire via EmailJS
        emailjs.send('service_qp2udwg', 'template_ob07e25', formData)
            .then(() => {
                alert('Merci pour votre message ! Nous vous contacterons bientôt.');
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Erreur EmailJS:', error);
                alert('Désolé, une erreur est survenue. Veuillez réessayer plus tard.');
            })
            .finally(() => {
                // Réinitialisation du bouton
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
    });
});
