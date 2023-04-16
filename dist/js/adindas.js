// const notif = document.getElementById('notif');
// const profile = document.getElementById('profile');
let modalBtns = document.querySelectorAll('.modal-btn');

for (let modalBtn of modalBtns) {
    modalBtn.onclick = () => {
      let targetModalId = modalBtn.dataset.target;
      let targetModal = document.getElementById(targetModalId);
      
      if (targetModal) {
        const modalBox = targetModal.querySelector('.modalBox');
        // toggle class untuk menampilkan atau menyembunyikan modal
        targetModal.classList.toggle('invisible');
        targetModal.classList.toggle('visible');
        targetModal.classList.toggle('opacity-100');
        modalBox.classList.toggle('-translate-y-28');
        
        // menambahkan event listener untuk tombol cancel
        let cancelBtn = targetModal.querySelector('.close-btn');
        if (cancelBtn) {
          cancelBtn.onclick = () => {
            targetModal.classList.toggle('invisible');
            targetModal.classList.toggle('visible');
            targetModal.classList.toggle('opacity-100');
            modalBox.classList.toggle('-translate-y-28');
          };
        }
      }
    };
}
