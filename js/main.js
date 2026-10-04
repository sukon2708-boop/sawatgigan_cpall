
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-up").forEach((el,i)=>{
    el.style.animationDelay = `${Math.min(i*70,500)}ms`;
  });
});
