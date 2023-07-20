const returnFirstTwoDrivers = function(drivers) {
    const newDrivers = [];
    newDrivers.push(drivers[0], drivers[1]);
    return newDrivers;
}

const returnLastTwoDrivers = function(drivers) {
    const newDrivers = [];
    newDrivers.push(drivers[drivers.length-2], drivers[drivers.length-1]);
    return newDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return (function (fare) {return fare * multiplier;});
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}