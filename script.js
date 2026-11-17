
/* =====================================================
   EDIT YOUR NOTES HERE
   Each mood has a title and a list of notes.
   Add as many notes as you like: one is picked at random
   each time. Use \n for a line break.
   ===================================================== */
const MOODS = {
  happy: {
    title: "I'm so happy you're happy",
    notes: [
      "Kutu ur smile is so gorgeous hehe. I can see it my head right now. \n I love you so so so much and I am always always always so proud of you. Muah (cuz u know this is when I would grab your face and smooch you all over).",
      "Text meeee I wanna know what's got you smiling. Seeing u happy makes me happy shona",
      "Don't be a hoarder, share the happy things w me hehe",
    ],
  },
  sad: {
    title: "Come here, mera shona",
    notes: [
      "If this is about your research, I got you. Say it with me, 'Ritogoon is a smort goon'. \n \n Go on. I know you didn't do it. \n \n Say it. \n \n Stubborn fucker. That's what has made you an excellent researcher (though sometimes it is also the trait that makes me wanna pull my own hair out). You don't take no for an answer when you want something. When one way of doing things doesn't work, you like to improvise another. You're the guy that steps up, tries his best, and if things go wrong, you're the guy that reflects and makes a change. This is what makes you a good boyfriend. This is also what will take you super far in your career.",
      "Take a minute to look at how far you've come from where you started. Seriously, let's do it. You're the nerdy Indian kid from STEM who expected so much more from his college applications yet 'only got UCSD'. Think about how silly that sounds in hindsight, yet you were upset like anyone of your caliber would be. \n \n But then life happened. \n \n You met Albert, you met Chard, you met Anthony, and... meeeee! One and only, yours truly \u{1f618} \n Point being, it's not the end of the world. You're good at making the most of what you have right now. If something doesn't quite go right in the moment, that doesn't say anything about how happy or sad you will be about the same thing in 10 days. Stay strong and call me soon <3",
      "Sometimes a day is too fucked to unfuck it. Go read a book or take a nap or jump around orrrrr if you're really out of options... think of me and goon. \n\n ... \n\n Meow! It was just a sugesstion. \n\n Seriously though, go look at the pictures from our first date. The one where we went to Piatti, fucked in your car, then got ice cream and went to the country club and made out with u on my lap. \n\n Think about how happy we were when you told me you got into MIT and I came running to find you in the CSE basement. Then we sneaked off to a corner and made out, only to find that there was a class next to us that got the full show they definitely didn't ask for. \n\n Think about the first time we celebrated pujo together and had the classic Indian American experience. And we got cholaar daal and luchi! \n\n Think about the way you felt all the times when you picked me up from South Station. \n\n There are so many things that have made you who you are kutu and you're the most wonderful gist life has ever given me. Your smile makes my day and your tears break my heart. Whatever it is, I got you love. Call me.",
      "Slow down and think about what's really making you sad kutu. Do it in the therapy way. I'm sure you've picked some of that up",
    ],
  },
  proud: {
    title: "You overachiever, I knew you'd do something good ;)",
    notes: [
      "So obviously I assume you have texted me about this thing already (I know when you're likely to text me and when you're likely to not \u{1f609}). I am so so so proud of you. I would be regardless of whether you achieved this particular milestone or not, but I'm so happy you did. I believe in you Kutu. No matter what happens, I believe in you. You are the one who has moved mountains for me when I needed it and I know you can do it for yourself too. You're my sweet lil goon. Muah.",
    ],
  },
  miss: {
    title: "I miss you too",
    notes: [
      `Hi Kutu,

      I thought really long and hard about what I wanted to say here but nothing quite fit. I guess I can’t quite expect to do that. Not when there are so many things I am thinking and feeling as the day I leave comes closer. In some part it doesn’t even feel real. Like… what do you mean I can’t wake up every day with you? What do you mean I can’t eat the dinners you cook? What do you mean I can’t kiss and cuddle with you at the end of a long day and fall asleep knowing all is right as long as you’re with me? It can’t be real. I simply can’t picture it. All I can picture is you and me together. Happy.

      There is something very bittersweet about loving someone so much that even being on the opposite sides of the world can’t do much to keep you apart. I’m sorry I couldn’t make our present situation better and I’m sorry I have to put us through this. All I can do now is promise you I will everything I need to come back to you. I will come back to you. There is no universe in which I’m alive and don’t come back to you.

      You’re my home Kutu. I still remember the day I realized I loved you. It was a month into dating and we had a pretty bad fight and we were planning to talk things out. You went to the Putnam that day and then met me at Geisel. Then we started driving home and we saw the colors in the sky and decided to stop to watch the sunset at the beach. The beauty of that scene in front of us you — it hit me that I didn’t want to be anywhere else in the world. All I needed in life was to be next to you. You glowing in the light of that sunset, the breeze in your hair, your hand in mine — it’s forever etched in my mind. I knew I had to be with you. That you were probably the one for me. I still think you are.

      And then we proceeded to go through a rollercoaster of a first year together. Time was kind and unkind to us. I love the fact that we got to live together for a whole year and have so much time together. I suppose it was time given with conditions though, namely PTSD, several urgent care and ER trips, and a wonderful vacation where we almost broke up cuz I like to sleep on vacation and you don’t 💀

      It’s been a hell of a journey with you Kutu and I want so so so much more of it. I love you mind, body, and soul.`,
      "I really do love. I will move mountains and try to make something work so I can make my way back to you. Home is where you are Kutu and I want to go home with you. We both know this distance is necessary. I would have loved to be with you in Boston and you would have loved being with me in India. But we both know we need careers. We value both our careers and each other's careers.",
      "Jobs are bullshit.",
      "Babe can you build something to teleport me there pwease. Just long enough to cuddle and never let go",
    ],
  },
  doubt: {
    title: "Read this slowly",
    notes: [
      "You're probably reading this because we're really going through it this time. It might have been over something that we would have kissed and made up over in like 5 minutes. If that not then maybe in day we would have been fine. But that's just not the situation we're in right now I suppose. \n\n I want to tell you all the reasons I want to stay with you and give us a real shot at making it through this. \n\n You're the love of my life Kutu. I have never felt anything close to the way you make me feel. You're every other thought in my head, everything comes back to you. Every little thing makes me go, 'I wonder what Kutu would think of this' or 'Kutu would smile at this' or 'Oh this would make Kutu rant my head off for the rest of the day'. It's rare to find a love like that. A love that can be so firey and passionate that we lose sense of everything else but each other and drives us crazy. Sometimes too crazy. \n\n The thing is, I expect the bulk of our problems to occur because we miss each other beyond belief. We're meant to wake up next to each other, make meals together, have you steal all my berries, have me laughing at you for trying to put the leftover chicken in a closed box, have you call me bloody Ravan because of the way I laugh, and look into each other's eyes and seeing everything we ever wished for in them.",
      "Good things are worth waiting for. Good times with you are worth waiting for. We have had so many good times this past year, love, I wouldn't give any of it up for the world. I'm in it to marry you. To make you mine one day. To put an end to us ever being apart and building the life we always wanted. I still see that life with you. I still see what I'm doing this for. It's so hard and so painful and unbearable on some days. \n \n The thing I want at the end is worth it though Kutu. We're worth it."
    ],
  },
};
 
