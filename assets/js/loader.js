
// Simple loader — nasconde il loader quando la pagina è pronta
window.addEventListener('load', ()=>{
const loader = document.getElementById('loader');
if(!loader) return;
// piccolo ritardo per far vedere l'animazione
setTimeout(()=>{
loader.style.transition = 'opacity .6s ease';
loader.style.opacity = '0';
setTimeout(()=> loader.style.display = 'none',700);
}, 600);
});
