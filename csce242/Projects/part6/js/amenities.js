class AmenityImage {
    constructor(imageSrc, altText, title) {
        this.imageSrc = imageSrc;
        this.altText = altText;
        this.title = title;
    }

    get amenityCard() {
        const card = document.createElement("div");
        card.classList.add("gallery-item");
        
        const image = document.createElement("img");
        image.src = this.imageSrc;
        image.alt = this.altText;
        
        const title = document.createElement("h3");
        title.textContent = this.title;
        title.classList.add("image-overlay-title");
        
        card.appendChild(image);
        card.appendChild(title);
        
        card.addEventListener("click", () => {
            this.showModal();
        });
        
        return card;
    }

    showModal() {
        const modal = document.getElementById("amenity-modal");
        const modalContent = document.getElementById("modal-content");
        
        modalContent.innerHTML = "";
        
        const modalImg = document.createElement("img");
        modalImg.src = this.imageSrc;
        modalImg.alt = this.altText;
        modalImg.style.width = "100%";
        modalImg.style.height = "auto";
        modalImg.style.maxHeight = "80vh";
        modalImg.style.objectFit = "contain";
        
        modalContent.appendChild(modalImg);
        modal.classList.remove("hidden");
    }
}


const amenities = [
    new AmenityImage("../images/Training-area.jpg", "free weights area", "Free Weights Area"),
    new AmenityImage("../images/cardio.jpg", "cardio equipment zone", "Cardio Equipment"),
    new AmenityImage("../images/pool.webp", "Pool", "Swimming Pool"),
    new AmenityImage("../images/outdoor-training.jpg", "Outdoor Training-area", "Outdoor Training"),
    new AmenityImage("../images/lockerRoom.jpg", "locker room facilities", "Locker Rooms")
];


document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("amenities-gallery-grid");
    
  
    gallery.innerHTML = "";
    
 
    amenities.forEach((amenity) => {
        gallery.appendChild(amenity.amenityCard);
    });
    

    document.getElementById("close-modal").onclick = () => {
        document.getElementById("amenity-modal").classList.add("hidden");
    };
    

    document.getElementById("amenity-modal").onclick = (e) => {
        if (e.target.id === "amenity-modal") {
            document.getElementById("amenity-modal").classList.add("hidden");
        }
    };
});