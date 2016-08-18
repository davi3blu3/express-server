// initialize buttons
var get-btn = document.getElementById('get');
var post-btn = document.getElementById('post');
var put-btn = document.getElementById('put');
var del-btn = document.getElementById('del');

// click event handlers
get-btn.on('click', function() {
    $.ajax({
        url: 'localhost:1337/calls',
        method: GET
    })
    .done(function() {
        console.log( "success" );
    })
    .fail(function() {
        console.log( "error" );
    });
});