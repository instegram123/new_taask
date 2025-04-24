
onload = function () {
  alert("📚 Welcome to Book Tracker");
}
let btm = document.getElementById("btm");
let table = document.getElementById("book-body");
let title = document.getElementById("title");
let author = document.getElementById("author");
let status = document.getElementById("status");


let searchInput = document.getElementById("search-input");

btm.addEventListener("click", my_fun);

function my_fun() {
  let task_name = title.value;
  let task_author = author.value;
  let task_status = status.value;

  if (task_name === "" || task_author === "") {
  alert("📚 يرجى إدخال اسم الكتاب والمؤلف");
  } else {
    let element = document.createElement("tr");

    let element2 = document.createElement("td");
    element2.innerText = task_name;
    element.appendChild(element2);

    let element3 = document.createElement("td");
    element3.innerText = task_author;
    element.appendChild(element3);

    let element4 = document.createElement("td");
    element4.innerText = task_status;
    element.appendChild(element4);

    let element5 = document.createElement("td");

    let toggleBtn = document.createElement("button");
    toggleBtn.innerText = "تغيير الحالة";
    toggleBtn.classList.add("toggle-btn");
    toggleBtn.onclick = function () {
      element4.innerText = element4.innerText === "Read" ? "Not Read" : "Read";
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "حذف";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
      if (confirm("هل أنت متأكد من أنك تريد حذف الكتاب؟")) {
        element.remove();
      }
    };

    element5.appendChild(toggleBtn);
    element5.appendChild(deleteBtn);
    element.appendChild(element5);

    table.appendChild(element);

    title.value = "";
    author.value = "";
  }
}

searchInput.addEventListener("input", function() {
  let searchValue = searchInput.value;
  let rows = table.getElementsByTagName("tr");

  for (let row of rows) {
    let titleCell = row.getElementsByTagName("td")[0]; 
    let authorCell = row.getElementsByTagName("td")[1]; 

    if (titleCell != null && authorCell != null)
        {
      let titleText = titleCell.textContent;
      let authorText = authorCell.textContent;

      if (titleText.includes(searchValue) || authorText.includes(searchValue)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    }
  }
});
