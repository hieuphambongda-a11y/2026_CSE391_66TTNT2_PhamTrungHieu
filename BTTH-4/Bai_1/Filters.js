let filteredStudents = [];
let sortOrder = null;

function applyFilters() {

    let keyword =
        document.getElementById("searchInput").value.toLowerCase();

    let filterValue =
        document.getElementById("filterSelect").value;

    filteredStudents = students.filter(function (sv) {
        return sv.name.toLowerCase().includes(keyword);
    });

    if (filterValue !== "") {
        filteredStudents = filteredStudents.filter(function (sv) {
            return getRank(sv.score) === filterValue;
        });
    }

    if (sortOrder === "asc") {
        filteredStudents.sort(function (a, b) {
            return a.score - b.score;
        });
    }

    else if (sortOrder === "desc") {
        filteredStudents.sort(function (a, b) {
            return b.score - a.score;
        });
    }

    renderTable(filteredStudents);
}

document.getElementById("searchInput")
    .addEventListener("input", applyFilters);

document.getElementById("filterSelect")
    .addEventListener("change", applyFilters);

document.getElementById("colScore")
    .addEventListener("click", function () {

        if (sortOrder === null || sortOrder === "desc") {
            sortOrder = "asc";
            document.getElementById("sortArrow").textContent = "▲";
        }
        else {
            sortOrder = "desc";
            document.getElementById("sortArrow").textContent = "▼";
        }

        applyFilters();
    });

document.getElementById("resetBtn")
    .addEventListener("click", function () {

        document.getElementById("searchInput").value = "";
        document.getElementById("filterSelect").value = "";

        sortOrder = null;

        document.getElementById("sortArrow").textContent = "";

        applyFilters();
    });