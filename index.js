const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
document.getElementsByClassName("btn")[0].addEventListener("click",()=>{
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li"); //create html element called li and store in li element
        li.innerText = inputBox.value;
        listcontainer.appendChild(li); //create under listcontainer as a child;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
});
listcontainer.addEventListener("click",(e)=>{
    if(e.target.nodeName === "LI"){ // value ke ot sov cbas
        e.target.classList.toggle("checked");
        console.log(e);
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        console.log(e);
    }
})

