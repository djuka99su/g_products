window.addEventListener('DOMContentLoaded', (event) => {
    const overlay = document.getElementById('overlay');
    const largeImage = document.getElementById('large-image');
    const closeBtn = document.getElementById('close-btn');
    const phoneNum = document.getElementById('phone-num');

    function hideOverlay() {
        console.log('Closing overlay');
        overlay.style.display = 'none';
        closeBtn.style.display = 'none';
        phoneNum.style.display = 'block';
    }


    const images = document.querySelectorAll('.card-img-top');
    images.forEach(img => {
        img.addEventListener('click', (e) => {
            largeImage.src = e.target.src;  
            if (window.innerWidth < 1200) {
                overlay.style.display = 'flex';   
            } else {
                overlay.style.display = 'flex';  
                closeBtn.style.display = 'block';
                phoneNum.style.display = 'none';
            }
        });
    });

    largeImage.onload = () => {
            overlay.addEventListener('click', (ee) => {
                if (overlay.contains(ee.target) && ee.target !== largeImage) {
                    hideOverlay();
                } 
            });
        };


    closeBtn.addEventListener('click', () => { 
        hideOverlay();
    });


});





function toggleUpArrow() {
        var upArrow = document.getElementById("upArrow");
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            upArrow.style.display = "block";
        } else {
            upArrow.style.display = "none";
        }
    }

    window.onscroll = function () {
        toggleUpArrow();
    };

    document.getElementById("upArrow").addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });

