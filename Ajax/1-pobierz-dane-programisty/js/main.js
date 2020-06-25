$(document).ready(function(){
  
    $('body').append($('<div class="dane"></div>'));
    $('#btn-put').click(function (){

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .done(function(data){

            let name = $('<p></p>').text(`Imię: ${data.imie}`);
            let surname = $('<p></p>').text(`Nazwisko: ${data.nazwisko}`);
            let job = $('<p></p>').text(`Zawód: ${data.zawod}`);
            let company = $('<p></p>').text(`Firma: ${data.firma}`);

            let line = $('<hr/>');

            
            $('.dane').append(name);
            $('.dane').append(surname);
            $('.dane').append(job);
            $('.dane').append(company);
            $('.dane').append(line);


            //console.log(data);
        })
        .fail(function(error){
            console.error(error);
            
        })


        console.log(`Działam`);
    })
    
});

