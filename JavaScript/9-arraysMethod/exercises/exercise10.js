const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
               { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
               { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
               { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
               { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
               { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
               { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

//lastNames
let usersLastNames = users.map(user => user.lastName)
console.log(usersLastNames);

//FullStach Developer
let usersFullStack = users.filter(function(user) {
return user.role === "Full Stack Resident"
});
    
console.log(usersFullStack);


//List all Instructors’ full names (e.g., “Wes Reid”)
 let instructorsNameandSurname = users.map(user => user.role === "Instructor")
    console.log(instructorsNameandSurname);

