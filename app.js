const enterMessage = document.getElementById("enterMessage");
const lastMessage = document.querySelector(".lastMessage");
const submit = document
  .querySelector(".submit")
  .addEventListener("click", function () {
    textMEssage();
  });
function textMEssage() {
  if (enterMessage.value == "") {
    lastMessage.innerHTML = "your message is empty";
    lastMessage.style.backgroundColor = "#E81828";
    setTimeout(() => {
      timeOut();
    }, 3000);
  } else {
    lastMessage.innerHTML = enterMessage.value;
    lastMessage.style.backgroundColor = "#B0FC38";
    setTimeout(() => {
      timeOut();
    }, 3000);
  }
}
function timeOut() {
  lastMessage.innerHTML = "";
  lastMessage.style.backgroundColor = "transparent";
  enterMessage.value=null;
}
