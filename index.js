// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    const hqStreet = 42;
    const distanceInBlocks = Math.abs(street - hqStreet);// calculates the absolute distance in blocks
    return distanceInBlocks;
}

function distanceFromHqInFeet(street) {
    const hqStreet = 42;
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(street - hqStreet);
    return distanceInBlocks * feetPerBlock; //returns distance in feet
}

function distanceTravelledInFeet(startStreet, endStreet) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(endStreet - startStreet);
    return distanceInBlocks * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination); // resullts to total distance in feet

    if (distanceInFeet > 2500) {
        return 'cannot travel that far';
    } else if (distanceInFeet <= 400) {
        return 0; //because the first 400feet is free
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        const chargeableDistance = distanceInFeet - 400;
        return chargeableDistance * 0.02; // charges 2cents per foot after the first 400 feet
    } else { // when distance is greater than 2000 feet but less than or equal to 2500
        return 25;
    }
}