const form = document.getElementById('contact-form');
const resultDiv = document.getElementById('result');

form.onsubmit = async(event) => {
    event.preventDefault();     //don't go the action (another page)
    
    //collect all the name value pairs from the form
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    console.log(object, "object")

    resultDiv.classList.remove("hidden");
    resultDiv.innerHTML = "Please wait..."

    const url = "https://api.web3forms.com/submit";

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        });
        
        const result = await response.json();

        if (response.status == 200) {
            resultDiv.innerHTML = "Thank you for your message.";
        } else {
            console.log(response);
            resultDiv.innerHTML = "Sorry, we can't send your email";
        }

    }catch(error){
        console.log(error);
        resultDiv.innerHTML = "Email not successfully sent";
    }
    
    //reset form after 3 seconds and clear the div
    setTimeout(() => {
        form.reset();
        resultDiv.classList.add("hidden");
    }, 3000);
};