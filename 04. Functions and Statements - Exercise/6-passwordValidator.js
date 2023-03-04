function passValidator(pass) {
    let isValid = false;

    let hasSixSymbols = false;
    let hasAllowedChars = true;
    let hasTwoDigits = false;

    if(pass.length >= 6 && pass.length <= 10) {
        hasSixSymbols = true;
    }

    let digits = 0;
    let letters = 0;
    for (const el of pass) {
       if(el.charCodeAt(0) >= 48 && el.charCodeAt(0) <= 57) {
            digits++;
       } else if (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90
        || el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) {
            letters++;
        } else {
            hasAllowedChars = false;
        }
    }

    if(digits >= 2) {
        hasTwoDigits = true;
    }

    isValid = hasSixSymbols === true
        && hasTwoDigits === true
        && hasAllowedChars === true ? true : false;

    if(isValid) {
        console.log('Password is valid');
    }

    if(hasSixSymbols === false) {
        console.log('Password must be between 6 and 10 characters');
    }
    if(hasAllowedChars === false) {
        console.log('Password must consist only of letters and digits');
    }
    if(hasTwoDigits === false) {
        console.log('Password must have at least 2 digits');
    }
}

// passValidator('MyPass123')
// passValidator('logIn')
// passValidator('Pa$s$s')