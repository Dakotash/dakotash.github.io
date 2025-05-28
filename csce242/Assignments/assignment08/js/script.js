document.addEventListener("DOMContentLoaded",function(){
    const images = [
        {title:"Birthday",src:"images/birthday.jpg"},
        {title:"Clown",src:"images/clown.jpg"},
        {title:"Rain",src:"images/rain.jpg"},
        {title:"Read",src:"images/read.jpg"},
        {title:"Shovel",src:"images/shovel.jpg"},
        {title:"Work",src:"images/work.jpg"},
    ]
    const gallery = document.getElementById("gallery");
    const galleryItems = document.querySelector(".gallery-items");
    const popUp = document.getElementById("popup");
    const closeIcon = document.getElementById("close");
    const popUpContent = document.querySelector(".popup-content");


    for (let i =0; i < images.length; i++){
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item")
        const img = document.createElement("img");
        img.src = images[i].src;
        img.alt = images[i].title;
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        overlay.textContent = images[i].title;
        galleryItem.appendChild(img);
        galleryItem.appendChild(overlay);
        galleryItems.appendChild(galleryItem);



        galleryItem.addEventListener("click",()=>{
            popUp.classList.remove("hidden");
            popUpContent.innerHTML = "";
            const title = document.createElement("h2");
            title.textContent = images[i].title;
            const image = document.createElement("img");
            image.src = images[i].src;
            image.alt = images[i].title;
            popUpContent.appendChild(title);
            popUpContent.appendChild(image);
        })
    }
    const caption = document.createElement("p");
    caption.innerHTML=` Image by <a href="https://www.freepik.com/free-vector/hand-drawn-stickman-collection_20832062.htm#query=stick%20figure%20run&position=46&from_view=search&track=ais&uuid=22e87991-ee06-4dc2-8ea3-464d535e1a63">Freepik</a>`
    gallery.appendChild(caption);

    closeIcon.addEventListener("click",()=>{
      popUp.classList.add("hidden");
    })
})