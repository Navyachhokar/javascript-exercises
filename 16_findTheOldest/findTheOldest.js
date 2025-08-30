const findTheOldest = function(people) {
    return people.reduce((oldest,person) => {
        const current = new Date().getFullYear();
        const personDeath = person.yearOfDeath || current;
        const oldestDeath = oldest.yearOfDeath || current;
        
        const personAge = personDeath - person.yearOfBirth;
        const oldestAge = oldestDeath - oldest.yearOfBirth;

        return personAge>oldestAge ? person : oldest;
        
    })

};

// Do not edit below this line
module.exports = findTheOldest;
