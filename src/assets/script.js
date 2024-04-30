document.addEventListener("DOMContentLoaded", function() {


    const icons = document.querySelectorAll('.icon');

    icons.forEach(function(icon) {
        // Generate random position
        const left = Math.random() * (window.innerWidth - icon.clientWidth);
        const top = Math.random() * (window.innerHeight - icon.clientHeight);

        // Set position
        icon.style.position = 'absolute';
        icon.style.left = left + 'px';
        icon.style.top = top + 'px';
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to show/hide pop-ups
    const links = document.querySelectorAll('.icon');
    //const popups = document.querySelectorAll('.popup');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            const targetPopupId = link.getAttribute('href').substring(1); // Remove '#'
            const targetPopup = document.getElementById(targetPopupId);
            if (targetPopup !== null){
                // Show target popup
                targetPopup.style.display = 'block';

                // Prevent default link behavior
                event.preventDefault();
            } else {
                // Initialize Webamp when the page loads
                const app = document.getElementById("app")
                const webamp = new Webamp({
                    
                    availableSkins: [ 
                        {
                            url: "src/assets/Fallout_Pip-Girl_3000_Blue_ v1.wsz",
                            name: "Fallout Pip Girl Blue",
                        },
                        {
                            url: "src/assets/BangAmp.wsz",
                            name: "BangAmp",
                        },
                        {
                            url: "src/assets/Maths_Blackboard_Edition.wsz",
                            name: "Maths Blackboard",
                        },
                    ],
                    initialTracks: [
                        {
                            metaData: {
                                artist: "100 gecs",
                                title: "stupid horse",
                            },
                            url: "src/assets/stupidHorse.mp3"
                        },
                        {
                            metaData: {
                                artist: "bladee, Ecco2k, Thaiboy Digital",
                                title: "TL;DR",
                            },
                            url: "src/assets/tldr.mp3"
                        }
                    ],
                    initialSkin: {
                        url: "src/assets/Fallout_Pip-Girl_3000_Blue_ v1.wsz",
                    }
                });
                webamp.renderWhenReady(app);
            }
        });
    });

    // Add event listeners to close pop-ups
    const closeButtons = document.querySelectorAll('.close-popup');

    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const popup = button.parentNode; // Get parent popup element
            popup.style.display = 'none'; // Hide popup
        });
    });
});