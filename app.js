

document.querySelector(".submit_button").addEventListener("click", makeList);

function makeList() {

const item = document.querySelector(".list");
const li = document.createElement("li");
li.addEventListener("click", 
function (){
  li.classList.toggle('completed')  
});

li.textContent = document.querySelector(".adding_item").value;
document.querySelector(".adding_item").value = ''
item.appendChild(li)
}



