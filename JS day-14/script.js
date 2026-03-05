function pro() {
  return new Promise((res, rej) => {
    let a = 10;

    if (a > 50) {
      res();
    } 
    else {
      rej();
    }
  });
}

pro()
  .then(() => console.log("promise resolved"))
  .catch(() => console.log("promise rejected"))
  .finally(() => console.log("inside finally"));