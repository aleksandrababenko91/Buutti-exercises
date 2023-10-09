const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
               { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
               { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
               { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
               { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
               { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
               { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

let instructors = users.filter(function(user) {
return user.role === "Instructor"
});
    console.log(instructors); 
let instructorsLastAndFirstName = instructors.map(user => user.firstName + " " + user.lastName)
console.log(instructorsLastAndFirstName);