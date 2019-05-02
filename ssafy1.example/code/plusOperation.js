module.exports.function = function plusOperation (leftOperand, rightOperand) {
  const console = require('console');
  const result = leftOperand + rightOperand;
  const operatorName = "더하기";
  console.log("result is " + result);
  
  const results = {
    operatorName: operatorName,
    result: result
  };
  
  return results;
}
