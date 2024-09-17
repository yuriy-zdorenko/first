function pechatatNomera() {
  let nomer = 0
  do {
    if (nomer === 0) {
      console.log(`${nomer} - це нуль`)
    } else if (nomer % 2 === 0) {
      console.log(`${nomer} - парне число`)
    } else {
      console.log(`${nomer} - непарне число`)
    }
    nomer++
  } while (nomer <= 10)
}

pechatatNomera()
