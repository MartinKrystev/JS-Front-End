function roadRadar(speed, area) {

    let normal = false;
    let speeding = false;
    let excessive = false;
    let reckless = false;
    let speedLimit = 0;
    switch(area) {
        case 'motorway':
            speedLimit = 130;
            if(speed <= 130) {
                normal = true;
            } else if(130 < speed && speed <= 150) {
                speeding = true;
            } else if(150 < speed && speed <= 170) {
                excessive = true;
            } else if(170 < speed) {
                reckless = true;
            }
        break;
        case 'interstate':
            speedLimit = 90;
            if(speed <= 90) {
                normal = true;
            } else if(90 < speed && speed <= 110) {
                speeding = true;
            } else if(110 < speed && speed <= 130) {
                excessive = true;
            } else if(130 < speed) {
                reckless = true;
            }
        break;
        case 'city':
            speedLimit = 50;
            if(speed <= 50) {
                normal = true;
            } else if(50 < speed && speed <= 70) {
                speeding = true;
            } else if(70 < speed && speed <= 90) {
                excessive = true;
            } else if(90 < speed) {
                reckless = true;
            }
        break;
        case 'residential':
            speedLimit = 20;
            if(speed <= 20) {
                normal = true;
            } else if(20 < speed && speed <= 40) {
                speeding = true;
            } else if(40 < speed && speed <= 60) {
                excessive = true;
            } else if(60 < speed) {
                reckless = true;
            }
        break;
    }

    if(normal === true) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else if(speeding === true) {      
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - speeding`);
    } else if(excessive === true) {
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
    } else if(reckless === true) {
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)    
    }
}

// roadRadar(101, 'residential')