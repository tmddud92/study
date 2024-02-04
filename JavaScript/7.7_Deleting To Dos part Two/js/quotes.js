const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote:
        "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "To Travel is to Live",
        author: "Hans Christian Andersen",
    },
    {
        quote: "Only a life lived for others is a life worthwhile.",
        author: "Albert Einstein",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "Never go on trips with anyone you do ntot love.",
        author: "Hemmingway",
    },
    {
        quote: "We wander for distraction, but we travel for fulfilment.",
        author: "Hilaire Belloc",
    },
    {
        quote: "Travel expands the mind and fills the gap.",
        author: "Sheda Savage",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

// random()은 0부터 1사이의 랜덤한 숫자를 제공해.
// Math.random() * 10 을 하면 0에서 10사이의 랜덤 숫자를 얻을 수 있다.
// 하지만 integer가 아닌 float이므로 소수점을 가져오게 된다.
// 소수점을 없애기 위해서는 세 가지 function을 사용할 수 있다.
// 첫번째는 Math.round()이다. 반올림을 해준다.
// 0.1~0.4는 1, 0.5~0.9는 2 이런식.

// 두번째는 Math.ceil()이다. 숫자를 천장까지 높여준다. 머리 꼭대기 천장까지.
// 1.9는 2, 1.0만이 1이된다. 1.01만 돼도 2가 반환

// 세번째는 Math.floor()이다. 마루까지 숫자를 내려준다.
// 1.9는 1, 1.99999999도 1이 된다.

// 우리가 사용할것은 Math.floor(Math.random() * 10)을 해서 뒤 소수점을 없애는것
// 하지만 위의 방법은 10까지만 출력. quotes.length를 사용해 array의 수만큼 알아서 가져오게 한다.
