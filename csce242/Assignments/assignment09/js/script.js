class Pizza{
    constructor(title, image, toppings, size, crust){
        this.title = title;
        this.image = image;
        this.toppings = toppings;
        this.size = size;
        this.crust = crust;
    }

    get pizzaImage(){
        const card = document.createElement("div");
        card.classList.add("card");
        const image = document.createElement("img");
        image.src = `images/${this.image}`;
        const title = document.createElement("h3");
        title.textContent = this.title;
        card.appendChild(image);
        card.appendChild(title);
        card.addEventListener("click",()=>{
            this.showModal(this)
        });
        return card;
    }

    showModal(){
        const pizzaModal = document.getElementById("pizza-modal");
        const modalContent = document.getElementById("modal-content");
        modalContent.innerHTML = "";
        const modalContainer = document.createElement("div");
        modalContainer.classList.add("modal-container");
        const modalImg = document.createElement("img");
        modalImg.src = `images/${this.image}`;
        const modalContentDetails = document.createElement("div");
        modalContentDetails.classList.add("modal-content-details");
        const title = document.createElement("h3");
        title.textContent = this.title;
        const toppings = document.createElement("p");
        toppings.textContent = `Toppings: ${this.toppings}`;
        const crust = document.createElement("p");
        crust.textContent = `Crust type: ${this.crust}`;
        const size = document.createElement("p");
        size.textContent = `Size: ${this.size}`;

        modalContent.appendChild(modalContainer);
        modalContainer.appendChild(modalImg);
        modalContainer.appendChild(modalContentDetails);
        modalContentDetails.appendChild(title);
        modalContentDetails.appendChild(toppings);
        modalContentDetails.appendChild(crust);
        modalContentDetails.appendChild(size);
        pizzaModal.appendChild(modalContent);

        pizzaModal.classList.remove("hidden");
    }
}


const pizzas = [];
pizzas.push(new Pizza("Pepperoni","Pepp.jpg","pepperoni","L","thin crust"));
pizzas.push(new Pizza("Cheese","Cheese.webp","cheese","M","cheese crust"));
pizzas.push(new Pizza("BBQ","bbq.jpg","bell peppers","L","normal crust"));
pizzas.push(new Pizza("Veggie","veggie.jpg","olives","S","whole wheat"));

pizzas.forEach((pizza)=>{
    document.getElementById("gallery").appendChild(pizza.pizzaImage);
})


document.getElementById("close").onclick = () => {
    document.getElementById("pizza-modal").classList.add("hidden");
}