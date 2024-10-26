

//carousel (page d'accueil)
document.addEventListener('DOMContentLoaded', function() {
  var myCarousel = document.querySelector('#carouselExampleCaptions');
  var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2000, // Durée entre les transitions en millisecondes
      wrap: true,     // Boucler le carrousel
      pause: 'hover'  // Pause au survol
  });

  // Événement lorsque le carrousel change de diapositive
  myCarousel.addEventListener('slid.bs.carousel', function () {
      console.log('Le carrousel a changé de diapositive');
  });
});


//newletter (page d'acueil)
document.addEventListener('DOMContentLoaded', function() {
  function showConfirmationMessage() {
      const emailInput = document.getElementById('email');
      const emailValue = emailInput.value; 

      if (emailValue.includes('@') && emailValue.includes('.')) {
          alert('Merci pour votre inscription !');
          emailInput.value = '';  // Effacer le champ après l'envoi
      } else {
          alert('Veuillez entrer une adresse email valide.');
      }
  }
  // Ajoute un écouteur d'événement sur le bouton
  const button = document.getElementById('submit-button');
  button.addEventListener('click', function() {
      showConfirmationMessage();
  });
});


// Connexion (page)
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('connexionForm');
  const googleBtn = document.getElementById('googleBtn');

  // Fonction de validation du mot de passe
  function validatePassword(password) {
      // Validadtion du mot de passe avec au moins 10 caractères, une majuscule et un chiffre
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{10,}$/;
      return passwordRegex.test(password);
  }

  // Gestion de la soumission du formulaire
  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Empêche la soumission réelle du formulaire 

      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
      const emailValue = emailInput.value;
      const passwordValue = passwordInput.value;

      // Validation de l'email
      if (!emailValue || !passwordValue) {
          alert('Veuillez remplir tous les champs.');
          return;
      }

      if (emailValue.includes('@') && emailValue.includes('.')) {
          // Validation du mot de passe
          if (!validatePassword(passwordValue)) {
              alert('Le mot de passe doit contenir au moins 10 caractères, une majuscule et un chiffre.');
              return;
          }

          // Si toutes les validations sont réussies
          alert('Merci pour votre inscription !');
          // Réinitialiser les champs après une inscription réussie 
          emailInput.value = '';
          passwordInput.value = '';
      } else {
          alert('Veuillez entrer une adresse email valide.');
      }
  });
  // Gestion du bouton Google
  googleBtn.addEventListener('click', function () {
      window.location.href = 'https://myaccount.google.com'; 
  });
});


//Réinitialiser mot de passe
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('passwordResetForm');

  // Fonction de validation de l'email
  function validateEmail(email) {
      // Vérification du format de l'émail
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  // Gestion de la soumission du formulaire
  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Empêche la soumission réelle du formulaire 

      const pseudoInput = document.getElementById('pseudo');
      const emailInput = document.getElementById('email');
      const pseudoValue = pseudoInput.value; 
      const emailValue = emailInput.value; 

      // Validation du pseudo
      if (!pseudoValue) {
          alert('Veuillez entrer votre pseudo.');
          return;
      }

      // Validation de l'email
      if (!validateEmail(emailValue)) {
          alert('Veuillez entrer une adresse email valide.');
          return;
      }

      // Si toutes les validations sont réussies
      alert('Votre demande de réinitialisation du mot de passe a été envoyée.');

      // Réinitialiser les champs après l'envoi 
      pseudoInput.value = '';
      emailInput.value = '';
  });
});


