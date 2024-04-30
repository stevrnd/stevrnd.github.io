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
    const popups = document.querySelectorAll('.popup');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            const targetPopupId = link.getAttribute('href').substring(1); // Remove '#'
            const targetPopup = document.getElementById(targetPopupId);

            // Show target popup
            targetPopup.style.display = 'block';

            // Prevent default link behavior
            event.preventDefault();
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

    // Initialize Webamp
    const webamp = new Webamp({
        initialTracks: [
            // Add your initial playlist tracks here
            {
                metaData: {
                    artist: "Artist Name",
                    title: "Song Title",
                    url: "https://example.com/song.mp3"
                }
            }
        ]
    });

    // Render Webamp inside the container element
    webamp.renderWhenReady(document.getElementById("webamp-container"));
});