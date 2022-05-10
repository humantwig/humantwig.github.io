document.querySelector('header .fa-bars').addEventListener('click', function () {
    document.querySelector('header nav').classList.toggle('open')
})

document.querySelector('header .fa-times').addEventListener('click', function () {
    document.querySelector('header nav').classList.toggle('open')
})

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });


//Cursor
const innerCursor = document.querySelector('.inner-cursor')
const outerCursor = document.querySelector('.outer-cursor')

document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

const links = Array.from(document.querySelectorAll("a"));

links.forEach((link) => {
    link.addEventListener("mouseover", () =>{
        innerCursor.classList.add("grow");
    })
    link.addEventListener("mouseleave", () =>{
        innerCursor.classList.remove("grow");
    })
})


console.log("Ooo you're a sneaky one aren't ya!!    ")