// Inscription (page)
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('inscriptionForm');
  const googleBtn = document.getElementById('googleBtn');

  // Fonction de validation de l'email
  function validateEmail(email) {
      // Regex simple pour vérifier le format de l'adresse email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  // Fonction de validation du mot de passe
  function validatePassword(password) {
      // Validation du mot de passe avec au moins 10 caractères, une majuscule et un chiffre
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{10,}$/;
      return passwordRegex.test(password);
  }

  // Gestion de la soumission du formulaire
  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Empêche la soumission réelle du formulaire

      const usernameInput = document.getElementById('username');
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
      const confirmPasswordInput = document.getElementById('confirm-password');
      const newsletterInput = document.getElementById('newsletter');
      const termsInput = document.getElementById('terms');
      
      const usernameValue = usernameInput.value; 
      const emailValue = emailInput.value; 
      const passwordValue = passwordInput.value; 
      const confirmPasswordValue = confirmPasswordInput.value; 

      // Validation du nom d'utilisateur
      if (!usernameValue) {
          alert('Veuillez entrer votre nom d\'utilisateur.');
          return;
      }

      // Validation de l'email
      if (!validateEmail(emailValue)) {
          alert('Veuillez entrer une adresse email valide.');
          return;
      }

      // Validation du mot de passe
      if (!validatePassword(passwordValue)) {
          alert('Le mot de passe doit contenir au moins 10 caractères, une majuscule et un chiffre.');
          return;
      }

      // Validation de la confirmation du mot de passe
      if (passwordValue !== confirmPasswordValue) {
          alert('Les mots de passe ne correspondent pas.');
          return;
      }

      // Validation de l'acceptation des conditions d'utilisation
      if (!termsInput.checked) {
          alert('Vous devez accepter les conditions d\'utilisation et la politique de confidentialité.');
          return;
      }

      // Si toutes les validations sont réussies
      alert('Inscription réussie !');

      // Réinitialiser les champs après l'envoi 
      usernameInput.value = '';
      emailInput.value = '';
      passwordInput.value = '';
      confirmPasswordInput.value = '';
      newsletterInput.checked = false;
      termsInput.checked = false;
  });

  // Gestion du bouton Google
  googleBtn.addEventListener('click', function () {
      // Remplacez par l'URL de connexion Google de votre choix
      window.location.href = 'https://myaccount.google.com'; 
  });
});


// Contact (page)
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm'); 
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const errorMessagesDiv = document.getElementById('errorMessages');

  // Fonction de validation de l'email
  function validateEmail(email) {
      // Regex pour vérif email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  // Fonction de validation du formulaire
  function validateForm() {
      const nameValue = nameInput.value; 
      const emailValue = emailInput.value; 
      const subjectValue = subjectInput.value; 
      const messageValue = messageInput.value; 

      let errorMessage = '';

      // Validation du nom
      if (!nameValue) {
          errorMessage += 'Veuillez entrer votre nom.<br>';
      }

      // Validation de l'email
      if (!validateEmail(emailValue)) {
          errorMessage += 'Veuillez entrer une adresse email valide.<br>';
      }

      // Validation du sujet
      if (!subjectValue) {
          errorMessage += 'Veuillez entrer un sujet.<br>';
      }

      // Validation du message
      if (!messageValue) {
          errorMessage += 'Veuillez entrer un message.<br>';
      }

      if (errorMessage) {
          errorMessagesDiv.innerHTML = errorMessage; // Affiche les erreurs dans la div
          return false;
      }

      return true;
  }

  // Gestion de la soumission du formulaire
  form.addEventListener('submit', function (event) {
      if (!validateForm()) {
          event.preventDefault(); // Empêche la soumission du formulaire en cas de validation échouée
      } else {
          // Afficher un message de succès dans la console 
          console.log('Votre message a été envoyé avec succès.');
          // Réinitialiser les champs après l'envoi 
          nameInput.value = '';
          emailInput.value = '';
          subjectInput.value = '';
          messageInput.value = '';
          errorMessagesDiv.innerHTML = ''; // Efface les messages d'erreur
      }
  });
});

