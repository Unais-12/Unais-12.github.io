const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const destination = document.getElementById("destination").value;
    const guests = document.getElementById("guests").value;
    const date = document.getElementById("date").value;

 
    if (!name || !email || !destination || !date) {
        alert("Please fill in all required fields.");
        return;
    }

    const price = guests *150 ; 

   
    localStorage.setItem("bookingData", JSON.stringify({
        name, email, destination, guests, date, price
    }));

    
    window.location.href = "receipt.html"; 
});


