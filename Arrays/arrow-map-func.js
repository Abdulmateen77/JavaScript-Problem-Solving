let modify = (array) => {
    let newArray = array.map(item => {
          if (isPrime(item)){
                return item + 1;
          } else{
                return item * 2;
          }
    })
    return newArray;
}


function isPrime(n) {

if(n == 0 || n == 1) {

    return false;

}

for(let i = 2 ; i*i <= n ; i++) {

    if(n%i == 0) {

        return false;

    }

}

return true;}
