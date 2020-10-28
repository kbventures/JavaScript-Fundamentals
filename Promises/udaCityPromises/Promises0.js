new Promise(function(resolve) {
    console.log('first');
    resolve();
    console.log('second');
    console.log(this);
  }).then(function() {
    console.log('third');
  });