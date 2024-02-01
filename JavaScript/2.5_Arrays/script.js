//데이터를 정리하는 법
//array(배열)
//array의 목적은 하나의 variable 안에 데이터의 list를 가지는 것

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun"; 

//const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;
//console.log(daysOfWeek);
//문자로 출력되고 원하는 대로 작동하지않음

const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
//string 대신에 array가 된것

const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"];
console.log(daysOfWeek, nonsense);

const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
// Get Item from Array
console.log(dayOfWeek[5]);

//array 안의 데이터에 접근하고 싶다면, variable의 이름을 적어주고
//대괄호를 열어서 얻고 싶은 항목의 번호를 넣고, 대괄호를 닫아준다.

// Add one more day to the array
dayOfWeek.push("sun");

console.log(dayOfWeek);