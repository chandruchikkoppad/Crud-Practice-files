let form = document.querySelector("form");
let inp1 = document.getElementById("inpval");
let ul = document.querySelector("ul");
let btn1 = document.querySelectorAll(".btn1");
let btn2=document.querySelectorAll(".btn2")

form.addEventListener("submit", e => {
      e.preventDefault();
      let value = inp1.value;
      let newInp = document.createElement("li");
      newInp.innerHTML = `<div>
            <input type="text" disabled name="liInp" value=${value}    />
            <button class="btn1"><i class="fa-solid fa-pen"></i></button>
            <button class="btn2"><i class="fa-solid fa-trash"></i></button>
      </div>`;
      ul.appendChild(newInp);
      inp1.value=""
      let del = newInp.childNodes[0].childNodes[5];
      console.log(del);
      del.addEventListener('click', e => {
            e.target.parentElement.parentElement.parentElement.remove();
      })

      let edit = newInp.childNodes[0].childNodes[3];
      console.dir(edit);
      edit.addEventListener('click', e => {
            console.log(e.target.parentElement);
            let toggle =e.target.parentElement.previousElementSibling.classList.toggle("active");
            toggle? e.target.parentElement.previousElementSibling.removeAttribute("disabled")
                  : e.target.parentElement.previousElementSibling.setAttribute("disabled", true);
             toggle
              ? (edit.innerHTML = `<i class="fa-solid fa-check"></i>`)
              : (edit.innerHTML =`<i class="fa-solid fa-pen"></i>`);
      })
});

btn2.forEach(v => {
      console.log(v);
      v.addEventListener('click', e => {
                       e.target.parentElement.parentElement.parentElement.remove();
      })   
})

btn1.forEach(v => {
      console.log(v);
      v.addEventListener("click", e => {
        let toggle =
          e.target.parentElement.previousElementSibling.classList.toggle(
            "active"
          );
        toggle
          ? e.target.parentElement.previousElementSibling.removeAttribute(
              "disabled"
            )
          : e.target.parentElement.previousElementSibling.setAttribute(
              "disabled",
              true
            );
        toggle
          ? (btn1.innerHTML = `<i class="fa-duotone fa-check"></i>`)
          : (btn1.innerHTML = `<i class="fa-solid fa-pen"></i>`);
      });
})