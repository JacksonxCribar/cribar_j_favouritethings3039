import { getData } from "./components/TheDataMiner.js";

(() => {
    document.jsonData = null;

    const
        buttonGroupElm = document.querySelector("#btnGroup"),
        thingElm = document.querySelector("#favoriteThing"),
        titleElm = document.querySelector("#favoriteThing .title"),
        descriptionElm = document.querySelector("#favoriteThing .description"),
        imageElm = document.querySelector("#favoriteThing .image");

    function setFavoriteThing(event) {
        if (
            document.jsonData
            && event.target.dataset.thing
            && document.jsonData[event.target.dataset.thing]
        ) {
            const
                thing = event.target.dataset.thing,
                data = document.jsonData[thing];

            thingElm.className = thing;
            titleElm.innerHTML = data.title;
            descriptionElm.innerHTML = data.description;
            imageElm.src = `images/${data.image}`;
        }
    }

    buttonGroupElm.addEventListener("click", setFavoriteThing);

    getData("data.json", buttonGroupElm.children[0]);
})()