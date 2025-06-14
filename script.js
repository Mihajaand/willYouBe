(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Are you sure 🤣🤣?",
    "Really sure 🤣🥺??",
    "Tatiii please... 🤣🥺",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "will be very very very sad...",
    "Misy Chocolat mamy be an zayyyy 🍫😍😂",
    "It’s something small... but full of love 💌",
    "It comes with a hug 🥺",
    "What if it's handmade just for you?",
    "Tatiii, Tatttii, Tatiiii....",
    "It’s already wrapped, I swear!",
    "Please, I’ll be the happiest if you say yes 😭",
    "You will not regret it, I promise! ❤️",
    "Don't break my little heart 💔",
    "One yes won’t hurt... I promise 🥹",
    "It’s a surprise! And surprises are fun!",
    "Imagine me giving it to you with a big smile 😁",
    "Would you say no to a puppy? 🐶 (it's not a puppy but still...)",
    "AAA ts mahazo mandà aingana!",
    "It's not expensive, but it's priceless ❤️",
    "I’ve been planning this for long...",
    "You’re gonna love it... I feel it!",
    "Just open your heart for 1 sec 😌",
    "It's just a little token of how amazing you are",
    "Say yes and I’ll stop being annoying (maybe 🤣🥺)",
    "Okay okay, last time asking… unless you say Yes 😈",
    "Come onnn, it's your birthday, let me spoil you!",
    "Please 🥺 for you?",
    "Okay... but what if I cry? 😭",
    "Just kidding, say yes pleeeeease! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}