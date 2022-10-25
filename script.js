setInterval(
    () => {
        document.getElementById('demo').innerHTML = Date();
    }
    , 1000
);

document.getElementsByTagName('button')[1]
    .addEventListener("click", () => {
        alert("Click");
    });

window.addEventListener("resize", () => {
    document.getElementsByTagName('button')[1].innerHTML = "resized";
})

window.addEventListener("keypress", (e) => {
    switch (event.key) {
        case 'v':
            document.body.style.backgroundColor = "violet";
            break;
        case 'r':
            document.body.style.backgroundColor = "red";
            break;
        case 'b':
            document.body.style.backgroundColor = "blue";
            break;
        case 'g':
            document.body.style.backgroundColor = "green";
            break;
        case 'o':
            document.body.style.backgroundColor = "orange";
            break;
        case 'p':
            document.body.style.backgroundColor = "pink";
            break;
        default:
            document.body.style.backgroundColor = "white";
            break;
    }
})