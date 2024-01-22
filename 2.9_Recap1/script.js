// 모든 것은 데이터 타입으로부터 시작
// 데이터 타입은 자바스크립트가 이해할 수 있는 데이터의 종류들
// string은 "text", "로 시작해서"로 끝나거나, '로 시작해서'로 끝
// 숫자도 있다. JS는 이 숫자들로 뭘 해야할 지 알고있다.
// true와 false는 string이 아닌 boolean이다.
// 값을 저장할 수 있다. 데이터를 variable에 저장할 수 있다.
// variable을 만드는 두가지 옵션이 있다.
// 하나는 const a = 5;
// variable 값을 업데이트 하고 싶을 때가 존재
// 그래서 let이 존재한다.
// let은 const와 동일한 일을 한다. 차이는 업데이트가 가능하다는것
// 만드는 것이 아닌 업데이트시에는 앞에 let을 붙이지않아도 됨

// 다른 종류의 value로는 null, undefined
// null은 비어있음을 뜻함, variable 안에 아무것도 없다는것을 확실히 해두기 위해
// null은 변수에 할당되는 값
// undefined는 변수에 값을 부여하지 않은 상태, 값이 전혀 없다.

// 하나의 variable 안에 많은 수의 데이터를 가지고싶을때 list, 다른 말로 array 사용
// array 사용시 []를 작성하면된다. ex)const days = [];
// array를 값으로 채울때 모든 유효한 데이터 타입이나 variable이 들어갈 수 있다.
// ex) const me = "sexy";
//     const days = [1, 2, false, true, null, undefined, "text", me];
// 만약 "text"를 받고 싶다면, console.log(days[6]);이라고 하면됨
// 원한다면 item을 update 할 수 있다.
// ex) days[6] = "string"; 으로 하면 "text"는 "string"으로 변경
// push는 array 끝에 item을 하나 더 추가하는 것
// days.push("one");
// const의 object 값을 변경하는 행위는 const 자체를 변경하는 것이 아니고 
// object 값을 변경하는 것이기 때문에 재할당 오류와 관계없다.