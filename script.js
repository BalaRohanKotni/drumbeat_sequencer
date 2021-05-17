const track1 = document.getElementById("track-1-inst");
const button = document.getElementById("track-1-curr-inst");

let list = document.getElementById("track-1-list").getElementsByTagName("li");
for (let i = 0; i < list.length; i++) {
    let currentButton = list[i].getElementsByTagName("button")[0]
    currentButton.addEventListener("click", () => {
        button.innerHTML = currentButton.innerHTML;
    });
}