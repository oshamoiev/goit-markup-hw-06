(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),

    openMobileMenuBtn: document.querySelector('[data-mobile-menu-open]'),
    closeMobileMenuBtn: document.querySelector('[data-mobile-menu-close]'),
    mobileMenu: document.querySelector('[data-mobile-menu]'),

  }

  // refs.openModalBtn.addEventListener('click', () => toggleModal(refs.modal))
  // refs.closeModalBtn.addEventListener('click', () => toggleModal(refs.modal))

  refs.openMobileMenuBtn.addEventListener('click', () => toggleModal(refs.mobileMenu))
  refs.closeMobileMenuBtn.addEventListener('click', () => toggleModal(refs.mobileMenu))

  function toggleModal (modal) {
    modal.classList.toggle('is-open')
  }
})()