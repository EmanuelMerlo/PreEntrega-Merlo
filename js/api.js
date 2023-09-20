const urlUsers = "https://jsonplaceholder.typicode.com/users"

const comments = document.querySelector("#comments")
const listComments = document.querySelector("#listComments")


    fetch(urlUsers)
    .then((res) => res.json())
    .then((data) => {
        data.forEach((nombre, index) => {
            setTimeout(() => {
                const li = document.createElement("li");
                li.innerHTML = `<h4>Clientes que nos recomiendan: ${nombre.name}</h4>`;
                comments.appendChild(li);
            }, index * 5000);
        });
    });