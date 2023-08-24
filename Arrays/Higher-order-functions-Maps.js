function findLength(arr) {
    arr = arr.map((str) => {
          if (str === null || str === undefined){
                return 0;
          } else {
                return str.length;
          }
    })
    return arr;
}
