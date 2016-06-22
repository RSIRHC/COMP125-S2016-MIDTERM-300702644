/**
 * FileName: app.js
 
 * @author Christopher Ritchil 
 * @date June 22, 2016
 * 
 * StudentID: 300702644
 * website: http://comp125-s2016-midterm-300702644.azurewebsites.net
 * @description This file is the main javascript file for the web site
 * 
 * version: initial version 0.1.0
 */


// setup your IIFE (Immediately Invoked Function Expression)
(function () {
"use strict";

//testing the js file is running with console.log output
 console.log("app is running :)");

    var paragraphElements = [];


    paragraphElements[0] = document.getElementById("IntroParagraph");
    paragraphElements[1] = document.getElementById("Folegandros");
    //paragraphElements[2] = document.getElementById("Alonissos");
    //paragraphElements[3] = document.getElementById("Spetses");
   // paragraphElements[4] = document.getElementById("Amorgos");
    //paragraphElements[5] = document.getElementById("Syros");
    //paragraphElements[6] = document.getElementById("Milos");
    //paragraphElements[7] = document.getElementById("Hydra");
    //paragraphElements[8] = document.getElementById("Ithaca");
    //paragraphElements[9] = document.getElementById("Gavdos");



    // Define paragraph array
    var paragraphs = [];

    paragraphs[0] = "Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals. Greece has 1,400 islands, though only 230 of them are inhabited. And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.";
    paragraphs[1] = "Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets.";



    //create a reference to the sendButton
    var sendButton = document.getElementById("sendButton");
    if (sendButton) {
        sendButton.addEventListener("click", function (event) {
            console.log("Send button Clicked!!");
        })
    }

    // create a reference to the form 
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var contactNumber = document.getElementById("contactNumber");
    var yourMessage = document.getElementById("yourMessage");


    //create a reference for the form
    var contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            console.log("FORM HAS BEEN SUBMITTED");
            showFormInput();
            contactForm.reset();
        })
    }
    // This showFormInput() function ouputs the form information to the console when client press the send button
    function showFormInput() {
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("    First Name: " + firstName.value);
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("     Last Name: " + lastName.value);
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("         Email: " + email.value);
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("Contact Number: " + contactNumber.value);
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("  Your Message: " + yourMessage.value);
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    }


})();

