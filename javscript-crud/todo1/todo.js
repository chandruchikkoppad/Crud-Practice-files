let form = document.querySelector("form");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
let btn1 = document.querySelectorAll(".btn1");
let btn2 = document.querySelectorAll(".btn2");

form.addEventListener("submit", e => {
  e.preventDefault();
  let value = e.target[0].value;
  let list = document.createElement("li");
  list.innerHTML = `<input type="text" id="cls-input" disabled value="${value}"/> <button class="btn1"><i class="fa-solid fa-pen"></i></button> <button class="btn2">Delete</button>`;
  ul.appendChild(list);

  let test = list.childNodes[4];
  console.log(test);
  test.addEventListener("click", e => {
    e.target.parentElement.remove();
  });

  let edit = list.childNodes[2];
  console.log(edit);
  edit.addEventListener("click", e => {
    console.log(e.target.parentElement);
    let toggle = e.target.classList.toggle("active")
    console.log(toggle);
    if (toggle) {
      e.target.parentElement.previousElementSibling.removeAttribute("disabled");
    } else {
      e.target.parentElement.previousElementSibling.setAttribute(
        "disabled",
        true
      );
    }
  });
});

btn2.forEach(val => {
  val.addEventListener("click", e => {
    e.target.parentElement.remove();
  });
});

btn1.forEach(val => {
  val.addEventListener("click", e => {
    let toggle = e.target.classList.toggle("active");
    if (toggle) {
      e.target.previousElementSibling.removeAttribute("disabled");
    } else {
      e.target.previousElementSibling.setAttribute("disabled", false);
    }
  });
});
