let addPageButton = document.getElementById("add-page");
let pageBody = document.getElementById("page-body");
let bookTitleInput = document.getElementById("book-title");
let pageNumberInput = document.getElementById("page-number");

addPageButton.addEventListener("click", addPage);

function addPage() {
  let bookTitle = bookTitleInput.value;
  let pageNumber = pageNumberInput.value;

  if (bookTitle === "" || pageNumber === "") {
    alert("يرجى إدخال اسم الكتاب ورقم الصفحة");
  } else {
    let row = document.createElement("tr");

    // عمود اسم الكتاب
    let titleCell = document.createElement("td");
    titleCell.innerText = bookTitle;
    row.appendChild(titleCell);

    // عمود رقم الصفحة
    let pageCell = document.createElement("td");
    pageCell.innerText = pageNumber;
    row.appendChild(pageCell);

    pageBody.appendChild(row);

    // مسح الحقول بعد إضافة البيانات
    bookTitleInput.value = "";
    pageNumberInput.value = "";
  }
}
