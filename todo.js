const form=document.getElementById("to-do");
const list=document.getElementById("list");
const input=document.getElementById("do-form");

form.addEventListener("submit",function(e){
    e.preventDefault();

    const tasktext=input.value.trim();
    if(tasktext==""){
        return;
    }
    const li=document.createElement("li");
    li.innerHTML = `
    <div>
    <span>${tasktext}</span>
    <button class="delete-btn">🗑️</button>
  `;
  li.addEventListener("click",function(){
    li.classList.toggle("completed");
  });
  li.querySelector(".delete-btn").addEventListener("click",function(e){
    e.stopPropagation();
    li.remove();
  });
  list.appendChild(li);
  input.value="";
});