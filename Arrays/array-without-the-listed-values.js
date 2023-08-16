function removeListedValues(arr, without) {

      let arr1 = arr.filter((item) => {
            if(!without.includes(item)){
                  return true
            } else {
                  return false
            }
      });

      return arr1;
}
