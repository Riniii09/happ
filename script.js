document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const songDiv = document.querySelector(".song");
    const preSongDiv = document.querySelector(".pre-song");
    const audio = document.querySelector("audio");
    const muteBtn = document.getElementById("mute-btn");
    const img = document.getElementById("cat-img");

    let randomGiftNumber = Math.floor(Math.random() * 3) + 1; // Assuming 3 gifts
    let selectedGiftId = `gift-${randomGiftNumber}`;
    console.log(`The correct gift ID is: ${selectedGiftId}`);


    yesBtn.addEventListener("click", function () {
        preSongDiv.style.display = "none";
        songDiv.style.display = "flex";

        // Ensure audio is not muted and try to play it
        audio.muted = false;
        audio.play().catch(err => {
            console.log("Autoplay blocked:", err);
        });

        // Show the image after 1 second
        setTimeout(() => {
            img.classList.add("show");

            // After it appears, start slow spinning
            setTimeout(() => {
                img.classList.add("slow-spin");
                
                // Stop spinning and all animations after 18 seconds total
                setTimeout(() => {
                    img.classList.remove("slow-spin");
                    // Apply the final rotation to avoid sudden snap-back
                    const currentRotation = getComputedStyle(img).getPropertyValue('transform');
                    img.style.transform = currentRotation;
                    img.style.animation = 'none';
                }, 15000); // 16 seconds after spinning starts (18 seconds total)
            }, 1000);
        }, 3000);
    });

    noBtn.addEventListener("click", function() {
        // Optional: Add some behavior for the "No" button
        alert("Too bad, you're missing out!");
    });

    muteBtn.addEventListener("click", function () {
        if (audio.muted) {
            audio.muted = false;
            muteBtn.textContent = "🔊";
        } else {
            audio.muted = true;
            muteBtn.textContent = "🔇";
        }
    });

    audio.addEventListener("ended", function() {
        const giftElement = document.querySelector(".gift"); // Selects the first element with class "gift"
    
        if (giftElement) { // Ensure the element exists
            giftElement.classList.remove("hidden");
            giftElement.classList.add("show");
        }    });

        document.querySelectorAll("[id^='gift-']").forEach(gift => {
            gift.addEventListener("click", function () {
                if (this.id === selectedGiftId) { 
                    window.location.href = "./chair.html"
                } else {
                    let messages = [
                        "Do you think a peasant like me can get you multiple gifts? 😔",
                        "NUH UH"
                    ];
                    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
                    alert(randomMessage);                }
            });
        });
        
    
});