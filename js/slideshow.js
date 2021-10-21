let i = 0;
let txt = 'The biggest global Country admired for its superior quality products and services';
let bars = document.getElementsByClassName('side-nav')

function scroll(){
if(i < txt.length){
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    
setTimeout(scroll, 100)
};
}

$(document).ready(function(){
    $('.bars').click(function(){
        $('.nav-holder').toggle();
    })
$('.side-click').click(function(){
   
    $('.side-nav').show();
    $('#side-cancel').click(function(){
        $('.side-nav').hide();
    });
})
})



