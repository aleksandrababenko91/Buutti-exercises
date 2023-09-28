let leapYear  = 2021;

    if (leapYear % 4 === 0 && (leapYear % 100 !== 0)) {
        console.log("Leap year.");
    }
    
    if (leapYear % 4 !== 0 && (leapYear % 100 === 0 && (leapYear % 400 !== 0))) {
        console.log("Not leap year.");
    }
    
    if (leapYear % 4 !== 0) {
        console.log("Not leap year.");
    }
     