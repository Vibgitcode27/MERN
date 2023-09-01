var lengthOfLastWord = function(s) 
{
let trim = s.trim()
let obj = trim.split(" ");
trim = obj[obj.length-1]
return trim.length
};