/* ---------- Footer year + mobile nav ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
 
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.addEventListener("click", () => {
  links.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
});
 
/* ---------- Notes ---------- */
const moodButtons = document.querySelectorAll(".mood");
const card = document.getElementById("note-card");
const titleEl = document.getElementById("note-title");
const textEl = document.getElementById("note-text");
const lastShown = {};
let currentMood = null;
 
function showNote(mood) {
  const data = MOODS[mood];
  if (!data) return;
  currentMood = mood;
 
  let idx;
  do {
    idx = Math.floor(Math.random() * data.notes.length);
  } while (data.notes.length > 1 && idx === lastShown[mood]);
  lastShown[mood] = idx;
 
  titleEl.textContent = data.title;
  textEl.textContent = data.notes[idx];
 
  card.hidden = false;
  card.style.animation = "none";
  void card.offsetWidth; // restart the pop animation
  card.style.animation = "";
 
  moodButtons.forEach((b) => b.classList.toggle("active", b.dataset.mood === mood));
}
 
moodButtons.forEach((b) =>
  b.addEventListener("click", () => {
    showNote(b.dataset.mood);
    card.scrollIntoView({ behavior: "smooth", block: "nearest" });
  })
);
document.getElementById("note-next").addEventListener("click", () => showNote(currentMood));
document.getElementById("note-close").addEventListener("click", () => {
  card.hidden = true;
  moodButtons.forEach((b) => b.classList.remove("active"));
});
 
