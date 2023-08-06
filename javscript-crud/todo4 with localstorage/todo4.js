let form = document.querySelector("form");
let inp1 = document.getElementById("input1");
let ul = document.querySelector("ul");

form.addEventListener("submit", e => {
  e.preventDefault();
  let val = inp1.value;
  let data = JSON.parse(localStorage.getItem("todo4")) || [];
  data.push(val);
  localStorage.setItem("todo4", JSON.stringify(data));
  inp1.value = "";
  printData();
});

function printData() {
  ul.innerHTML = "";
  let data = JSON.parse(localStorage.getItem("todo4")) || [];
  data.forEach((val, i) => {
    let li = document.createElement("li");
    li.innerHTML = `
    <span>${i + 1}.</span>
      <input type="text" value="${val}" disabled />
      <button class="btn1" onclick="editData(${i})">Edit</button>
      <button class="btn2" onclick="deleteData(${i})">Delete</button>
    `;
    ul.appendChild(li);
  });
}

function editData(index) {
  let li = ul.childNodes[index];
  let input = li.querySelector("input");
  let editButton = li.querySelector(".btn1");

  if (editButton.innerText === "Edit") {
    input.disabled = false;
    editButton.innerText = "Done";
    input.focus();
  } else {
    input.disabled = true;
    editButton.innerText = "Edit";
    let data = JSON.parse(localStorage.getItem("todo4")) || [];
    data[index] = input.value;
    localStorage.setItem("todo4", JSON.stringify(data));
  }
}

function deleteData(index) {
  let data = JSON.parse(localStorage.getItem("todo4")) || [];
  data.splice(index, 1);
  localStorage.setItem("todo4", JSON.stringify(data));
  printData();
}

printData();
