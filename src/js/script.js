    "use strict";





    const images = [];

    function getImage (arr){
    let containerImage = document.getElementById("image")
      let content = "";
  
        for (let i = 0; i < arr.length; i++){
        content += `<article class='images'>
        <div class='img col-lg-3 col-md-6' style='background-image: url(${arr[i].path})'></div>
        <p>${arr[i].name}</p>
       <p>${convertBytes(arr[i].size)} MB</p></article>`;

        }
        containerImage.innerHTML = content;
        getCapacity(arr);
    }
    
    document.getElementById("uploadBtn").addEventListener("click", function() {
       
        for(let i = 0; i < document.getElementById("file").files.length; i++) {
            const element = document.getElementById("file").files[i];
            images.push({
                name: element.name,
                size: element.size,
                path: URL.createObjectURL(element),
            });
            
        }
        
        getImage(images);
        
    });


function convertBytes(bytes) {
    return (bytes / 1048576).toFixed(2);
}


function getCapacity(arr){
    let capacityBytes = 0;
    for(let i of arr){
        capacityBytes += i.size;
    }
const capacityMb = convertBytes(capacityBytes);
document.getElementById("capacityValue").textContent = `${capacityMb} MB / 100 MB`; 
document.getElementById("capacity").value = capacityMb
}