/* ---------- Cats ---------- */
const MAD_WORDS = ["hmph!", "hiss!", "rude!", "grrr!", "how dare you!", "mrow!!"];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 
const CAT_SVG = `
<svg viewBox="0 0 100 100" aria-hidden="true">
  <g class="tail">
    <path class="fur" d="M72 82 C95 80 98 52 88 46 C84 44 82 50 86 54 C90 62 84 72 70 72 Z"/>
  </g>
  <g class="body-wrap">
    <ellipse class="fur" cx="50" cy="76" rx="24" ry="17"/>
    <ellipse class="fur-dark" cx="38" cy="90" rx="7" ry="4"/>
    <ellipse class="fur-dark" cx="62" cy="90" rx="7" ry="4"/>
    <polygon class="fur" points="24,40 28,12 44,30"/>
    <polygon class="fur" points="76,40 72,12 56,30"/>
    <polygon class="ear-in" points="29,34 30,19 39,30"/>
    <polygon class="ear-in" points="71,34 70,19 61,30"/>
    <ellipse class="fur" cx="50" cy="50" rx="28" ry="24"/>
    <circle class="eye" cx="39" cy="48" r="3.4"/>
    <circle class="eye" cx="61" cy="48" r="3.4"/>
    <g class="brows">
      <line class="line" x1="31" y1="40" x2="44" y2="45"/>
      <line class="line" x1="69" y1="40" x2="56" y2="45"/>
    </g>
    <ellipse class="cheek" cx="32" cy="57" rx="5" ry="3"/>
    <ellipse class="cheek" cx="68" cy="57" rx="5" ry="3"/>
    <polygon class="nose" points="47,54 53,54 50,58"/>
    <path class="line mouth-happy" d="M44 61 Q47 65 50 60 Q53 65 56 61"/>
    <path class="line mouth-mad" d="M44 65 Q50 59 56 65"/>
    <line class="line" x1="20" y1="54" x2="33" y2="56"/>
    <line class="line" x1="20" y1="62" x2="33" y2="60"/>
    <line class="line" x1="80" y1="54" x2="67" y2="56"/>
    <line class="line" x1="80" y1="62" x2="67" y2="60"/>
  </g>
</svg>`;
 
function rand(min, max) { return Math.random() * (max - min) + min; }
 
function spawnCat(fur, furDark) {
  const el = document.createElement("div");
  el.className = "cat";
  el.style.setProperty("--fur", fur);
  el.style.setProperty("--fur-dark", furDark);
  el.innerHTML = `<div class="cat-bubble"></div><div class="cat-flip">${CAT_SVG}</div>`;
  document.body.appendChild(el);
 
  const bubble = el.querySelector(".cat-bubble");
  let timer = null;
  let madTimer = null;
 
  const size = () => el.offsetWidth;
  const bounds = () => ({
    maxX: Math.max(0, window.innerWidth - size()),
    minY: 80,
    maxY: Math.max(100, window.innerHeight - size() - 10),
  });
 
  // starting position
  const b0 = bounds();
  el.style.left = rand(0, b0.maxX) + "px";
  el.style.top = rand(b0.minY, b0.maxY) + "px";
 
  function wander() {
    if (reduceMotion) return;
    const b = bounds();
    const x0 = el.getBoundingClientRect().left;
    const y0 = el.getBoundingClientRect().top;
    const x = rand(0, b.maxX);
    const y = rand(b.minY, b.maxY);
    const dist = Math.hypot(x - x0, y - y0);
    const secs = Math.max(1.5, dist / 70);
 
    el.classList.toggle("face-left", x < x0);
    el.classList.add("walking");
    el.style.transition = `left ${secs}s linear, top ${secs}s linear`;
    el.style.left = x + "px";
    el.style.top = y + "px";
 
    timer = setTimeout(() => {
      el.classList.remove("walking");
      timer = setTimeout(wander, rand(1500, 4500)); // rest a bit
    }, secs * 1000);
  }
 
  el.addEventListener("click", () => {
    clearTimeout(timer);
    clearTimeout(madTimer);
 
    // freeze exactly where it is
    const r = el.getBoundingClientRect();
    el.style.transition = "none";
    el.style.left = r.left + "px";
    el.style.top = r.top + "px";
 
    el.classList.remove("walking");
    el.classList.add("angry");
    bubble.textContent = MAD_WORDS[Math.floor(Math.random() * MAD_WORDS.length)];
 
    madTimer = setTimeout(() => {
      el.classList.remove("angry");
      timer = setTimeout(wander, 800);
    }, 2500);
  });
 
  timer = setTimeout(wander, rand(300, 1500));
}
 
const cats = [
  ["#ffe4ec", "#f7c6d6"], // soft pink
  ["#ffffff", "#ececec"], // white
  ["#cfc3d9", "#b7a9c4"], // lilac grey
  ["#ffd9b3", "#f2c08c"], // peach
];
const count = window.innerWidth < 640 ? 3 : 4;
for (let i = 0; i < count; i++) spawnCat(...cats[i]);
 
// keep cats on screen if the window is resized
window.addEventListener("resize", () => {
  document.querySelectorAll(".cat").forEach((c) => {
    const maxX = window.innerWidth - c.offsetWidth;
    const maxY = window.innerHeight - c.offsetHeight;
    if (parseFloat(c.style.left) > maxX) c.style.left = maxX + "px";
    if (parseFloat(c.style.top) > maxY) c.style.top = Math.max(80, maxY) + "px";
  });
});
 