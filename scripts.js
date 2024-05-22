$(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $(".side-nav .collapse").on("hide.bs.collapse", function() {                   
        $(this).prev().find(".fa").eq(1).removeClass("fa-angle-down").addClass("fa-angle-right");
    });
    $('.side-nav .collapse').on("show.bs.collapse", function() {                        
        $(this).prev().find(".fa").eq(1).removeClass("fa-angle-right").addClass("fa-angle-down");        
    });

    // Ensure only one dropdown is open at a time
    $('.side-nav').on('show.bs.collapse', '.collapse', function() {
        $('.side-nav .collapse').collapse('hide');
    });

    // Close submenus when Home or Anomaly are clicked
    $('.menu-item').on('click', function() {
        $('.side-nav .collapse').collapse('hide');
    });
});
