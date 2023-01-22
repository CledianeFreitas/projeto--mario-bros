/*  
OBJETIVO 1 - quando o usuario clicar no botão de veja o trailer,devemos abrir a modal com o videodo trailer.

OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal
*/


const botãoTraile = document.querySelector('.botao-trailer');
const video = document.getElementById('video')
const modal = document.querySelector('.modal');
const linkDoVideo = video.src;

function alternarModal() {
  modal.classList.toggle('aberto');
}
botãoTraile.addEventListener('click', () => {
  alternarModal();
video.setAttribute('src', linkDoVideo);
});

const botaoFecharModal = document.querySelector('.fechar-modal');
botaoFecharModal.addEventListener('click', () => {
  alternarModal();
  video.setAttribute('src', '');
})


