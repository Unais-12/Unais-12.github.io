const receiptDiv = document.getElementById("receipt");
if(receiptDiv){
    const data = JSON.parse(localStorage.getItem("bookingData"));
    if(data){
        document.getElementById("rName").textContent = data.name;
        document.getElementById("rEmail").textContent = data.email;
        document.getElementById("rDestination").textContent = data.destination;
        document.getElementById("rGuests").textContent = data.guests;
        document.getElementById("rDate").textContent = data.date;
        document.getElementById("rPrice").textContent = `$${data.price}`;
        document.getElementById("rTotal").textContent = `$${(parseInt(data.price) + 100).toLocaleString()}`
    } else {
        receiptDiv.innerHTML = "<p>No booking data found. Please book a trip first.</p>";
    }
}
