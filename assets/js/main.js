// Gallery: apre il video in modal
document.addEventListener('DOMContentLoaded', ()=>{
const cards = document.querySelectorAll('.card');
const modal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const closeBtn = document.getElementById('closeModal');


cards.forEach(c=>{
c.addEventListener('click', ()=>{
const src = c.getAttribute('data-src');
if(!src) return;
modalVideo.src = src;
modal.style.display = 'flex';
modalVideo.play().catch(()=>{});
});
});


closeBtn.addEventListener('click', ()=>{
modalVideo.pause();
modalVideo.currentTime = 0;
modal.style.display = 'none';
modalVideo.src = '';
});


// Chiudi premendo ESC
document.addEventListener('keydown', (e)=>{
if(e.key==='Escape' && modal.style.display==='flex'){
closeBtn.click();
}
});
});
