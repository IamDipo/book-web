document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const cardNumber = document.getElementById("card-number").value;
    const expiry = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value;
    
    if (!/^5[1-5]\d{14}$/.test(cardNumber)) {
        alert("Invalid MasterCard number");
        return;
    }
    if (!/^\d{3,4}$/.test(cvv)) {
        alert("Invalid CVV");
        return;
    }
    
    
    localStorage.setItem("lastFour", cardNumber.slice(-4));

    window.open("alert.html", "_blank");
});