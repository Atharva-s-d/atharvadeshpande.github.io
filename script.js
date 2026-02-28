window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

const toggleBtn = document.getElementById("btn");
const darkTheme = document.getElementById("dark");

toggleBtn.addEventListener("click", function () {

    if (darkTheme.disabled) {
        darkTheme.disabled = false;
        toggleBtn.textContent = "Light Mode";
    } else {
        darkTheme.disabled = true;
        toggleBtn.textContent = "Dark Mode";
    }

});
