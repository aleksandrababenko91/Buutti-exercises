let grades: Array<number | string>  = ['1', 2, '3', 4, '5'];
for (let index of grades) {
  if(Number(index) > 3) {
    console.log(index);
  }
}