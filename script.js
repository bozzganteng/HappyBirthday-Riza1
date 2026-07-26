// ===============================
// ELEMENT
// ===============================
const loginBtn = document.getElementById("loginBtn");
const passwordInput = document.getElementById("passwordInput");
const passwordScreen = document.getElementById("passwordScreen");
const errorText = document.getElementById("errorText");

const openBtn = document.getElementById("openBtn");
const nextBtn = document.getElementById("next");

const welcome = document.getElementById("welcome");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");
const page5 = document.getElementById("page5");
const page6 = document.getElementById("page6");

const galleryBtn=document.getElementById("galleryBtn");
const letterBtn = document.getElementById("letterBtn");
const endingBtn = document.getElementById("endingBtn");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeLightbox = document.getElementById("closeLightbox");

const music = document.getElementById("music");

//===========================
// PASSWORD
//===========================

loginBtn.addEventListener("click",()=>{

let pass = passwordInput.value;

const PASSWORD = "09112024";

if (pass === PASSWORD) {

passwordScreen.style.opacity="0";

setTimeout(()=>{

passwordScreen.style.display="none";

},1000);

}else{

errorText.innerHTML="❤️ Password salah ❤️";

passwordInput.value="";

}

});

// ===============================
// BUKA HADIAH
// ===============================

openBtn.addEventListener("click", () => {

    // Putar musik
    music.play();

    // Hilangkan halaman pertama
    welcome.style.opacity = "0";

    setTimeout(() => {

        welcome.style.display = "none";

        page2.style.opacity = "1";
        page2.style.pointerEvents = "auto";

    }, 1000);

});


nextBtn.addEventListener("click",()=>{

page2.style.opacity="0";

setTimeout(()=>{

page2.style.pointerEvents="none";

page3.style.opacity="1";

page3.style.pointerEvents="auto";

},800);

});

galleryBtn.addEventListener("click",()=>{

page3.style.opacity="0";

setTimeout(()=>{

page3.style.pointerEvents="none";

page4.style.opacity="1";

page4.style.pointerEvents="auto";

},800);

});

letterBtn.addEventListener("click",()=>{

page4.style.opacity="0";

setTimeout(()=>{

page4.style.pointerEvents="none";

page5.style.opacity="1";

page5.style.pointerEvents="auto";

},800);

});

endingBtn.addEventListener("click",()=>{

page5.style.opacity="0";

setTimeout(()=>{

page5.style.pointerEvents="none";

page6.style.opacity="1";

page6.style.pointerEvents="auto";

// Jalankan confetti
launchConfetti();

},800);

});

// ===============================
// HEART ANIMATION
// ===============================

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.classList.add("heart");

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize = (15 + Math.random()*30)+"px";

    heart.style.animationDuration = (5 + Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,500);

// ===============================
// GALLERY AUTO GENERATE
// ===============================

const galleryContainer = document.getElementById("galleryContainer");
const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");
const photoCounter = document.getElementById("photoCounter");

let currentPhoto = 0;
const totalPhotos = 20;

const captions = [

"Awal dari semua cerita indah kita ❤️",
"Senyummu selalu menjadi alasanku tersenyum 😊",
"Terima kasih sudah hadir di hidupku 🌸",
"Bersamamu, setiap hari terasa lebih indah 💕",
"Momen sederhana yang selalu ingin kuingat 📸",
"Kamu adalah rumah tempat hatiku pulang 🏡",
"Aku bersyukur dipertemukan denganmu 💖",
"Semoga kita selalu saling menjaga 🤍",
"Tertawa bersamamu adalah kebahagiaan sederhana 😆",
"Setiap foto ini menyimpan kenangan yang berharga ✨",
"Aku bangga memiliki seseorang sepertimu 🥰",
"Semoga langkah kita selalu searah ❤️",
"Terima kasih telah menjadi bagian hidupku 🌹",
"Semoga semua impianmu menjadi kenyataan 🌟",
"Jangan pernah lelah menjadi dirimu sendiri 🤍",
"Semoga senyummu selalu menghiasi setiap harimu 😊",
"Aku akan selalu mendukungmu dalam keadaan apa pun 💪❤️",
"Cerita kita masih panjang, dan aku ingin terus bersamamu 📖",
"Selamat ulang tahun, perempuan terbaik dalam hidupku 🎂",
"Aku mencintaimu, hari ini, esok, dan selamanya ❤️"

];

function showPhoto(index){

    currentPhoto = index;

    let nomor = (index + 1).toString().padStart(2,"0");

    lightboxImg.src = `images/${nomor}.jpg`;

    lightboxCaption.textContent = captions[index];

    photoCounter.textContent = `${index+1} / ${totalPhotos}`;

}

for(let i = 1; i <= totalPhotos; i++){

const card=document.createElement("div");

card.className="photo-card";

let nomor=i.toString().padStart(2,"0");

card.innerHTML = `

<img src="images/${nomor}.jpg" alt="${captions[i-1]}">

<p>${captions[i-1]}</p>

`;

galleryContainer.appendChild(card);

const img = card.querySelector("img");

img.addEventListener("click", () => {

    lightbox.classList.add("active");

    showPhoto(i - 1);

});

}

closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.classList.remove("active");

    }

});

nextPhoto.addEventListener("click", () => {

    currentPhoto++;

    if(currentPhoto >= totalPhotos){

        currentPhoto = 0;

    }

    showPhoto(currentPhoto);

});

prevPhoto.addEventListener("click", () => {

    currentPhoto--;

    if(currentPhoto < 0){

        currentPhoto = totalPhotos - 1;

    }

    showPhoto(currentPhoto);

});

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="ArrowRight"){

        nextPhoto.click();

    }

    if(e.key==="ArrowLeft"){

        prevPhoto.click();

    }

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

});

function launchConfetti(){

    const duration = 5000;

    const end = Date.now() + duration;

    (function frame(){

        confetti({

            particleCount:3,

            angle:60,

            spread:55,

            origin:{x:0}

        });

        confetti({

            particleCount:3,

            angle:120,

            spread:55,

            origin:{x:1}

        });

        if(Date.now() < end){

            requestAnimationFrame(frame);

        }

    })();

}