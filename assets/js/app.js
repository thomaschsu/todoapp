// Check off specific todos by clicking on them
$('li').on('click', function(){
    $(this).toggleClass('complete');
});

// Click on X to delete todo
$('span').on('click', function(event){
    $(this).parent().fadeOut(500, function(){
        // After fade out is done, remove the element
        $(this).remove();
    });
    // Stop from bubbling up to other elements
    event.stopPropagation();
});