$(document).ready(function(){
  
    $('#btn-put').click(function (){

        //$.get('https://akademia108.pl/api/ajax/get-post.php') //sposób 1
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php') //sposób 2
        .done(function(data){

            let pId = $('<p></p>').text(`Post ID: ${data.id}`);
            let userId = $('<p></p>').text(`Post ID: ${data.userId}`);
            let tite = $('<p></p>').text(`Post ID: ${data.tite}`);
            let body = $('<p></p>').text(`Post ID: ${data.body}`);

            $('body').append(pId);
            $('body').append(userId);
            $('body').append(tite);
            $('body').append(body);

            console.log(data);
        })
        .fail(function(error){
            console.error(error);
            
        })


        //console.log(`Działam`);
    })
    
});

