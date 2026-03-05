const statusEl = document.getElementById("status");
const btnHello = document.getElementById("btnHello");
const btnRed = document.getElementById("btnRed");
btnHello.addEventListener("click", function () {
  statusEl.textContent = "Xin chào! Đây là nội dung được thay đổi bằng JavaScript.";
});

btnRed.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
  //document.body.style.color = "red";
});

const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");
nameInput.addEventListener("input", function () {
  const value = nameInput.value;
  greeting.textContent = "Xin chào, " + value + "!";
});
