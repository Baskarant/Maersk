function shuffleGrid() {
    var container = document.getElementById("sf");
    var elementsArray = Array.from(container.getElementsByClassName('grid-item'));
    elementsArray.forEach(function (element) {
        container.removeChild(element);
    })
    shuffleArray(elementsArray);
    elementsArray.forEach(function (element) {
        container.appendChild(element);
    })
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
function sortGrid() {
    var container = document.getElementById("sf");
    var elementsArray = Array.from(container.getElementsByClassName('grid-item'));
    elementsArray.sort(function (a, b) {
        return a.textContent - b.textContent;
    });
    elementsArray.forEach(function (element) {
        container.appendChild(element);
    })
}