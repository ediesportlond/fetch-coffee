const getCoffee = () => {
    fetch('https://api.sampleapis.com/coffee/hot')
    .then(response => response.json())
    .then(displayCoffees)
    .catch(console.error)
}

const displayCoffees = (coffeeList) => {
    // const main = document.getElementById("main");
    // coffeeList.map(coffee => {
    //     const node = document.createElement("p");
    //     const textnode = document.createTextNode(coffee.title);
    //     node.appendChild(textnode);
    //     main.appendChild(node);

    // })

    coffeeList.forEach(coffee => {
        const main = document.getElementById("main");
        main.innerHTML += 
        `<h2>${coffee.title}</h2>
        <img src='${coffee.image}' width="150"/>`;
        main.innerHTML += "<ul>"
        coffee.ingredients.forEach(ing => {
            main.innerHTML += `<li/>${ing}`;
        })
        main.innerHTML += `</ul>
        <p>${coffee.description}</p>`
    })
    // console.log(coffeeList)
}

getCoffee();