let modalBtns = document.querySelectorAll('.modal-btn');
const myText = document.querySelectorAll('.maxWord');
const maxWords = 3;
const showPass = document.getElementById('show-password');
const inputPassword = document.querySelector('input[type=password]')
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const menuOverlay = document.getElementById('menu-overlay');

window.onload = function() {
  // Mendapatkan judul halaman
  // Mendapatkan elemen title
  var title = document.getElementsByTagName("title")[0];
		
  // Mendapatkan nilai dari elemen span dengan id "title"
  var judulHalaman = document.getElementById("title").innerHTML;
  
  // Mengubah nilai dari elemen title
  title.innerHTML = "Adindas | " + judulHalaman;
  
  // Mengubah nilai dari breadcrumb
  let breadcrumb = document.getElementById("breadcrumb");
  let judulHeader = document.getElementById("judul-header");
  breadcrumb.innerHTML = judulHalaman;
  judulHeader.innerHTML = judulHalaman;
};

menuBtn.addEventListener('change', () => {
  sidebar.classList.toggle('w-0');
  sidebar.classList.toggle('w-60')
  sidebar.classList.toggle('p-0')
  sidebar.classList.toggle('p-3')
  menuOverlay.classList.toggle('invisible')
})

if(inputPassword) {
showPass.addEventListener('change', () => {
    if(showPass.checked) {
      inputPassword.type = 'text';
    } else {
      inputPassword.type = 'password';
    }
  })
}

// max character for address
for(text of myText) {
  const wordsArr = text.innerText.split(' ');
  if (wordsArr.length > maxWords) {
    text.innerText = wordsArr.slice(0, maxWords).join(' ') + '...';
  }
}

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
