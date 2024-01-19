document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggleButton");
    var toggleElement = document.getElementById("toggleElement");
    var waitingToAppear = false;

    toggleButton.addEventListener("click", function () {
        if (window.innerWidth <= 576) {
            if (waitingToAppear) {
                return;
            }

            var isElementVisible = window.getComputedStyle(toggleElement).display !== "none";

            if (isElementVisible) {
                toggleElement.style.display = "none";
            } else {
                waitingToAppear = true;
                setTimeout(function () {
                    toggleElement.style.display = "block";
                    waitingToAppear = false;
                }, 500);
            }
        } else {
        }
    });
});