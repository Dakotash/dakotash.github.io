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

// Amenity data information for when y0u press on the amenities
const amenityDetails = {
    "Free Weights & Dumbbells": {
        title: "Free Weights & Dumbbells",
        description: "Our comprehensive free weight section features a complete range of dumbbells from 5lbs to 120lbs, Olympic barbells, and specialty bars including EZ-curl and trap bars. Perfect for building functional strength and muscle mass.",
        features: ["Dumbbells: 5-120 lbs", "Olympic barbells", "EZ-curl bars", "Trap bars", "Adjustable benches", "Power racks"]
    },
    "Cardio Equipment": {
        title: "Cardio Equipment",
        description: "State-of-the-art cardio machines designed to maximize your cardiovascular fitness. Each machine features built-in entertainment systems and heart rate monitoring for an optimal workout experience.",
        features: ["Treadmills with incline", "Elliptical trainers", "Stationary bikes", "Rowing machines", "StairMasters", "Heart rate monitoring"]
    },
    "Resistance Machines": {
        title: "Resistance Machines",
        description: "Professional-grade resistance machines targeting every muscle group. Our machines are designed for safety and effectiveness, perfect for both beginners and advanced users.",
        features: ["Leg press machines", "Cable systems", "Lat pulldown", "Chest press", "Leg curl/extension", "Functional trainers"]
    },
    "Outdoor Training Area": {
        title: "Outdoor Training Area",
        description: "Take your workout outside! Our outdoor training area features functional fitness equipment and plenty of space for bodyweight exercises, boot camps, and fresh air workouts.",
        features: ["Functional fitness equipment", "Pull-up stations", "Battle ropes", "Tire flipping area", "Sprint track", "Outdoor weights"]
    },
    "Pool": {
        title: "Swimming Pool",
        description: "Our heated indoor pool is perfect for lap swimming, water aerobics, and low-impact exercise. The pool is maintained at optimal temperature year-round for your comfort.",
        features: ["25-meter lap pool", "Heated year-round", "Lane swimming", "Water aerobics classes", "Shallow and deep ends", "Pool-side seating"]
    },
    "Locker Rooms & Showers": {
        title: "Locker Rooms & Showers",
        description: "Clean, spacious locker rooms with individual shower stalls, lockers, and changing areas. We maintain the highest standards of cleanliness and provide towel service.",
        features: ["Individual shower stalls", "Day-use lockers", "Changing areas", "Hair dryers", "Towel service", "24/7 cleaning"]
    },
    "Group classes": {
        title: "Group Fitness Classes",
        description: "Join our energetic group fitness classes led by certified instructors. From high-intensity workouts to relaxing yoga sessions, we have something for every fitness level.",
        features: ["Yoga & Pilates", "Spin classes", "HIIT training", "Zumba", "Strength training", "Beginner-friendly options"]
    },
    "Secure Key Card Access": {
        title: "Secure Key Card Access",
        description: "Your safety and security are our top priorities. Our key card access system ensures only members can enter the facility, with 24/7 monitoring and secure entry points.",
        features: ["24/7 access", "Secure entry points", "Member-only access", "Security cameras", "Emergency systems", "Lost card replacement"]
    },
    "Climate Controlled Environment": {
        title: "Climate Controlled Environment",
        description: "Work out in comfort year-round with our advanced climate control system. We maintain optimal temperature and air quality for the best possible workout environment.",
        features: ["Optimal temperature control", "Air filtration system", "Humidity control", "Fresh air circulation", "Energy efficient", "Comfortable year-round"]
    }
};

const amenities = [
    new AmenityImage("../images/Training-area.jpg", "free weights area", "Free Weights Area"),
    new AmenityImage("../images/cardio.jpg", "cardio equipment zone", "Cardio Equipment"),
    new AmenityImage("../images/pool.webp", "Pool", "Swimming Pool"),
    new AmenityImage("../images/outdoor-training.jpg", "Outdoor Training-area", "Outdoor Training"),
    new AmenityImage("../images/lockerRoom.jpg", "locker room facilities", "Locker Rooms")
];

// Show amenity details 
function showAmenityDetailsModal(amenityName) {
    const modal = document.getElementById("amenity-modal");
    const modalContent = document.getElementById("modal-content");
    
    const amenity = amenityDetails[amenityName];
    if (!amenity) return;
    
    modalContent.innerHTML = `
        <div class="amenity-details-container">
            <h2 class="amenity-details-title">
                ${amenity.title}
            </h2>
            <p class="amenity-details-description">
                ${amenity.description}
            </p>
            <h3 class="amenity-features-heading">
                Features & Benefits:
            </h3>
            <ul class="amenity-features-list">
                ${amenity.features.map(feature => `
                    <li class="amenity-feature-item">
                        <svg class="amenity-feature-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span class="amenity-feature-text">${feature}</span>
                    </li>
                `).join('')}
            </ul>
            <div class="amenity-details-actions">
                <button class="amenity-close-btn" onclick="document.getElementById('amenity-modal').classList.add('hidden')">
                    Close
                </button>
            </div>
        </div>
    `;
    
    modal.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("amenities-gallery-grid");
    

    gallery.innerHTML = "";
    
  
    amenities.forEach((amenity) => {
        gallery.appendChild(amenity.amenityCard);
    });
    
 
    const amenityListItems = document.querySelectorAll('#amenities ul li');
    amenityListItems.forEach(item => {
        item.classList.add('amenity-list-item-clickable');
        
        item.addEventListener('click', () => {
            const strongElement = item.querySelector('strong');
            if (strongElement) {
                const amenityName = strongElement.textContent.trim();
                showAmenityDetailsModal(amenityName);
            }
        });
    });
    

    document.getElementById("close-modal").onclick = () => {
        document.getElementById("amenity-modal").classList.add("hidden");
    };
    

    document.getElementById("amenity-modal").onclick = (e) => {
        if (e.target.id === "amenity-modal") {
            document.getElementById("amenity-modal").classList.add("hidden");
        }
    };
    
   
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById("amenity-modal").classList.add("hidden");
        }
    });
});