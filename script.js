let audioUnlocked = false;

function unlockAudio() {
  music.play().then(() => {
    music.pause(); // Unlock audio silently
    audioUnlocked = true;
    document.getElementById("unlockBtn").style.display = "none";
  }).catch((e) => {
    console.log("Unlock failed:", e);
  });
}

const loveNotes = [
    "You're my favorite notification 💬",
    "Cuddling with you >>> everything else 💕",
    "I'd pick you in every lifetime 💖",
    "You make my heart do a lil dance 🕺",
    "You're the magic in my chaos ✨",
    "You're my comfort zone 🏡",
    "Your smile = my serotonin boost 😍",
    "You're the reason behind all my smiles 💌",
    "Your eyes, they're the prettiest 👀✨",
    "Ur mausi smile is the cutest smile 😊💖",
    "Praying with you is the best 🙏❤️",
    "Ur so caring that you pray for me and us 🌙🫶",
    "I love the way you flirt 😏💕",
    "You are so beautiful like I can’t even— 😩💘",
    "U are a good pet :)) 🐶😄",
    "I love your hugs and I miss them 🤗💞",
    "Ur kisses. It's so gentle 😚💋",
    "Ur touch. I miss your hand 🤲💫",
    "U being clingy, lols it's funny, I love it 🧸😆",
    "I love ur warmth :) 💗",
    "Uhm :) it's crazy w you and the best ;)💓",
    "I love reading the Bible w you 📖🤍",
    "I love us talking abt God and our experiences ✝️🕊️",
    "I love it that u take time out for me to watch Barça w me, even though uh 0 idea what’s hppng ⚽😂",
    "I love u in sareee. Oh god it's too hot. 🥵💃",
    "U in cropped fits. Too good 😮‍💨🔥",
    "U wearing yellow, ur my tiny minion only 💛🫶",
    "I love u being clumsy 🤭🍯",
    "I love you being so cute w me 🥺🎀",
    "U being so vulnerable and open w me :) 🌸🫂",
    "You don’t judge me 🤍",
    "You still deal w my lame jokes.",
    "ur cute, uh good cheeks",
    "i love ur lips, they are too kissable",
    "i love how u always tell me everything",
    "i love how aesthetic ur notes are...the way u wrote ur headings",
    "u teaching me what u learnt is very cute :)",
    "u coming back aft 6 months was the best :) dont go again ;/",
    "i loved lending u my earphones in the bus so u could listen",
    "i loved how we planned the day before stayback what to do",
    "i love how u risked everything to be w me and ttm",
    "our first ever call was best ",
    "I love ur nails, they’re pretty 🌸",
  "I love how u try to involve me in everything :) 🤝💖",
  "I love it when ur in the mood :)",
  "When u open up to me and let me understand u 🧠💗",
  "I love how u’d have cute babies w me :) 👶💞",
  "I love how u don’t give up even thru the uncertainties 🌧️💪",
  "its so sweet when u cry to me :)",
  "When u get mad at me.. it’s very cute :) 😤👉🥺",
  "When ur nose is blocked.. u sound so cute n funny :) 🤧🎙️",
  "I love how tiny u r :) 🐣💗",
  "I love the way u consider me ur home :) 🏡💞",
  "I love how u call my parents as if they’re ur own :).. it’s really sweet 🫶👨‍👩‍👦",
  "i love how we have so many family-related similarities",
  "i love everything that has hppnd w you :)",
  "u being my cutie baby is the bestest :))",
  "I don’t wanna just hold you tonight... I wanna feel your heartbeat sync with mine ;))",
  "I don’t need a bed... just you, a wall, and five minutes 😮‍💨🧱",
  "I could write poetry on your skin with my mouth all night 🖋️🫦",
  "You're my favorite obsession — the kind I’d ruin sleep for 🥵🛌",
  "I don’t just want your love... I wanna make you scream it",
  "You got me thinking things I can’t say in public... but I’d show you in private 😏🚪",
  "You make my heart smile even on its quietest days 🫶🌷",
  "If hugs could speak, mine would whisper 'I love you' every time 🤗💗",
  "Every moment with you is my new favorite memory 📸💘",
  "You're the sweetest part of my day... and every reason I smile 🍭😊",
  "Time moves too fast when I’m with you… but even forever wouldn’t feel like enough 🕰️💞",
  "i love tickling and piching u also hehe..im not ticklish btw."
  ];
  
let remainingNotes = loveNotes.length;
let timeoutId;

function updateCounter() {
  const counter = document.getElementById("counter");
  if (remainingNotes > 0) {
    counter.innerText = `${remainingNotes} love notes left 💝`;
  } else {
    counter.innerText = "All your love notes are done :( but there's so much more I love about you.";
  }
}

function showNote() {
  if (remainingNotes === 0) return;

  const jar = document.querySelector(".jar");
  const note = document.getElementById("note");

  if (timeoutId) clearTimeout(timeoutId);

  jar.classList.add("shake");
  setTimeout(() => jar.classList.remove("shake"), 400);

  const randomIndex = Math.floor(Math.random() * loveNotes.length);
  note.innerText = loveNotes[randomIndex];
  loveNotes.splice(randomIndex, 1);
  remainingNotes--;

  updateCounter();

  note.style.opacity = "1";
  note.style.transform = "translateY(-40px)";

  timeoutId = setTimeout(() => {
    hideNote();
  }, 12000);

  note.addEventListener("click", () => {
    clearTimeout(timeoutId);
    hideNote();
  });
}

function hideNote() {
  const note = document.getElementById("note");
  note.style.opacity = "0";
  note.style.transform = "translateY(20px)";
}

updateCounter();

const countdownDate = new Date("May 02, 2025 00:15:00").getTime();
const countdownEl = document.getElementById("countdown");
const music = document.getElementById("romantic-music");
const secondSong = document.getElementById("second-song");

const confettiTrigger = () => {
  
  const confetti = window.confetti; 
  confetti({
    particleCount: 200,
    spread: 90,
    origin: { y: 0.6 }
  });
};

const countdownTimer = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    clearInterval(countdownTimer);
    countdownEl.innerText = "It's time! 💗";

    document.getElementById("countdown-container").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");

    confettiTrigger();
    if (audioUnlocked) {
    music.play();
}

    music.addEventListener("ended", () => {
      secondSong.play(); 
    });
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

countdownEl.innerText = `Time left: ${days}d ${hours}h ${minutes}m ${seconds}s`;

}, 1000);