//page de soumission d'événement
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('eventSubmissionForm');
  const eventNameInput = document.getElementById('eventName');
  const eventTypeInput = document.getElementById('eventType');
  const startEventDateInput = document.getElementById('startEventDate');
  const endEventDateInput = document.getElementById('endEventDate');
  const startTimeInput = document.getElementById('startTime');
  const endTimeInput = document.getElementById('endTime');
  const eventLocationInput = document.getElementById('eventLocation');
  const eventDescriptionInput = document.getElementById('eventDescription');
  const eventCapacityInput = document.getElementById('eventCapacity');
  const eventPriceInput = document.getElementById('eventPrice');
  const eventImageInput = document.getElementById('eventImage');
  const organizerNameInput = document.getElementById('organizerName');
  const organizerEmailInput = document.getElementById('organizerEmail');
  const organizerPhoneInput = document.getElementById('organizerPhone');
  const termsCheckInput = document.getElementById('termsCheck');
  const errorMessagesDiv = document.getElementById('errorMessages');

  // Fonction de validation de l'email
  function validateEmail(email) {
      // Regex pour vérif email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  // Fonction de validation du formulaire
  function validateForm() {
      const eventNameValue = eventNameInput.value;
      const eventTypeValue = eventTypeInput.value;
      const startEventDateValue = startEventDateInput.value;
      const endEventDateValue = endEventDateInput.value;
      const startTimeValue = startTimeInput.value;
      const endTimeValue = endTimeInput.value;
      const eventLocationValue = eventLocationInput.value;
      const eventDescriptionValue = eventDescriptionInput.value;
      const eventCapacityValue = eventCapacityInput.value;
      const eventPriceValue = eventPriceInput.value;
      const organizerNameValue = organizerNameInput.value;
      const organizerEmailValue = organizerEmailInput.value;
      const organizerPhoneValue = organizerPhoneInput.value;
      const termsCheckValue = termsCheckInput.checked;

      let errorMessage = '';

      // Validation du nom de l'événement
      if (!eventNameValue) {
          errorMessage += 'Veuillez entrer le nom de l\'événement.<br>';
      }

      // Validation du type d'événement
      if (!eventTypeValue) {
          errorMessage += 'Veuillez choisir un type d\'événement.<br>';
      }

      // Validation des dates
      if (!startEventDateValue) {
          errorMessage += 'Veuillez entrer la date de début de l\'événement.<br>';
      }
      if (!endEventDateValue) {
          errorMessage += 'Veuillez entrer la date de fin de l\'événement.<br>';
      }

      // Validation des heures
      if (!startTimeValue) {
          errorMessage += 'Veuillez entrer l\'heure de début.<br>';
      }
      if (!endTimeValue) {
          errorMessage += 'Veuillez entrer l\'heure de fin.<br>';
      }

      // Validation du lieu
      if (!eventLocationValue) {
          errorMessage += 'Veuillez entrer le lieu de l\'événement.<br>';
      }

      // Validation de la description
      if (!eventDescriptionValue) {
          errorMessage += 'Veuillez entrer une description de l\'événement.<br>';
      }

      // Validation de l'organisateur
      if (!organizerNameValue) {
          errorMessage += 'Veuillez entrer le nom de l\'organisateur.<br>';
      }
      if (!validateEmail(organizerEmailValue)) {
          errorMessage += 'Veuillez entrer une adresse email valide pour l\'organisateur.<br>';
      }

      // Validation des conditions
      if (!termsCheckValue) {
          errorMessage += 'Vous devez accepter les conditions d\'utilisation et la politique de confidentialité.<br>';
      }

      if (errorMessage) {
          errorMessagesDiv.innerHTML = errorMessage; // Affiche les erreurs dans la div
          return false;
      }

      return true;
  }

  // Gestion de la soumission du formulaire
  form.addEventListener('submit', function (event) {
      if (!validateForm()) {
          event.preventDefault(); // Empêche la soumission du formulaire en cas de validation échouée
      } else {
          // Afficher un message de succès dans la console 
          console.log('L\'événement a été soumis avec succès.');
          // Réinitialiser les champs après l'envoi 
          form.reset(); // Réinitialise le formulaire
          errorMessagesDiv.innerHTML = ''; // Efface les messages d'erreur
      }
  });
});


