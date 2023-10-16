const userNames = ['Elon', 'Susan', 'Bill', 'Marika', 'Ryan'];

function name(array, i) {
  if (i < userNames.length) {
   var names = userNames[i];
   let n = name(++i);
   return names + (n ? ' - ' + n : '');
 } else {
   return '';
 }
}
console.log(name(userNames, 2));