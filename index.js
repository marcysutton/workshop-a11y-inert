import "wicg-inert";

const mainEl = document.querySelector('main');
const modalCurtainEl = document.querySelector('.modal-curtain');

window.openModal = () => {
  modalCurtainEl.removeAttribute('hidden');
  mainEl.setAttribute('inert', '');
}
window.closeModal = () => {
    modalCurtainEl.setAttribute('hidden', '');
    mainEl.removeAttribute('inert');
}
window.buttonAction = () => {
  alert('Button clicked');
}

document.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
        window.closeModal();
    }
})