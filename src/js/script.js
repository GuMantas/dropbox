"use strict"
let images = [];
var upload = document.getElementById("uploadBtn");
let selectedItems = [];

upload.onchange = function (e) {
    for (let i = 0; i < document.getElementById("uploadBtn")?.files.length; i++) {
        const element = document.getElementById("uploadBtn")?.files[i];
    images.push({
        name: element.name,
        size: element.size,
        date: element.lastModifiedDate,
        path: URL.createObjectURL(element),
    });
}
render(images)
};

const render = (arr) => {
    document.getElementById("content").innerHTML = "";
    arr?.forEach((element, index) => {
        const imageItem = document.createElement("div");
        const image = document.createElement("div");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");
        const selectedDiv = document.createElement("div");
        h2.textContent = element.name;
        h3.textContent = `${convertBytes(element.size)} Mb`;
        // h4.textContent = element.date;
       

        imageItem.className = "uploaded";
        image.className = "uploaded-img";
        image.setAttribute("style", `background-image: url(${element.path})`);
        imageItem.appendChild(image);
        imageItem.appendChild(h2);
        imageItem.appendChild(h3);
        imageItem.appendChild(h4);
        imageItem.setAttribute('id', index);
        selectedDiv.setAttribute('class', 'selected');
        imageItem.appendChild(selectedDiv);
        document.getElementById("content").appendChild(imageItem);

        imageItem.addEventListener('click', function() {
            this.classList.toggle('active');
            if (selectedItems.includes(this.id)) {
                const indexOf = selectedItems.indexOf(this.id);
                selectedItems.splice(indexOf, 1);
            }else {
                selectedItems.push(this.id);
            }
        });
    });
    storage(arr);
}
render(images);

function convertBytes(bytes) {
return (bytes / 1048576).toFixed(2);
}

function storage(arr) {
    let storageBytes = 0;
    for(let item of arr) {
        storageBytes += item.size;
    }
const storageMb = convertBytes(storageBytes);
document.getElementById('capacityValue').textContent = `${storageMb} MB / 100 MB`;
document.getElementById('capacity').value = storageMb;
}

document.getElementById('delete').addEventListener('click', function(){
    images = images.filter((item,index) => !selectedItems.includes(index.toString()));
    console.log(selectedItems, images);
    selectedItems= [];
    render(images)
});