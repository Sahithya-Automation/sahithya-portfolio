// Small interactions: smooth scroll and theme toggle
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Theme toggle (keeps dark by default)
  const toggle = document.getElementById('theme-toggle');
  toggle && toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggle.textContent = document.body.classList.contains('light-mode') ? '🌤️' : '🌙';
  });
});
