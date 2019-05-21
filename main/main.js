module.exports = function main(inputs) {
    // write your code here...
   let money = inputs.parkTime * 0.25
   if (inputs.distance <= 0) return 0
   else if(inputs.distance <= 2) return parseInt(money + 6 + 0.5)
   else if(inputs.distance <= 8) return parseInt(money + (inputs.distance - 2) * 0.8 + 6 + 0.5)
   else return parseInt(money + 6 + 4.8 + (inputs.distance - 8) * 1.2 + 0.5)
};
