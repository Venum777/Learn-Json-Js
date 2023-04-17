//-----------------------------Lesson-------------------------------
// const url = "https://thronesapi.com/api/v2/Characters";
// const req = new XMLHttpRequest();
// req.open("GET", url);
// req.responseType="json";
// req.onload = () => {
//     let arrPers = req.response;
//     console.log(arrPers[0].fullName)
// }
// req.send();


// const url = "https://thronesapi.com/api/v2/Characters";
// const req = new XMLHttpRequest();
// const heroName = document.querySelector('#inp');
// const button = document.querySelector('#btn');
// const outputInfo = document.querySelector('#text')
// req.open("GET", url);
// req.responseType="json";
// req.onload = () => {
//     let arrPers=req.response
//     function showConsole()
//     {
//         for(let i of arrPers)
//         {
//             if(heroName.value ==i.firstName)
//             {
//                 outputInfo.innerHTML = `${i.title}`
//             }
//         }
//     }
//     button.addEventListener("click", showConsole);
// }
// req.send();



//-----------------------Card---------------------------
// const text1 = document.querySelector('#text1')
// const text2 = document.querySelector('#text2')
// const text3 = document.querySelector('#text3')
// const input = document.querySelector('#inp')
// const button = document.querySelector('#btn')
// const img = document.querySelector('#img')
// const url = "https://thronesapi.com/api/v2/Characters";
// const req = new XMLHttpRequest();


// req.open("GET", url);
// req.responseType="json";
// req.onload = () => {
//     let arrPers = req.response;
//     console.log(arrPers)
//     function cards()
//     {
//         for(let i of arrPers)
//             {
//             if(input.value == i.firstName)
//             {
//                 localStorage.setItem("image", i.imageUrl);
//                 localStorage.setItem("family", i.family);
//                 localStorage.setItem("fullName", i.fullName);
//                 localStorage.setItem("title", i.title);
//                 img.style.cssText=`
//                 background-image: url("${localStorage.getItem("image")}");
//                 background-size: auto;
//                 background-repeat: no-repeat;
//                 width:200px;
//                 height:200px;
//                 border: 3px solid grey;
//                 `
//                 text1.innerHTML=`
//                 Family: ${localStorage.getItem("family")}
//                 `
//                 text2.innerHTML=`
//                 FullName: ${localStorage.getItem("fullName")}
//                 `
//                 text3.innerHTML=`
//                 Title: ${localStorage.getItem("title")}
//                 `
//             }
//         }
//     }
//     button.addEventListener("click", cards);
//     img.style.cssText=`
//     background-image: url("${localStorage.getItem("image")}");
//     background-size: auto;
//     background-repeat: no-repeat;
//     width:200px;
//     height:200px;
//     border: 3px solid grey;
//     `
//     text1.innerHTML=`
//     Family: ${localStorage.getItem("family")}
//     `
//     text2.innerHTML=`
//     FullName: ${localStorage.getItem("fullName")}
//     `
//     text3.innerHTML=`
//     Title: ${localStorage.getItem("title")}
//     `
// }
// req.send();

//----------------------------Weather------------------------

const url = 'http://api.openweathermap.org/data/2.5/weather?q=';
const KEY = '&appid=a9364650d7bb1a7f29a975686cbc4543';
const req = new XMLHttpRequest();
const city = prompt("Enter city");
req.open("GET", url + `${city}` + KEY);
req.responseType="json";
req.onload = () => {
    console.log(req.response);
}
req.send();