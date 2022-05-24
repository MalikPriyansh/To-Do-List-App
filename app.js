//const http = require("http");
/*const express = require("express");

const app = express();*/
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/todolistdb");

const structure = {
    name : String
};

const Item = mongoose.model("item",structure);

const gym = new Item({
    name : "Gym"
});

const eat = new Item({
    name : "Eat"
});

const sleep = new Item({
    name : "Sleep"
});

const defaultitems = [gym,eat,sleep];

Item.insertMany(defaultitems,function(err){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Successfully saved the data in the database");
    }
});


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

if(typeof document !== "undefined")
{
    let btn = document.getElementById("ul");
    btn.addEventListener("click",function(e){
        let master = document.getElementById("ul");
        let li = e.target.parentNode;
        master.removeChild(li);
    });
}

/*app.listen(3000,function(){
    console.log("Server has been started");
});*/


