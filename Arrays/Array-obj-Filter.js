function filterByCity(arr) {
      const resultarr = arr.filter((item) => {
            let {city} = item
            city = city.toLowerCase()
            if (city === "bangalore" || city === "hyderabad"){
                  return true;
            } else {
                  return false;
            }
      })

      return resultarr;
}
