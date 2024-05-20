$(document).ready(function() {
    $('.navbar-toggle').click(function() {
        $('#sidebar').toggleClass('show');
    });

    $('#sidebar .collapse').on('show.bs.collapse', function () {
        $('#sidebar .collapse.in').collapse('hide');
    });
});
