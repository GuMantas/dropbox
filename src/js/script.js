"use strict";



const dataInfo = [
    {
    link: "/img/img-1.png",
    name: "Sad Clown.png",
    size: 3
    },
    {
      link: "/img/img-2.png",
      name: "Waiting for the train.png",
      size: 1.5  
    },

    {
        link:"/img/img-3.png",
        name: "Little friends.jpg",
        size: 1.5
    },

    {
        link:"/img/img-4.png",
        name: "What A Wonderful.jpg",
        size: 4.5
    },

    {
        link:"/img/img-5.png",
        name: "Gymnast.jpg",
        size: 2
    },

    {
        link:"/img/img-raw-1.png",
        name: "Blue Dandelion Drops.jpg",
        size: 3
    },

    {
        link:"/img/img-raw-2.png",
        name: "Poppy for Mom.png",
        size: 1.5
    },

    {
        link:"/img/img-raw-3.png",
        name: "Drop some Droplets.png",
        size: 1.5
    },

    {
        link:"/img/img-raw-4.png",
        name: "Daisy.png",
        size: 4.5
    },

    {
        link:"/img/img-raw-5.png",
        name: "Sunshine.png",
        size: 2
    },

    {
        link:"/img/img-raw2-1.png",
        name: "Blue Dandelion Drops.jpg",
        size: 3
    },

    {
        link:"/img/img-raw2-2.png",
        name: "Poppy for Mom.png",
        size: 1.5
    },

    {
        link:"/img/img-raw2-3.png",
        name: "Drop some Droplets.png",
        size: 1.5
    },

    {
        link:"/img/img-raw2-4.png",
        name: "Daisy.png",
        size: 4.5
    },

    {
        link:"/img/img-raw2-5.png",
        name: "Sunshine.png",
        size: 2
    },
];




 function getImage (){
    let containerImage = document.querySelector(".image")
      let content = "";
  
        for (let i = 0; i < dataInfo.length; i++){
        content += `<img src='${dataInfo[i].link}' alt='' />
        <p>${dataInfo[i].name}</p>
       <p>${dataInfo[i].size}MB</p>`;
        containerImage.innerHTML = content;
          console.log(content);
        }
    }
    
getImage();