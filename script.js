// Animation au scroll
const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:0.2});

document.querySelectorAll(".fade-up, .fade-left").forEach(el=>{
observer.observe(el);
});

// EMAILJS
(function(){
emailjs.init("TON_PUBLIC_KEY"); // 🔥 remplacer
})();

document.getElementById("contact-form")
.addEventListener("submit",function(e){
e.preventDefault();

emailjs.sendForm("TON_SERVICE_ID","TON_TEMPLATE_ID",this)
.then(()=>{
alert("Message envoyé avec succès !");
})
.catch(()=>{
alert("Erreur d'envoi.");
});
});
