// Interações do menu. Edite apenas se quiser alterar o comportamento.
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.navlinks').classList.remove('open')));
