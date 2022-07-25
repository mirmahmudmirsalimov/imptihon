let elList = document.querySelector(".list");
let elBtn1 = document.querySelector(".btn__1");
let elBtn2 = document.querySelector(".btn__2");
let elBtn3 = document.querySelector(".btn__3");
let elBtnClean = document.querySelector(".btn__clean");
let elResult = document.querySelector(".result");
let elImg = document.querySelector(".pokemon__img");
let elImgMovi = document.querySelector(".movi__img");


let pokemonArray = pokemons;
let moviesArray = movies.slice(0, 151);

elBtn1.addEventListener("click", function () {
    elList.innerHTML = null
    render(pokemonArray)
})

elBtn2.addEventListener("click", function () {
    elList.innerHTML = null
    render(moviesArray)
})

elBtn3.addEventListener("click", function () {
    elList.innerHTML = null
    const count = Number(prompt("nimadir:"))
    function random(arr1,arr2){
        return[
            ...arr1.slice(0,Math.trunc(count/2)),
            ...arr2.slice(0,Math.trunc(count/2))
        ]
    }
    renderMY(random(pokemonArray,moviesArray))
})

elBtnClean.addEventListener("click", function () {
    elList.innerHTML = null
    elList.innerHTML = `<li class="list__item d-none"><h4 class="h4 font-monospace">Logo</h4></li>`
    elResult.textContent = "Cleaned"
})

function render(array) {
    array = array.slice(0, prompt("soni kiriting"));
    for (const item of array) {
        let newLi = document.createElement("li");
        newLi.classList = "list__item"

        let newImg = document.createElement("img");
        let newH3 = document.createElement("h3");
        let newtitle = document.createElement("h4");
        let newSt = document.createElement("p");
        let newStt = document.createElement("p");
        let newTrailerButton = document.createElement("a");

        newSt.textContent = item.height
        newtitle.textContent = item.candy
        newStt.textContent = item.weight
        newImg.width = "200"

        newH3.classList = "item_title"
        newtitle.classList = "item_title"
        newStt.classList = "item_title"
        newSt.classList = "item_title"
        
        
        if (item.name) {
            newImg.src = item.img;
            newH3.textContent = item.name;
        } else {
            newTrailerButton.classList = "btn btn__4 btn-outline-secondary"
            newTrailerButton.textContent = "Watch Trailer"
            newH3.textContent = item.Title;
            newSt.textContent = item.imdb_rating;
            newImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`;
            newImg.width = "212"
            newImg.height = "165"
            newTrailerButton.href = `https://www.youtube.com/watch?v=${item.ytid}`;

            newStt.textContent = item.movie_year;
            newtitle.textContent = item.Categories;
        }




        newLi.appendChild(newImg);
        newLi.appendChild(newH3);
        newLi.appendChild(newtitle);
        newLi.appendChild(newSt);
        newLi.appendChild(newStt);
        elList.appendChild(newLi);
        newLi.appendChild(newTrailerButton);
    }
}


//-------------------------
function renderMY(array) {
    for (const item of array) {
        let newLi = document.createElement("li");
        newLi.classList = "list__item"

        let newImg = document.createElement("img");
        let newH3 = document.createElement("h3");
        let newtitle = document.createElement("h4");
        let newSt = document.createElement("p");
        let newStt = document.createElement("p");
        let newTrailerButton = document.createElement("a");

        newSt.textContent = item.height
        newtitle.textContent = item.candy
        newStt.textContent = item.weight
        newImg.width = "200"

        newH3.classList = "item_title"
        newtitle.classList = "item_title"
        newStt.classList = "item_title"
        newSt.classList = "item_title"
        
        
        if (item.name) {
            newImg.src = item.img;
            newH3.textContent = item.name;
        } else {
            newTrailerButton.classList = "btn btn__4 btn-outline-secondary"
            newTrailerButton.textContent = "Watch Trailer"
            newH3.textContent = item.Title;
            newSt.textContent = item.imdb_rating;
            newImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`;
            newImg.width = "212"
            newImg.height = "165"
            newTrailerButton.href = `https://www.youtube.com/watch?v=${item.ytid}`;

            newStt.textContent = item.movie_year;
            newtitle.textContent = item.Categories;
        }




        newLi.appendChild(newImg);
        newLi.appendChild(newH3);
        newLi.appendChild(newtitle);
        newLi.appendChild(newSt);
        newLi.appendChild(newStt);
        elList.appendChild(newLi);
        newLi.appendChild(newTrailerButton);
    }
}



elBtn1.addEventListener("click", function () {
    elImg.setAttribute("style", "display:block")
    elImgMovi.setAttribute("style", "display:none")

})

elBtn2.addEventListener("click", function () {
    elImgMovi.setAttribute("style", "display:block")
    elImg.setAttribute("style", "display:none")
})

elBtn3.addEventListener("click", function () {
    elImgMovi.setAttribute("style", "display:block")
    elImg.setAttribute("style", "display:block")
})

elBtnClean.addEventListener("click", function () {
    elImgMovi.setAttribute("style", "display:none")
    elImg.setAttribute("style", "display:none")
})