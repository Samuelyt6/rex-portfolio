// =============================== 
// HERO BUTTONS ANIMATION 
// =============================== 
const heroButtons = document.querySelectorAll(".hero-buttons .btn"); 
heroButtons.forEach(btn => { 
btn.addEventListener("mouseenter", () => { 
btn.style.transform = "scale(1.1)"; 
btn.style.transition = "transform 0.3s ease"; 
}); 
btn.addEventListener("mouseleave", () => { 
btn.style.transform = "scale(1)"; 
}); 
}); 
// =============================== 
// NAVBAR SMOOTH SCROLL 
// =============================== 
const navLinks = document.querySelectorAll(".nav-links a"); 
navLinks.forEach(link => { 
link.addEventListener("click", e => { 
// Only smooth scroll if href starts with # 
const href = link.getAttribute("href"); 
if(href.startsWith("#")) { 
e.preventDefault(); 
const target = document.querySelector(href); 
target.scrollIntoView({ behavior: "smooth" }); 
} 
}); 
}); 
// =============================== 
// SERVICE BOX HOVER EFFECT 
// =============================== 
const serviceBoxes = document.querySelectorAll(".service-box"); 
serviceBoxes.forEach(box => { 
box.addEventListener("mouseenter", () => { 
box.style.transform = "translateY(-5px)"; 
box.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)"; 
box.style.transition = "all 0.3s ease"; 
}); 
box.addEventListener("mouseleave", () => { 
box.style.transform = "translateY(0)"; 
box.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)"; 
}); 
}); 
// =============================== 
// OPTIONAL: HERO BUTTON CLICK ALERT 
// =============================== 
heroButtons.forEach(btn => { 
btn.addEventListener("click", () => { 
alert("Thanks for your interest! Contact coming soon."); 
}); 
}); 