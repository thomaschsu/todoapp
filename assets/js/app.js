// Check off specific todos by clicking on them
$('ul').on('click', 'li', function(){
    $(this).toggleClass('complete');
});

// Click on X to delete todo
$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, function(){
        // After fade out is done, remove the element
        $(this).remove();
    });
    // Stop from bubbling up to other elements
    event.stopPropagation();
});

// Function for input
$('input[type="text"]').keypress(function(event){
    if(event.which === 13) {
        let toDo = $(this).val();
        $(this).val('');
        $('ul').append('<li><span>X</span> ' + toDo + '</li>');
    }
});

// Mouse over to-do list hover class
$('#notearea').hover(function(){
    $(this).addClass('hover');
}, function() {
    $(this).removeClass('hover');
});

// Note section on click add class
$('input[type="text"]').on('click', function(){
    $(this).addClass('expand');
});

// // Click anywhere outside of input, remove class expand
// $('body').on('click', function() {
//     $('input[type="text"]').removeClass('expand');
// });