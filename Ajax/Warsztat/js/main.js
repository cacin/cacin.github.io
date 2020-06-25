console.log('Warsztat - Infinite scroll');

//ile razy do końca razy
let endOfThePage = 0;
let preloader = document.querySelector('.preloader');
let preloadnig = false;

const getData = () =>{

    if(!preloadnig){
        fetch('https://akademia108.pl/api/ajax/get-users.php')
        .then(res => res.json())
        .then(data=>{
    
            let body =document.body;
            let hr = document.createElement('hr');
            body.appendChild(hr);
    
            for (let user of data){
                let pId = document.createElement('p');
                let pName = document.createElement('p');
                let pWebsite = document.createElement('p');
    
                pId.innerText = `User ID: ${user.id}`;
                pName.innerText = `User ID: ${user.name}`;
                pWebsite.innerHTML= `User ID: ${user.website}<br/>--------`;
    
                body.appendChild(pId);
                body.appendChild(pName);
                body.appendChild(pWebsite);
    
            }
            preloadnig=false;
            preloader.classList.add('d-none');
    
          
        })
        .catch(error =>{
            console.error(error);
        })
    }
    preloadnig=true;
  


    
}

const scrollToEndOfPage = () => {
 
    let d = document.documentElement;
    let scrollHeight = d.scrollHeight;
    let scrollTop = d.scrollTop;
    //wewnętrzna wysokość okna przeglądarki
    let clientHeight = d.clientHeight;

    let sumScrollTopClientHeight = Math.ceil(scrollTop+clientHeight);

    console.log(`scrollHeight: ${scrollHeight}`);
    console.log(`sumScrollTopClientHeight: ${sumScrollTopClientHeight}`);
    console.log(`scrollTop: ${scrollTop}`);
    console.log(`clientHeight: ${clientHeight}`);
    console.log(`================================`);

    if (sumScrollTopClientHeight>=scrollHeight){
        endOfThePage +=1;
        console.log(`Jesteś na końcu ${endOfThePage} razy`);

        preloader.classList.remove('d-none');
        getData();
    }
 
    
}

window.addEventListener('scroll', scrollToEndOfPage)
