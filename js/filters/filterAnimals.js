app.filter('animalstate', function() {

  // Create the return function and set the required parameter name to **input**
  return function(input) {

    var out = [];

    // Using the angular.forEach method, go through the array of data and perform the operation of figuring out if the language is statically or dynamically typed.
    angular.forEach(input, function(animals) {

      if (animals.state === 'ex') {
        out.push(animals)
      }
      
    })

    return out;
  }

});