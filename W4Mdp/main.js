let name = document.getElementById("name");
let biog = document.querySelector(".biog");
let parag = document.getElementById("parag");
let avatar = document.getElementById("avatar");

function bio() {
let data = JSON.parse(this.responseText);
console.log(data);
name.textContent = data.name;
biog.innerHTML = `<li><h4>Name: <span class="text">${data.name}</span></h4></li>
                    <li><h4>Github Url: <span class="text">${data.html_url}</span></h4></li>
                    <li><h4>Email: <span class="text">${data.email}</span></h4></li>
                    <li><h4>Company: <span class="text">${data.company}</span></h4></li>
                    <li><h4>Website: <span class="text">${data.blog}</span></h4></li> `;
parag.textContent = data.bio;
avatar.src = data.avatar_url;
}


let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/KristaLee16");
req.addEventListener("load", bio);
req.send();
