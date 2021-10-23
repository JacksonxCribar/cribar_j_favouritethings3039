function getData(dataUrl, activeBtn) {
    fetch(dataUrl)
        .then(response => response.json())
        .then(data => {
            document.jsonData = data;
            activeBtn.click();
        })
        .catch(error => console.error(error));
}

export {getData}