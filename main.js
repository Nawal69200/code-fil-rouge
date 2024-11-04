// Attendez que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function () {

// Carrousel (page d'accueil)
const myCarousel = document.getElementById('carouselExampleCaptions');
if (myCarousel) {
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000,
        wrap: true,
        pause: 'hover'
    });
    myCarousel.addEventListener('slid.bs.carousel', function () {
        console.log('Le carrousel a changé de diapositive');
    });
} else {
    console.error('L\'élément avec l\'ID "carouselExampleCaptions" n\'a pas été trouvé.');
}



// Formulaire de la page d'accueil, la newsletter
document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById('email');
    const submitButton = document.getElementById('submit-button');
    if (submitButton && emailInput) {
        submitButton.addEventListener('click', function (event) {
            const emailValue = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailRegex.test(emailValue)) {
                alert('Merci pour votre inscription !');
                emailInput.value = '';
            } else {
                alert('Veuillez entrer une adresse email valide.');
            }
            
            event.preventDefault();
        });
    } else {
        console.error("L'élément 'email' ou 'submit-button' n'a pas été trouvé.");
    }
});


// Formulaire de connexion
const connexionForm = document.getElementById('connexionForm');
const connexionEmail = document.getElementById('email');
const connexionPassword = document.getElementById('password');
if (connexionForm && connexionEmail && connexionPassword) {
    connexionForm.addEventListener('submit', function (e) {
        const errors = [];
        if (!validateEmail(connexionEmail.value)) {
            errors.push("Veuillez entrer une adresse e-mail valide.");
        }
        if (!validatePassword(connexionPassword.value)) {
            errors.push("Le mot de passe doit contenir au moins 10 caractères, une majuscule et un chiffre.");
        }
        if (errors.length > 0) {
            e.preventDefault();
            alert(errors.join('\n'));
        }
    });
}


// Formulaire d'inscription
const inscriptionForm = document.getElementById('inscriptionForm');
const usernameInput = document.getElementById('username');
const confirmPasswordInput = document.getElementById('confirm-password');
const termsCheckbox = document.getElementById('terms');
if (inscriptionForm && usernameInput && emailInput && passwordInput && confirmPasswordInput && termsCheckbox) {
    inscriptionForm.addEventListener('submit', function (e) {
        const errors = [];
        if (usernameInput.value.trim() === '') errors.push("Le nom d'utilisateur est requis.");
        if (!validateEmail(emailInput.value)) errors.push("Veuillez entrer une adresse e-mail valide.");
        if (!validatePassword(passwordInput.value)) errors.push("Le mot de passe doit contenir au moins 10 caractères, une majuscule et un chiffre.");
        if (passwordInput.value !== confirmPasswordInput.value) errors.push("Les mots de passe ne correspondent pas.");
        if (!termsCheckbox.checked) errors.push("Vous devez accepter les conditions d'utilisation.");
        if (errors.length > 0) {
            e.preventDefault();
            alert(errors.join('\n'));
        }
    });
}

// Formulaire d'événements
const eventForm = document.getElementById('eventSubmissionForm');
if (eventForm) {
    eventForm.addEventListener('submit', function (e) {
        const errors = [];
        const eventNameInput = document.getElementById('eventName');
        const eventTypeSelect = document.getElementById('eventType');
        const startEventDateInput = document.getElementById('startEventDate');
        const endEventDateInput = document.getElementById('endEventDate');
        const startTimeInput = document.getElementById('startTime');
        const endTimeInput = document.getElementById('endTime');
        const eventLocationInput = document.getElementById('eventLocation');
        const eventDescriptionInput = document.getElementById('eventDescription');
        const organizerNameInput = document.getElementById('organizerName');
        const organizerEmailInput = document.getElementById('organizerEmail');
        const termsCheck = document.getElementById('termsCheck');
        if (eventNameInput && eventTypeSelect && startEventDateInput && endEventDateInput && startTimeInput && endTimeInput && eventLocationInput && eventDescriptionInput && organizerNameInput && organizerEmailInput && termsCheck) {
            if (eventNameInput.value.trim() === '') errors.push("Le nom de l'événement est requis.");
            if (eventTypeSelect.value === '') errors.push("Veuillez sélectionner un type d'événement.");
            if (!validateEmail(organizerEmailInput.value)) errors.push("Veuillez entrer un email valide pour l'organisateur.");
            if (!termsCheck.checked) errors.push("Vous devez accepter les conditions d'utilisation et la politique de confidentialité.");
            if (errors.length > 0) {
                e.preventDefault();
                alert(errors.join('\n'));
            }
        }
    });
}

