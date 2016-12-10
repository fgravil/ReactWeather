var names = ['Fred', 'Mac', 'Fab'];

names.forEach(function(name){
  console.log('forEach', name);
});

names.forEach(name => {console.log('arrow', name)});

var addStatement = (a, b) =>{
  return a+b;
}

var addExpression = (a,b) => a+b;

console.log("addStatement", addStatement(5,7));
console.log("addExpression", addExpression(5,7));
