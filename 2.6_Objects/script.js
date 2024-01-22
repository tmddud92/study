// 우리가 아는 것은 variable인데, 
// 이렇게 사용할경우 variable이 존재한다는 것을 기억해야 하고,  
// 모든 variable의 이름, 즉 property 이름을 지어야하기에 별로.
const playerName = "nico";
const playerPoints = 10;
const playerHandsome = false;
const playerFast = "little bit";

// xx.xx으로 하면 fat, handsome, point, name 이라는 특성(property)들이
// 한 개의 개체(entity),즉 player에 대해서 설명하고 있다는것을 알수있다.
// 우리가 하려는 것은 데이터를 가능한 최선으로 정리하는것.
// player.name
// player.points
// player.handsome

//const player = ["nico", 10, false, "little bit"];
//위와 같은 array 사용시 "nico", 10, false, "little bit"무슨 의미인지 알려주지않음
//리스트는 모든 값이 같은 의미를 갖는다.

//설명이 필요하지 않은 데이터 리스트들은 array
//설명이 필요한 정보가 담긴 데이터 리스트들은 object

// object는 property를 가진 데이터를 저장하도록 해준다.
// array에 넣을 경우 설명을 붙이지 않으면 뜻을 알 수 없다.
// object는 {}사용, {}안에는 property(특성)을 작성
const player = {
    name: "nico",
    point: 10,
    fat: true,
};
console.log(player);

//objsct 안에 있는 것들을 접근하는 방법
console.log(player.name);
// console.log(player["name"]); 으로도 사용가능

// object 업데이트도 가능
// 여기서 constant는 수정이 불가능한데 어떻게 업데이트가 되느냐?
// object 안의 무언가를 수정하는것이기에 가능하다.
// 즉 object는 아직도 동일
// 에러는 constant 전체를 하나의 값으로서 업데이트 하려고 할 때 발생
// ex) player = false; 이 경우 constant는 boolean으로 바뀌기에 에러 발생
player.fat = false;

// object에 추가도 가능, 원하는 property 추가 가능.
player.lastName = "potato";

// point를 15로 바꾸는 게 아니라 15를 더할수도 있다.
player.point = player.point + 15;
