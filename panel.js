const container=document.getElementById("requests")

const requests=JSON.parse(localStorage.getItem("nucleo_requests"))||[]

requests.forEach(req=>{

const div=document.createElement("div")

div.classList.add("timeline-item")

div.innerHTML=`

<strong>${req.name}</strong>

<p>${req.email}</p>

<p>${req.message}</p>

<small>${req.date}</small>

`

container.appendChild(div)

})
