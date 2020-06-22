$(document).ready(function(){
  
    
});

let btn = document.getElementById('btn-put');

 function getDate () {

    fetch('https://akademia108.pl/api/ajx/get-post.php')
    .then (res => res.json())
    .then(data => {

        let pId = document.createElement('p');
        let pUserId = document.createElement('p');
        let pTitle = document.createElement('p');
        let pBody = document.createElement('p');

        pId.innerText = `Post ID: ${data.id}`;    
        pUserId.innerText = `User ID: ${data.UserId}`;
        pTitle.innerText = `Title: ${data.title}`;
        pBody.innerText = `Body: ${data.body}`;

        document.body.appendChild(pId);
        document.body.appendChild(pUserId);
        document.body.appendChild(pTitle);
        document.body.appendChild(pBody);

       // console.log(data);
    })
    .catch(error=>{
        console.error(error);
    })

   // console.log('Jestem');
};

btn.addEventListener('click',getDate);