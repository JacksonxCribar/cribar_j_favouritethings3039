import { getData } from "./components/TheDataMiner.js";
    
(() => {
    const   theTeam = document.querySelector("#btnGroup"),
            theTemplate = document.querySelector("#Art").content;

    function buildTeam(info) {
        info.forEach(person => {
            let panel = theTemplate.cloneNode(true),
                memberInfo = panel.firstElementChild.children;

            
            panel.firstElementChild.dataset.key = person.id;

            memberInfo[0].querySelector('img').src = `images/${person.biopic}`;
            memberInfo[1].textContent = person.name;
            memberInfo[2].textContent = person.role;
            memberInfo[3].textContent = person.nickname;

            
            theTeam.appendChild(panel);
        })
    }

    function getMoreData(event) {
        if (event.target.closest("section").dataset.key) {
            let key = event.target.closest("section").dataset.key;

           

            getData({id: key},  showPortfolioData);
        }
    }

    function showPortfolioData(data) {
        
        console.log(data);
    }

    
    theTeam.addEventListener("click", getMoreData);

    
    getData(null, buildTeam);
})()