
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle && menuToggle.addEventListener("click", ()=>{navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex"});

const darkButtons = Array.from(document.querySelectorAll(".dark-toggle"));
const applyDark = (on)=>{
  if(on){
    document.documentElement.classList.add("dark-mode");
    document.body.classList.add("dark-mode");
    darkButtons.forEach(b=>b.textContent="☀");
    localStorage.setItem("theme","dark");
  }else{
    document.documentElement.classList.remove("dark-mode");
    document.body.classList.remove("dark-mode");
    darkButtons.forEach(b=>b.textContent="🌙");
    localStorage.setItem("theme","light");
  }
};
darkButtons.forEach(btn=>btn.addEventListener("click", ()=>{applyDark(!document.body.classList.contains("dark-mode"))}));
if(localStorage.getItem("theme")==="dark"){applyDark(true)}

const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const modalClose = document.getElementById("modalClose");
galleryItems.forEach(img=>{
  img.addEventListener("click", ()=>{
    modalImage.src = img.src;
    modalCaption.textContent = img.alt || "";
    modal.style.display = "flex";
    setTimeout(()=>modal.classList.add("visible"),50);
  });
});
modalClose && modalClose.addEventListener("click", ()=>{modal.classList.remove("visible");setTimeout(()=>modal.style.display="none",220)});
modal && modal.addEventListener("click", (e)=>{if(e.target===modal){modal.classList.remove("visible");setTimeout(()=>modal.style.display="none",220)}});
document.addEventListener("keydown",(e)=>{if(e.key==="Escape"){if(modal && modal.style.display==="flex"){modal.classList.remove("visible");setTimeout(()=>modal.style.display="none",220)}}});

const backBtns = Array.from(document.querySelectorAll(".back-btn"));
backBtns.forEach(b=>b.addEventListener("click", ()=>{
  if(window.history.length>1){window.history.back()}else{window.location.href="index.html"}
}));

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}
  });
},{threshold:0.12});
Array.from(document.querySelectorAll(".fade-in")).forEach(el=>observer.observe(el));




