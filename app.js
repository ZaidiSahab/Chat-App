 

//  let getul=document.getElementById("ul")

// function foo(){

//     let inp =document.getElementById("inp").value
//  let li = document.createElement("li")
//  let litext =document.createTextNode(inp)
//  li.appendChild(litext)

//  getul.appendChild(li)

// } 



















let getul =document.getElementById("ul")


function foo(){

let inp =document.getElementById("inp")

let li =document.createElement("li")
let litext =document.createTextNode(inp.value)
li.appendChild(litext)

getul.appendChild(li) 

inp.value=" "

}


function deleteAll(){

    getul.remove()

}