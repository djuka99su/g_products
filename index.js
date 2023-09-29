function toggleUpArrow() {
        var upArrow = document.getElementById("upArrow");
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            upArrow.style.display = "block";
        } else {
            upArrow.style.display = "none";
        }
    }

    // Attach a scroll event listener to the window
    window.onscroll = function () {
        toggleUpArrow();
    };

    // Function to scroll to the top when the up-arrow button is clicked
    document.getElementById("upArrow").addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
