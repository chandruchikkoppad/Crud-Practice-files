let form = document.querySelector("form");
let inp1 = document.getElementById("inpval");
let ul = document.querySelector("ul");
let data = JSON.parse(window.localStorage.getItem("todo3")) || [];

form.addEventListener("submit", e => {
  e.preventDefault();
  let value = inp1.value;
  let data = JSON.parse(window.localStorage.getItem("todo3")) || [];
  data.push(value);
  window.localStorage.setItem("todo3", JSON.stringify(data));
  inp1.value = "";
  RenderData(data);
});

function RenderData(data) {
  ul.innerHTML = "";
  data.forEach((v,i) => {
    let newInp = document.createElement("li");
    newInp.innerHTML = `
      <div>
        <input type="text" disabled name="liInp" value="${i+1 +' . '+ v}">
        <button class="btn1"><i class="fa-solid fa-pen"></i></button>
        <button class="btn2" ><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
    ul.appendChild(newInp);
  });
}
RenderData(JSON.parse(window.localStorage.getItem("todo3")) || []);

let inpUL = document.querySelector("ul");
let DelBtn = document.querySelectorAll(".btn2");

DelBtn.forEach(v => {
  v.addEventListener("click", e => {
    let data = JSON.parse(window.localStorage.getItem("todo3")) || [];
    let index = data.indexOf(
      e.target.parentElement.querySelector("input").value
    );
    data.splice(index, 1);
    window.localStorage.setItem("todo3", JSON.stringify(data));
    e.target.parentElement.parentElement.remove();
      window.location.reload();
  });
});










