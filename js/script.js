let navBtn = document.querySelector(".prog")
let links_close = document.querySelector(".links span")
let links = document.querySelector(".links")


navBtn.onclick = function () {
    links.classList.add("open")
}

links_close.onclick = function () {
    links.classList.remove("open")
}