/*
// Project Name: Search Pathalogy Labs.
// Date Created: 31 Jan, 2021.
// Author: Ganesh B. Naykawadi.
*/


/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*===== SCROLL REVEAL ANIMATION =====*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1200,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.button', {
    delay: 200
});
sr.reveal('.home__img', {
    delay: 400
});
sr.reveal('.home__social-icon', {
    interval: 200
});

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', {
    delay: 400
});
sr.reveal('.about__text', {
    delay: 400
});

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', {
    interval: 200
});

sr.reveal('.skills__img', {
    interval: 600
});

/*SCROLL WORK*/
sr.reveal('.card', {
    interval: 300
});

/*SCROLL CONTACT*/
sr.reveal('.contact__input', {
    interval: 200
});

// Image carousel/Slide-show effect
var myIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("img-slide-show");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 3 seconds.
}

// Booking Form

var my_modal = document.getElementById('ModelBooking');

function displayModal() {
    my_modal.style.display = 'block';
}

function hideModal() {
    my_modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == my_modal) {
        my_modal.style.display = "none";
    }
}


// SMTP JS - sending email

function sendEmail() {
    debugger;
    let from = "searchdiagnostic.collection@gmail.com";
    let subject = "New Collection Booking Request from: " + document.getElementById("fullname").value + " / (" + document.getElementById("mobile").value + ").";
    let message = document.getElementById("details");

    if (from != null && subject != null && message != null) {
        debugger;
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "searchdiagnostic.collection@gmail.com",
            Password: "13986A5FB0E049F44CD8B24DA923057C21EB",
            To: 'ganeshnaykawadi@gmail.com',
            //To: 'yogeshdake123@gmail.com',
            From: from,
            Subject: subject,
            Body: message.value
        }).then(function (response) {

            if (response == "OK")
                $.notify("Thanks! Your response has been recorded.", "success");
            else
                $.notify("Something went wrong!", "error");
        });
    }

    /*===== CLEAR THE FORM FIELDS =====*/
    document.getElementById('fullname').value = '';
    document.getElementById('mobile').value = '';
    document.getElementById('details').value = '';
    hideModal();
}