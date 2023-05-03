

function calculateMinCost() {
  //your code here
   // read data from input element;
  var inputData = document.querySelector("#rope-lengths").value;
  var inputArr = inputData.split(",");
 
  for (var i = 0; i < inputArr.length; i++) {
    inputArr[i] = Number(inputArr[i]);
  }
	
	inputArr.sort( function (a , b){ return a-b; })
  var tcost = 0;
 
  while (inputArr.length > 1)
 {
    var cost = inputArr[0] + inputArr[1];
    tcost =tcost + cost;
 
    // delete first two element
    inputArr.splice(0, 2);
    inputArr.push(cost);
	 
  inputArr.sort( function(a , b){ return a-b; })
  }
  document.querySelector("#result").textContent = tcost;
  
  
} 
