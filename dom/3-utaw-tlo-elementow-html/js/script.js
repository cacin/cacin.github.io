const ustawTlo = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');
    
    // p1.style.backgroundColor = 'red';
    // p2.style.backgroundColor = 'yellow';

    p1.classList.toggle('bg-red');
    p2.classList.toggle('bg-yellow');


};

let btnUstawTlo = document.getElementById('btn-ustaw-tlo');

btnUstawTlo.addEventListener('click', ustawTlo);