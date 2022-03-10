// Cat Generator

async function generateCats() {

    var imageSrc; 
    var image = document.createElement('img');

    await fetch('https://api.thecatapi.com/v1/images/search?mime_types=gif')
    .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
    .then(data => {
        imageSrc = data['0']['url'];
        image.src = imageSrc;
    });
   
    image.alt = "Image not found";
    image.style.maxWidth = "100%";
    image.style.height = "auto";
    image.style.alignSelf = "flex-start";
    var div = document.getElementById('flexbox-img-container');
    div.appendChild(image);
    
}

