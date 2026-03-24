// function sendToWhatsApp(){
// let name=document.getElementById("name").value;
// let number=document.getElementById("number").value;
// let message=document.getElementById("message").value;

// if(!name || !number || !message){
//     alert("Fill all fields");
//     return;
// }

// let text=`New Inquiry:
// Name: ${name}
// Contact: ${number}
// Message: ${message}`;

// let url="https://wa.me/916376219433?text="+encodeURIComponent(text);
// window.open(url,"_blank");
// }

// let pickup=document.getElementById("pickup").value;
// let pickup_lat=document.getElementById("pickup_lat").value;
// let pickup_lng=document.getElementById("pickup_lng").value;

// let drop=document.getElementById("drop").value;
// let drop_lat=document.getElementById("drop_lat").value;
// let drop_lng=document.getElementById("drop_lng").value;


// let text=`New Taxi Booking:
// Name: ${name}
// Contact: ${number}
// Pickup: ${pickup}
// Pickup Coordinates: ${pickup_lat}, ${pickup_lng}
// Drop: ${drop}
// Drop Coordinates: ${drop_lat}, ${drop_lng}
// Vehicle: ${vehicle}
// Message: ${message}`;


function sendToWhatsApp() {

    let name = document.getElementById("name").value.trim();
    let number = document.getElementById("number").value.trim();
    let pickup = document.getElementById("pickup").value.trim();
    let pickup_lat = document.getElementById("pickup_lat").value;
    let pickup_lng = document.getElementById("pickup_lng").value;

    let drop = document.getElementById("drop").value.trim();
    let drop_lat = document.getElementById("drop_lat").value;
    let drop_lng = document.getElementById("drop_lng").value;

    let vehicle = document.getElementById("vehicle").value;
    let message = document.getElementById("message").value.trim();

    // Basic Validation
    if (!name || !number || !pickup || !drop || vehicle === "Select Vehicle") {
        alert("Please fill all required fields properly");
        return;
    }

    let text = `New Taxi Booking:
Name: ${name}
Contact: ${number}
Pickup: ${pickup}
Pickup Coordinates: ${pickup_lat}, ${pickup_lng}
Drop: ${drop}
Drop Coordinates: ${drop_lat}, ${drop_lng}
Vehicle: ${vehicle}
Message: ${message}`;

    let url = "https://wa.me/916376219433 ?text=" + encodeURIComponent(text);

    window.open(url, "_blank");
}

function bookCab() {

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let pickup = document.getElementById("pickup").value;
let drop = document.getElementById("drop").value;
let date = document.getElementById("date").value;
let car = document.getElementById("car").value;

let message = `Cab Booking Request
Name: ${name}
Phone: ${phone}
Pickup: ${pickup}
Drop: ${drop}
Date: ${date}
Car: ${car}`;

let whatsapp = `https://wa.me/916376219433?text=${encodeURIComponent(message)}`;

window.open(whatsapp, "_blank");
}

