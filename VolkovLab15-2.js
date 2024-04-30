function math() {
    let i = 0;
    do {
       if (i === 0) {
          console.log(i + " - це нуль");
       }
       if (i % 2 === 0) {
          console.log(i + " - парне число");
       } else {
          console.log(i + " - непарне число");
       }
       i++;
    } while (i <= 10);
 }
 
 math()