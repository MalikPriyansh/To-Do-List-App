function callback(){
    let element = document.getElementById("textbar").value;
    if(element=="")
    {
        alert("Enter A value");
    }
    else
    {
        element = document.createElement("li");
        let p1 = document.createElement("p");
        p1.className = "text";
        p1.innerText = document.getElementById("textbar").value;
        let cross = document.createElement("button");
        cross.innerHTML = "X";
        cross.className = "udd";
        element.appendChild(p1);
        element.appendChild(cross);
        let master = document.getElementById("ul");
        master.appendChild(element);
    }
    document.getElementById("textbar").value="";
}



let btn = document.getElementById("ul");
btn.addEventListener("click",function(e){
    let master = document.getElementById("ul");
    let li = e.target.parentNode;
    master.removeChild(li);
});


