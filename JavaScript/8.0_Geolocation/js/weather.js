function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
  }
  function onGeoError() {
    alert("Can't find you. No weather for you.");
  }
  
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


// 1. navigator 함수를 이용해 사용자의 위치를 알아내는 코드 작성.

// navigator.geolocation.getCurrentPosition ( ) 라는 코드를 작성해준다.
// 이때 getCurrentPosition 은 2개의 argument가 필요하다. 앞쪽에는 모든 게 잘 됐을 때 실행될 함수인 onGeoOk 함수를, 뒤에는 실패했을 때 실행될 함수인 onGeoError 함수를 입력한다.

// 2. onGeoError() 함수가 실행될 때 :
// 에러가 났다는 것을 사용자에게 알려주기 위해서
// alert("Can't find you. No weather for you."); 를 해준다.

// 3. onGeoOk 함수가 실행될 때:
// function onGeoOk(position){
// const lat = position.coords.latitude;
// const lng = position.coords.longitude;
// console.log("You live in", lat, lng);
// }
// 자바스크립트가 position으로 user의 위치를 전달해준다.
// position은 object 이고 위도와 경도 값이 들어있다. positon.coords.latitude와
// position.coords.longitude 를 변수에 저장하고 console.log를 해서 사용자에게 보여준다.
