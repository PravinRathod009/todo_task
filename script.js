const inputBox =document.getElementById('input-box');
const listconst =document.getElementById('list-container');

function addTask()
{
     if(inputBox.value === '')
     {
        alert('you must write something!');
     }
     else
     {
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listconst.appendChild(li);

        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
     }
     inputBox.value ="";
     savaData();
}


listconst.addEventListener("click",function(e)
 {
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");  // checked event.
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
    }
 },false);

 function savaData()
 {
     localStorage.setItem("data", listconst.innerHTML);
 }

 function ShowTask()
 {
     listconst.innerHTML=localStorage.getItem("data");
       // so it will give all the content stored in the borwser in data in browser with the name of data .
 }
 ShowTask()


