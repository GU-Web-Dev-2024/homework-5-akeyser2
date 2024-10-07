// List of additional artworks to add dynamically
const newArtworks = [
    { title: 'Target Successfully Bombed', artist: 'Kristoffer Zetterstrand', img: 'res/img4.webp' },
    { title: 'Kbab med tre pepperoni', artist: 'Kristoffer Zetterstrand', img: 'res/img5.webp' },
    { title: 'Paradistrad', artist: 'Kristoffer Zetterstrand', img: 'res/img6.webp' },
    { title: 'Wasteland', artist: 'Kristoffer Zetterstrand', img: 'res/img7.webp' },
    { title: 'Bust', artist: 'Kristoffer Zetterstrand', img: 'res/img8.webp' },
    { title: 'Match', artist: 'Kristoffer Zetterstrand', img: 'res/img9.webp' },
    { title: 'Skull and Roses', artist: 'Kristoffer Zetterstrand', img: 'res/img10.webp' },
    { title: 'The Stage is Set', artist: 'Kristoffer Zetterstrand', img: 'res/img11.webp' },
    { title: 'The void', artist: 'Kristoffer Zetterstrand', img: 'res/img12.webp' },
    { title: 'Wither', artist: 'Kristoffer Zetterstrand', img: 'res/img13.webp' },
    { title: 'Skull on Fire', artist: 'Kristoffer Zetterstrand', img: 'res/img14.webp' },
    { title: 'Pigscene', artist: 'Kristoffer Zetterstrand', img: 'res/img15.webp' },
    { title: 'Pointer', artist: 'Kristoffer Zetterstrand', img: 'res/img16.webp' }
];

const counterDiv = document.getElementById("counter");
const resetButton = document.getElementById("reset-button");
const newArtButton = document.getElementById("add-art-button")
const container = document.getElementsByClassName("art-grid")[0]
var panels = document.getElementsByClassName("art-panel");
var selected = null;
var viewed = [];

function updateCounter() {
    counterDiv.innerText = `Artworks Viewed: ${viewed.length}`;
}

resetButton.onclick = function() {
    viewed = [];
    updateCounter();
    panels = document.getElementsByClassName("art-panel");
    for(let i = 0; i < panels.length; i++) {
        panels[i].style.background = "#eee"
    }
}

for(let i = 0; i < panels.length; i++) {
    panels[i].onclick = function() {
        // if(selected != null) {
        //     panels[selected].style.background = "#eee"
        // }
        // if(selected != i) {
        //     panels[i].style.background = "orange"
        //     selected = i
        // }
        panels[i].style.background = "orange"
        if (!viewed.includes(i)) {
            viewed.push(i);
            updateCounter();
        }
    }
}

newArtButton.onclick = function() {
    var newIndex = Math.floor(Math.random() * newArtworks.length);
    const artwork = newArtworks[newIndex];
    const artDiv = document.createElement('div');
    artDiv.className = 'art-panel';
    artDiv.innerHTML = `
        <img src="${artwork.img}" alt="${artwork.title}">
        <p>${artwork.title} by ${artwork.artist}</p>
    `;
    artDiv.onclick = function() {
        artDiv.style.background = "orange"
        if (!viewed.includes(artDiv)) {
            viewed.push(artDiv);
            updateCounter();
        }
    }
    container.appendChild(artDiv);
}