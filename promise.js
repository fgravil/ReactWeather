function addPromise(a, b){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      if(isNaN(a) || isNaN(b)){
        reject('one is not a number');
      }
      resolve(a+b);
    }, 1000);
  });
}

addPromise(3,5).then(function(sum){
  console.log('success: ', sum);
},function(err){
  console.log('error: ', err);
});
