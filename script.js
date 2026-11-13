// Interações do menu. Mantém o comportamento original.
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.navlinks').classList.remove('open')));
