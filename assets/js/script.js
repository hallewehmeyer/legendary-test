$(document).ready(function(){
    $('.box-explore').hide();
    $(".title-heading").show(500);
})


function moreDetails() {
    $('.title-heading').hide(500);
    $('.box-explore').show();
    AOS.init();
}
