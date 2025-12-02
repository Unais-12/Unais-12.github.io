const receiptDiv = document.getElementById("receipt");
if(receiptDiv){
    const data = JSON.parse(localStorage.getItem("bookingData"));
    
    // Define the Service Fee 
    const SERVICE_FEE = 100;

    // Helper function to format currency
    const formatCurrency = (amount) => {
        // Ensure the input is a number before formatting
        if (typeof amount === 'string') {
            // Attempt to parse the number, handling potential commas if present, though data storage should ideally be clean numbers.
            amount = parseInt(amount.replace(/[^0-9\.]/g, '')) || 0; 
        }
        return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 0 })}`;
    };
    
    if(data){
        // 1. Core Data Retrieval
        const guestsCount = parseInt(data.guests);
        // Assuming data.price stores the SUBTOTAL (Price of guests alone)
        const subtotal = parseInt(data.price); 
        
       
        const pricePerGuest = subtotal / guestsCount;
        const finalTotal = subtotal + SERVICE_FEE;
        
        
        document.getElementById("rName").textContent = data.name;
        document.getElementById("rEmail").textContent = data.email;
        document.getElementById("rDate").textContent = data.date;

        document.getElementById("rDestination").textContent = data.destination;
        document.getElementById("rPricePerGuest").textContent = formatCurrency(pricePerGuest); 
        document.getElementById("rGuests").textContent = guestsCount; 
        document.getElementById("rPrice").textContent = formatCurrency(subtotal); // Amount (Subtotal)
        
       
        document.getElementById("rServicePrice").textContent = formatCurrency(SERVICE_FEE);
        
        // --- Update Summary Footer (Subtotal and Final Total) ---
        document.getElementById("rSubtotal").textContent = formatCurrency(subtotal);
        document.getElementById("rFee").textContent = formatCurrency(SERVICE_FEE);
        document.getElementById("rTotal").textContent = formatCurrency(finalTotal);

    } else {
        receiptDiv.innerHTML = "<p>No booking data found. Please book a trip first.</p>";
    }
}
