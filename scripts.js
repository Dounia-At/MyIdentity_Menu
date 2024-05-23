$(function(){
    $('[data-toggle="tooltip"]').tooltip();

    // Toggle icons on submenu collapse
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

    // Handle menu item click
    $('.menu-item').on('click', function() {
        // Remove active classes from previously active items
        $('.menu-item').removeClass('active-menu-item');
        $('.submenu-item').removeClass('active-submenu-item');

        // Add active class to clicked menu item
        $(this).addClass('active-menu-item');

        // If the menu item has submenus, collapse them
        $('.side-nav .collapse').collapse('hide');
    });

    // Handle submenu item click
    $('.submenu-item').on('click', function(e) {
        e.stopPropagation(); // Prevent the menu item click event

        // Remove active class from previously active submenu items
        $('.submenu-item').removeClass('active-submenu-item');

        // Add active class to clicked submenu item
        $(this).addClass('active-submenu-item');

        // Add active class to the parent menu item
        $(this).closest('li').children('.menu-item').addClass('active-menu-item');
    });

    // Also remove the active classes from submenu items if a different main menu item is clicked
    $('.menu-item').on('click', function() {
        $('.submenu-item').removeClass('active-submenu-item');
    });
});
