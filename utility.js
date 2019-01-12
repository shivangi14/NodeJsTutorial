console.log("i am outside module.exports")      //will be called only once irrespectve ofhow many times has been used
                                                //bcz Node.js will cache imports

module.exports = function(numToSum){
    let sum =0,i=0,len = numToSum.length;
    while(i<len){
        sum += numToSum[i];
        i++;
    }
    return sum;
}