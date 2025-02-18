const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ''){
        alert("Please enter a task!");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
         li.appendChild(span);
    }

    inputBox.value = "";
    saveDate();
}


listContainer.addEventListener("click" , function(e) {
     if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDate();
     }
     else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDate();
     }
},false);


// TO HAVE DATA EVEN AFTER REFRESH
function saveDate(){
    localStorage.setItem("data" , listContainer.innerHTML);
      
}

// to have data even after closing website

function showTask(){
    listContainer.innerHTML =  localStorage.getItem("data");
}

showTask();



