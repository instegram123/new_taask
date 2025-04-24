let addBtn = document.getElementById("add-quote");
let quoteTable = document.getElementById("quote-table-body");

addBtn.onclick = function () {
  let book = document.getElementById("quote-book").value.trim();
  let quote = document.getElementById("quote-text").value.trim();

  if (book !== "" && quote !== "") {
    let row = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = book;
    row.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = quote;
    row.appendChild(td2);

    quoteTable.appendChild(row);

    // مسح الحقول بعد الإضافة
    document.getElementById("quote-book").value = "";
    document.getElementById("quote-text").value = "";
  } else {
    alert("يرجى ملء كل الحقول.");
  }
};
