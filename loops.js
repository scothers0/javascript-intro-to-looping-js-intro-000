function  forLoop(array) {
  for(let i = 0; i < 25; i++){
    if (i === 1){
      array.push(`I am ${i} strange loop.`);
    }
    else array.push(`I am ${i} strange loops.`)
  }
  return array;
}

function whileLoop(number){
  let i = number;
  while (i > 0) {
    console.log(i);
    i --
  }
  return "done";
}
