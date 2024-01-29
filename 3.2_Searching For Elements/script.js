// HTML에서 정의된 id가 JavaScript에서 같아야한다.
// 이유는 id가 같지 않다면 아무것도 찾을수 없다.
// 대부분의 경우에는 id를 추가하지 않는다.
// id를 사용하기 편리하지만, 보통 className을 사용하거나 둘 다 사용

const hellos = document.getElementsByClassName("hello");
// className이 hello인 h1이 5개 이므로 array이다.
// 그래서 hellos. 으로 뭔가를 가져올 수 없다.
// 왜냐하면 h1이 들어있는 array이기 때문이다.
// 가끔은 많은 element를 한번에 가지고 와야하는 경우가 있다.
// 그럴때는 getElementByClassName()을 사용한다.
// 하지만 대부분의 경우에는 class name을 모든 곳에 추가하지는 않는다.
// class name을 다르게 해서 사용한다.

const title = document.getElementsByTagName("h1");
// 많은 h1중에 원하는 하나만 가지고 오고싶은면 원하는 결과가 아니다.
// title. 으로 뭔가를 할 수 없기 때문getElementsByClassName
// title이 title object 자체가 아니고 array기 때문

// element를 가지고 오는 가장 멋진 방법
// querySelector와 querySelectorAll이다.
// querySelector는 element를 CSS방식으로 검색할 수 있다.
// hello란 class내부에 있는 h1을 가지고 올 수 있다는 것을 의미

const title1 = document.querySelector(".hello h1");
// CSS selector를 사용하여 class hello를 찾고,그안에 h1을 가져와달라는것

getElementsByClassName("hello");
// .을 안쓰고 "hello"만 쓴이유는
// JavaScript에서 우리가 class name을 넘겨준다는 것을 알기 때문

querySelector(".hello h1"); //div hi으로도 가능
// querySelector에서는 hello가 class name 이라는 것을 그 안의 h1이 명시해줘야한다.
// element를 검색해 주기에 앞으로 많이 사용하게될것이다.
// querySelector는 단 하나의 element를 return해준다.

const title2 = document.querySelectorAll(".hello h1");
// querySelector를 사용할 때, hello class 안에 h1이 많을 수도 있다.
// 하지만 오직 첫번째것만 가져온다.
// 모두 가져오고싶다면 querySelectorAll이라고 해주면됨
// querySelectorAll은 여러 h1이 들어있는 array를 가져다 준다.
// 이 select안의 조건에 부합하는 모든 element를 가져다준다.

getElementsByClassName(); 
//해당 클래스네임으로 불러올 수 있으며, 동일요소가 있을 시 배열형태로 보여준다.
getElementsByTagName();
//해당태그를 불러올 수 있으며,중복요소가 있으면, 배열형태로 나타낸다.
getElementsByName();
// 위 3가지는 array를 반환해준다.

querySelector();
// CSS selector를 사용하여 검색할 수 있다.
// ex)const title2 = document.querySelector(".hello h1:firsy-child");와 같이 사용 가능
// 첫번째로 검색된 하나의 element만 반환해준다.
// id를 통해 찾고싶을때도 사용 가능
// ex) ("#hello"); 이렇게 id 만 전달해주면 됨

// 아래의 두 코드는 같은 일을 한다.
const title3 = document.querySelector("#hello");
// 우리가 뭘 검색하는지 명확하지 않으니 id(#)라고 명시해준다.
// CSS selector 자체를 전달하기 때문
const title4 = document.getElementById("hello");
// id(#)을 적어줄 필요없다. id찾는것을 알고있기 때문

querySelectorAll();
// 만약 이 조건에 맞는 모든 element를 찾고싶을때 사용
// array를 반환