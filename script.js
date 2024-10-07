// List of additional artworks to add dynamically
const newArtworks = [
    { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
    { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
    { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
    { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
    { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
    { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
    { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
];

var panels = document.getElementsByClassName("art-panel")
var selected = null
var viewed = []
const counterDiv = document.getElementById("counter");

function updateCounter() {
    counterDiv.innerText = `Artworks Viewed: ${viewed.length}`;
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
            updateCounter()
        }
    }
}
