// const usersInfo = "https://jsonplaceholder.typicode.com/users";

// const x = document.querySelector('button');

// x.addEventListener('click', function Show(){
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', usersInfo);
//     xhr.responseType = 'json';
//     xhr.onload = ()=>{
//         let res = xhr.response;
//         let i = 0;
//         while(res[i]){
//             x.insertAdjacentHTML(
//                 'afterend',
//                 `<div class='user'>
//                     <p>User id: ${res[i].id}</p>
//                     <p>Name: ${res[i].name}</p> 
//                     <p>LastName: ${res[i].username}</p>
//                     <p>LastName: ${res[i].email}</p> </div>
//                     <img src='https://reqres.in/img/faces/7-image.jpg'></div>`
//             )
//             i++;
//         }
//     };
//     xhr.send();
// },{ once: true })




const usersInfo = "https://jsonplaceholder.typicode.com/users";

const x = document.querySelector('button');

x.addEventListener('click', function Show(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', usersInfo);
    xhr.responseType = 'json';
    xhr.onload = ()=>{
        let res = xhr.response;
        let res_long = xhr.response.length;
        let i = res_long - 1;
        while(res[i]){
            x.insertAdjacentHTML(
                'afterend',
                `<div class='user'>
                    <p class="num">User id: ${res[i].id}</p>
                    <p>Name: ${res[i].name}</p> 
                    <p>LastName: ${res[i].username}</p>
                    <p>Email: ${res[i].email}</p> </div>
                    <img src='https://reqres.in/img/faces/7-image.jpg'></div>`
            )
            i--;
        }
        
    };
    xhr.send();
},{ once: true })

