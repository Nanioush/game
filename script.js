particlesJS("particles-js",{

particles:{
number:{value:60},

color:{value:"#ffd700"},

shape:{type:"circle"},

opacity:{value:0.4},

size:{value:3},

line_linked:{
enable:true,
distance:150,
color:"#ffd700",
opacity:0.2,
width:1
},

move:{
enable:true,
speed:1.2
}
}

})


const form = document.getElementById("accessForm")

form.addEventListener("submit",function(e){

e.preventDefault()

const name=document.getElementById("name").value
const email=document.getElementById("email").value
const message=document.getElementById("message").value

const request={
name,
email,
message,
date:new Date().toLocaleString()
}

let requests=JSON.parse(localStorage.getItem("nucleo_requests"))||[]

requests.push(request)

localStorage.setItem("nucleo_requests",JSON.stringify(requests))

document.getElementById("formStatus").innerText="Solicitud enviada."

form.reset()

})
