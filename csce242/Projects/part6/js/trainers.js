const getTrainers = async() => {
    const url = "dakotash.github.io/csce242/Projects/part6/json/trainers.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log(error);
    }
};

const showTrainers = async() => {
    const trainers = await getTrainers();
    const trainersDiv = document.getElementById("trainers-content");

    trainers.forEach((trainer) => {
        const trainerSection = document.createElement("section");
        trainersDiv.append(trainerSection);

       
        const contentDiv = document.createElement("div");
        
        
        const h3 = document.createElement("h3");
        h3.innerHTML = trainer.name;
        contentDiv.append(h3);

        
        const priceP = document.createElement("p");
        priceP.innerHTML = trainer.price;
        contentDiv.append(priceP);

        
        const descP = document.createElement("p");
        descP.innerHTML = trainer.description;
        contentDiv.append(descP);

        
        const img = document.createElement("img");
        img.src = trainer.img_name;
        img.alt = trainer.name;
        
        trainerSection.append(contentDiv);
        trainerSection.append(img);
    });
};

showTrainers();