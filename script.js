// Dudu & Bubu Love Site - Interactive JS

function playGame(game) {
  let messages = {
    catch: "🐻 DUDU SAYS: I’m chasing hearts for you, Bubu! Imagine me running with a net… and tripping. Adorable, right?",
    memory: "🐰 BUBU TIME! Let’s remember that time we got lost and found the best ice cream instead. Yum.",
    truthdare: "🎲 SPINNING... Ooh! You have to send me a selfie with bunny ears! 🐰📸",
    jukebox: "🎶 Adding ‘Can’t Help Falling in Love’ to our playlist… because duh. It’s us."
  };
  alert(messages[game]);
}

function unlockNotes() {
  const pass = document.getElementById("password").value;
  const notes = document.getElementById("notes");
  const lock = document.getElementById("lock");

  if (pass === "DuduBubu4eva") {
    notes.classList.remove("hidden");
    lock.textContent = "🔓";
    lock.style.color = "#ff69b4";
  } else {
    alert("❌ Wrong password, Bubu. Try again? Hint: It’s forever.");
  }
}

function showStarText(element) {
  const text = element.getAttribute("data-text");
  document.getElementById("star-reveal").textContent = text;
}

document.getElementById("add-memory-btn").addEventListener("click", function() {
  document.getElementById("memory-upload").click();
});

document.getElementById("memory-upload").addEventListener("change", function() {
  if (this.files.length > 0) {
    alert("📸 Memory uploaded! I’ll print this and put it on my wall. You’re my favorite exhibit.");
  }
});

function sendNote() {
  const note = document.getElementById("note-input").value;
  const response = document.getElementById("note-response");
  if (note.trim() === "") {
    response.textContent = "💌 Please write something, Bubu… even ‘I’m hungry’ works 😘";
    return;
  }
  response.textContent = "🐻 DUDU RECEIVED! Reply incoming… with kiss emoji & potato doodle 🥔❤️🥔";
  document.getElementById("note-input").value = "";
}

// SURPRISE BOX
const surprises = [
  "💝 VIRTUAL LOVE COUPON: Redeem for 1 back rub + 3 forehead kisses.",
  "📜 POEM: Roses are red, my love for you is true… and also very sticky, like honey. 🍯",
  "⏳ COUNTDOWN: Only 2 days until our next date! I’ve marked it in glitter pen.",
  "🕺 SILLY GIF: Watch me attempt the floss dance for you → https://giphy.com/gifs/floss-dance-3o7TKsQ8UQvE5KS6He"
];

document.getElementById("surprise-btn").addEventListener("click", function() {
  const random = surprises[Math.floor(Math.random() * surprises.length)];
  document.getElementById("surprise-content").innerHTML = `<p>🎁 ${random}</p>`;
});

// EASTER EGG
document.addEventListener("keydown", function(e) {
  if (e.key === "b") {
    const input = prompt("Psst... Bubu, enter the secret code:");
    if (input === "BubuWearsSocksToBed") {
      document.getElementById("easter-egg").classList.remove("hidden");
      setTimeout(() => {
        document.getElementById("easter-egg").classList.add("hidden");
      }, 5000);
    }
  }
});

// Optional: Add Dudu & Bubu emojis to title every few seconds
setInterval(() => {
  document.title = document.title.includes("🐻") ? "Dudu & Bubu’s Love Nest 💖" : "Dudu 🐻 & Bubu 🐰 Love Nest 💖";
}, 3000);
