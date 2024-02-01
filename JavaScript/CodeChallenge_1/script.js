// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = document.querySelector("h2");
{
    function handleMouseEnter() {
        superEventHandler.style.color = "#1abc9c";
        superEventHandler.innerText = "The mouse is here!";
    }

    function handleMouseLeave() {
        superEventHandler.style.color = "#3498db";
        superEventHandler.innerText = "The mouse is gone!";
    }

    function handleResize() {
        superEventHandler.style.color = "#9b59b6";
        superEventHandler.innerText = "You just resized!";
    }

    function handleMouseRightClick() {
        superEventHandler.style.color = "#e74c3c";
        superEventHandler.innerText = "That was a right click!";
    }

    superEventHandler.addEventListener("mouseenter", handleMouseEnter);
    superEventHandler.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);
    window.addEventListener("contextmenu", handleMouseRightClick);
}
