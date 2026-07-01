function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let place = document.getElementById("place").value.trim();

    let allowedPlaces = ["manali", "goa", "jaipur"];

    if (name === "" || email === "" || place === "") {
        alert("Please fill all details");
        return false;
    }

    if (!allowedPlaces.includes(place.toLowerCase())) {
        alert("Sorry! We currently offer tours only for Manali, Goa and Jaipur.");
        return false;
    }

    alert("Booking Successful!");
    return true;
}