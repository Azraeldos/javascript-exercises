const leapYears = function(year) {


if (
    year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
){
    return true;
}
   
else { return false; }

};
// run node on the file and console log the results to figure out questions
// Do not edit below this line
module.exports = leapYears;
