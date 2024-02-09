

// the current age is age now calculte the week days and months left 

function calculateAge(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var age = document.getElementById("input").value;
    var ageLeft = 90 - age ;
    var months = 12 * ageLeft;
    var weeks = 52 * ageLeft;
    var days = 365 * ageLeft;

    document.getElementById("return").innerHTML = "You have a total of "+ months + " months <br>" + weeks + " weeks, <br>" + days + " days left.";
}

