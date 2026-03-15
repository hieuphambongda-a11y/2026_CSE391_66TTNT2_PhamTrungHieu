let students = [];

function getRank(score) {
  if (score >= 8.5) return "Giỏi";
  if (score >= 7) return "Khá";
  if (score >= 5) return "Trung bình";
  return "Yếu";
}

function showError(inputId) {
  let input = document.getElementById(inputId);
  input.style.borderColor = "red";
  input.value = "";
  input.focus();
}

function addStudent() {
  let nameInput = document.getElementById("name");
  let scoreInput = document.getElementById("score");

  let name = nameInput.value.trim();
  let score = parseFloat(scoreInput.value);

  if (name === "") {
    showError("name");
    return;
  }

  if (isNaN(score) || score < 0 || score > 10) {
    showError("score");
    return;
  }

  students.push({
    name: name,
    score: score
  });

  applyFilters();

  nameInput.value = "";
  scoreInput.value = "";
  nameInput.focus();
}

function renderTable(list) {

  let tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  let totalScore = 0;

  if (list.length === 0) {
    tbody.innerHTML = "<tr><td colspan='5'>Không có kết quả</td></tr>";
    updateStats(0);
    return;
  }

  for (let i = 0; i < list.length; i++) {

    let sv = list[i];

    let tr = document.createElement("tr");

    tr.innerHTML =
      "<td>" + (i + 1) + "</td>" +
      "<td>" + sv.name + "</td>" +
      "<td>" + sv.score + "</td>" +
      "<td>" + getRank(sv.score) + "</td>" +
      "<td><button class='deleteBtn'>Xóa</button></td>";

    tbody.appendChild(tr);

    totalScore += sv.score;
  }

  updateStats(totalScore);
}

function updateStats() {

  let count = students.length;
  let total = 0;
  for (let i = 0; i < students.length; i++) {
    total += students[i].score;
  }

  let avg = 0;
  if (count > 0) {
    avg = (total / count).toFixed(2);
  }

  document.getElementById("stats").innerText =
    "Tổng sinh viên: " + count +
    " | Điểm trung bình: " + avg;
}
document.getElementById("addBtn").addEventListener("click", addStudent);

document.getElementById("tableBody").addEventListener("click", function (event) {

  if (event.target.classList.contains("deleteBtn")) {

    let tr = event.target.parentElement.parentElement;

    let index = tr.rowIndex - 1;

    students.splice(index, 1);

    applyFilters();
  }

});

document.getElementById("score").addEventListener("keypress", function (event) {
  if (event.key === "Enter") addStudent();
});