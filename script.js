function openLetter() {
    document.querySelector('.envelope').style.display = 'none';
    const letter = document.getElementById('letter');
    letter.style.display = 'block';
    const text = "Happy Valentine's Day, my bubba! ❤️\n\nYou make every day special, and I’m so lucky to have you back in my life.\n\nI love you so so much more than you can ever imagine. <3 \n\nYours ;)";
    let i = 0;
    function typeEffect() {
        if (i < text.length) {
            letter.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeEffect, 40);
        }
    }
    typeEffect();
}
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 100);

