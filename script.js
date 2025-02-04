document.addEventListener("DOMContentLoaded", function () {
    function openPopup(popupId) {
        const popup = document.getElementById(popupId);
        popup.classList.remove("hide");
        popup.classList.add("show");
        popup.style.display = "flex";
    }

    function closePopup(popupId) {
        const popup = document.getElementById(popupId);
        popup.classList.remove("show");
        popup.classList.add("hide");
        setTimeout(function () {
            popup.style.display = "none";
        }, 300);
    }

    document.getElementById("markus").addEventListener("click", function () {
        openPopup("popup-markus");
    });
    document.getElementById("mod").addEventListener("click", function () {
        openPopup("popup-mod");
    });

    document.getElementById("MineCon").addEventListener("click", function () {
        openPopup("popup-MineCon");
    });
    
    document.querySelectorAll(".close-btn").forEach(function (closeBtn) {
        closeBtn.addEventListener("click", function () {
            const popup = closeBtn.closest(".popup");
            closePopup(popup.id);
        });
    });

    document.querySelectorAll(".popup").forEach(function (popup) {
        popup.addEventListener("click", function (event) {
            if (event.target === popup) {
                closePopup(popup.id);
            }
        });
    });
});
