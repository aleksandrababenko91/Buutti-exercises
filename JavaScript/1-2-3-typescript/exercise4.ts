const randomArray = (length: number, max: number) => {
  let newArray = Array(length).fill([]).map(() => Math.round(Math.random() * max));
  newArray.sort((a, b) => a - b);
  return newArray;
}
  console.log(randomArray(40, 10));