// Formulaire de contact
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = contactForm.querySelector('#name').value;
        const email = contactForm.querySelector('#email').value;
        const subject = contactForm.querySelector('#subject').value;
        const message = contactForm.querySelector('#message').value;
        if (name === '' || email === '' || subject === '' || message === '') {
            alert('Veuillez remplir tous les champs requis.');
        } else {
            console.log('Nom:', name, 'Email:', email, 'Sujet:', subject, 'Message:', message);
            contactForm.reset();
        }
    });
}

// Fonction de validation de l'email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fonction de validation du mot de passe
function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{10,}$/;
    return passwordRegex.test(password);
}

});

// Formulaires contenu dans evenements culinaires
// Fonction de validation générale
function validateForm(formId, nameId, usernameId, emailId, phoneId, experienceId, dietaryId, expectationsId) {
    const form = document.getElementById(formId);
    const emailInput = document.getElementById(emailId);
    const phoneInput = document.getElementById(phoneId);

    if (form && emailInput && phoneInput) {
        form.addEventListener('submit', function (event) {
            let isValid = true;
            const emailValue = emailInput.value.trim();
            const phoneValue = phoneInput.value.trim();
            
            // Validation de l'email avec regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailValue)) {
                alert('Veuillez entrer une adresse e-mail valide.');
                isValid = false;
            }

            // Validation du numéro de téléphone pour 10 chiffres commençant par 0
            const phoneRegex = /^0\d{9}$/;
            if (!phoneRegex.test(phoneValue)) {
                alert('Veuillez entrer un numéro de téléphone valide de 10 chiffres commençant par 0.');
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault(); // Empêche l'envoi si non valide
            }
        });
    } else {
        console.error(`Le formulaire ou les champs avec les ID ${formId}, ${emailId}, ou ${phoneId} n'ont pas été trouvés.`);
    }
}

// Application de la validation pour chaque formulaire
validateForm('registrationForm', 'name1', 'username1', 'email1', 'phone1', 'experience1', 'dietary1', 'expectations1');
validateForm('registrationForm2', 'name2', 'username2', 'email2', 'phone2', 'experience2', 'dietary2', 'expectations2');
validateForm('registrationForm3', 'name3', 'username3', 'email3', 'phone3', 'experience3', 'dietary3', 'expectations3');


//Formulaire pour ajout de commentaire
// Attendre que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner le formulaire par son ID
    const form = document.getElementById('formulaireCommentaire');

    // Gérer l'événement de soumission du formulaire
    form.addEventListener('submit', function (event) {
        // Empêcher l'envoi du formulaire pour traitement
        event.preventDefault();

        // Récupérer les valeurs des champs du formulaire
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rating = document.getElementById('rating').value;
        const comment = document.getElementById('comment').value;

        // Afficher les valeurs dans la console (ou traiter les données)
        console.log('Nom d\'utilisateur:', username);
        console.log('Adresse e-mail:', email);
        console.log('Mot de passe:', password);
        console.log('Note:', rating);
        console.log('Commentaire:', comment);

        // Construction de l'URL de redirection avec les paramètres
        const params = new URLSearchParams({
            username,
            email,
            password,
            rating,
            comment
        }).toString();

        // Rediriger vers une nouvelle page avec les paramètres GET
        window.location.href = `votre-page-de-destination.html?${params}`;

        // Réinitialiser le formulaire après soumission 
        form.reset();
    });
});

