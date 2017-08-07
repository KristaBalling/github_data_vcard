let name = document.getElementById("name");
let biog = document.querySelector(".biog");
let parag = document.getElementById("parag");
let avatar = document.getElementById("avatar");

function bio() {
let data = JSON.parse(this.responseText);
console.log(data);
name.textContent = data.name;
biog.innerHTML = `<li>${data.name}</li>
                    <li>${data.html_url}</li>
                    <li>${data.email}</li>
                    <li>${data.company}</li>
                    <li>${data.blog}</li> `;
parag.textContent = data.bio;
avatar.src = data.avatar_url;


}
// let characters = document.querySelector("bio")
//   bio.innerHTML+= `<li>
//   ${data.results.name}
//   </li>`
// let theBasics = document.getElementById("the_basics");
// let list = document.createElement("li");
// li.appendChild("li")
// let paragraph1 = element.textContent("p_basics");
// p_basics.appendChild("li")




let req = new XMLHttpRequest();
req.open("GET", "http://192.168.1.12:8000/octocat");
req.addEventListener("load", bio);
req.send();