// Formulaire d'ajout de commentaire
document.addEventListener("DOMContentLoaded", function() {
  // Sélectionner le formulaire par son ID
  var formulaireCommentaire = document.getElementById('formulaireCommentaire');
  
  // Ajouter un écouteur d'événements pour la soumission du formulaire
  formulaireCommentaire.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Récupérer les valeurs des champs du formulaire
      var nomUtilisateur = document.getElementById('username').value;
      var email = document.getElementById('email').value;
      var motDePasse = document.getElementById('password').value;
      var note = document.getElementById('rating').value;
      var commentaire = document.getElementById('comment').value;
      
      // Vérifier si tous les champs sont remplis
      if (nomUtilisateur === '' || email === '' || motDePasse === '' || note === '' || commentaire === '') {
          alert('Veuillez remplir tous les champs.');
          return;
      }
      
      // Vérification de la longueur minimale du mot de passe
      if (motDePasse.length < 10) {
          alert('Le mot de passe doit contenir au moins 10 caractères.');
          return;
      }
      
      // Vérification de l'email
      var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regexEmail.test(email)) {
          alert('Veuillez entrer une adresse e-mail valide.');
          return;
      }
      
      // Afficher une alerte pour indiquer que le commentaire a été soumis
      alert('Commentaire soumis avec succès !');
      
      // Vous pouvez envoyer les données au serveur ici avec fetch ou XMLHttpRequest
      
      // Réinitialiser le formulaire après la soumission
      formulaireCommentaire.reset();
  });
});



// Formulaire d'inscription à un événement
document.addEventListener("DOMContentLoaded", function() {
  function validerFormulaire(formId, nameId, usernameId, emailId, phoneId, experienceId, dietaryId, expectationsId) {
    var formulaire = document.getElementById(formId);
    
    if (!formulaire) {
      console.log(`Formulaire avec l'ID ${formId} non trouvé.`);
      return;
    }

    console.log(`Formulaire avec l'ID ${formId} trouvé.`);

    formulaire.addEventListener('submit', function(e) {
      e.preventDefault();

      // Récupérer les valeurs des champs du formulaire
      var nomComplet = document.getElementById(nameId).value;
      var email = document.getElementById(emailId).value;
      var telephone = document.getElementById(phoneId).value;
      var experience = document.getElementById(experienceId).value;

      console.log(`Nom complet: ${nomComplet}`);
      console.log(`Email: ${email}`);
      console.log(`Téléphone: ${telephone}`);
      console.log(`Expérience: ${experience}`);

      // Vérifier si tous les champs requis sont remplis
      if (nomComplet === '' || email === '' || telephone === '' || experience === '') {
        alert('Veuillez remplir tous les champs requis.');
        return;
      }

      // Vérification de l'email
      var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regexEmail.test(email)) {
        alert('Veuillez entrer une adresse e-mail valide.');
        return;
      }

      // Vérification du téléphone
      var regexPhone;
      if (formId === 'registrationForm') {
        regexPhone = /^0\d{9}$/;
      } else {
        regexPhone = /^\d{10}$/;
      }
      if (!regexPhone.test(telephone)) {
        alert('Veuillez entrer un numéro de téléphone valide.');
        return;
      }

      // Afficher une alerte pour indiquer que le formulaire a été soumis avec succès
      alert('Formulaire soumis avec succès !');

      // Réinitialiser le formulaire après la soumission
      formulaire.reset();
    });
  }

  // Appliquer la validation à chaque formulaire avec les identifiants uniques
  validerFormulaire('registrationForm', 'name1', 'username1', 'email1', 'phone1', 'experience1', 'dietary1', 'expectations1');
  validerFormulaire('registrationForm2', 'name2', 'username2', 'email2', 'phone2', 'experience2', 'dietary2', 'expectations2');
  validerFormulaire('registrationForm3', 'name3', 'username3', 'email3', 'phone3', 'experience3', 'dietary3', 'expectations3');
});


///     CONTENENU DANS FORMULAIRE DE PAGE FAVORI 
document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci pour votre commentaire ! Il sera publié après modération.');
    this.reset();
});

