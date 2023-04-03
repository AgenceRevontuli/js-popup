const selectModal = document.getElementById('modal');
const contentModal = document.querySelector('.content-modal')
const closeModalButton = document.getElementById('modal-close-button')

// Fonction qui affiche la popup 
const displayPopup = () => {
    if(!sessionStorage.getItem('popupShown')){
        selectModal.style.display = null;
        selectModal.addEventListener('click', removePopup);
        closeModalButton.addEventListener('click', removePopup)
        selectModal.setAttribute('aria-modal', 'true');
        contentModal.addEventListener('click', stopPropagation)
        sessionStorage.setItem('popupShown', true) // On stock l'information si l'utilisateur a déjà eu la popup
    }
}

const removePopup = () => {
    selectModal.style.display = 'none';
    selectModal.removeAttribute('aria-modal')
    selectModal.removeEventListener('click', removePopup);
}

const stopPropagation = (e) => {
    e.stopPropagation()
}

// Fonction qui comptabilise le temps passé sur le site 
const listenerDurationSession = () => {
    setTimeout(displayPopup, 1000); // Temps d'appartition de la popup
}

// Lancement de la fonction
listenerDurationSession()
