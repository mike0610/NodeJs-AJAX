const usersInfo = "https://jsonplaceholder.typicode.com/users";

const x = document.querySelector('button');

x.addEventListener('click', function Show(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', usersInfo);
    xhr.responseType = 'json';
    xhr.onload = ()=>{
        if (xhr.status != 200) { 
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } else { 
            let res = xhr.response;
            let res_long = xhr.response.length;
            let i = res_long - 1;
            while(res[i]){
                x.insertAdjacentHTML(
                    'afterend',
                    `<div class='user'>
                        <p class="num">User id: ${res[i].id}</p>
                        <p>Name: ${res[i].first_name}</p> 
                        <p>LastName: ${res[i].last_name}</p>
                        <p>Email: ${res[i].email}</p> </div>
                        <p><img src='${res[i].photo}'></div>`
                )
                i--;
            }
        };
    }
        
    xhr.send();
},{ once: true })

