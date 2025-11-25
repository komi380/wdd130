document.addEventListener("DOMContentLoaded", () => {

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const answer = document.getElementById("answer");
  const sendBtn = document.getElementById("sendBtn");

  let move = 0;

  yesBtn.addEventListener("click", () => {
    answer.innerHTML = "😍 Ouiii ! Trop contente, je serai là avec plaisir !";

    // message WhatsApp OUI
    sendBtn.href = "https://wa.me/22870623751?text=Je%20veux%20venir%20chez%20toi%20le%20mercredi%20prochain%20à%2016h%20😍";
    sendBtn.classList.remove("hidden");
  });

  noBtn.addEventListener("mouseover", () => {
    move += 50;
    noBtn.style.transform = `translate(${move}px, -${move/2}px)`;
  });

  noBtn.addEventListener("click", () => {
    answer.innerHTML = "🥺 Désolée… pas ce soir. 💔";

    // message WhatsApp NON
    sendBtn.href = "https://wa.me/22870623751?text=Je%20ne%20peux%20pas%20venir%20chez%20toi%20le%20mercredi%20prochain%20à%2016h%20😢";
    sendBtn.classList.remove("hidden");
  });

});
