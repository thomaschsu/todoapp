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
        $('ul').append('<li><span><i class="fas fa-trash"></i></span> ' + toDo + '</li>');
    }
});

// Mouse over to-do list hover class
$('#notearea').hover(function(){
    $(this).addClass('hover');
}, function() {
    $(this).removeClass('hover');
});

// Note section on focus add class
$('input[type="text"]').on('focusin', function(){
    $(this).removeClass('reduce').addClass('expand');
});

// Note section on focus remove class
$('input[type="text"]').on('focusout', function () {
    $(this).addClass('reduce').removeClass('expand');
});

// Fade in hints
$('#hint1').hide().fadeIn(1000);
$('#hint2').hide().fadeIn(1000);
$('#hint3').hide().fadeIn(1000);