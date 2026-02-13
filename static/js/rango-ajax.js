$(document).ready(function() {
    // Category suggestion
    $('#suggestion').keyup(function() {
        var query = $(this).val();
        $.get('/rango/suggest/', {suggestion: query}, function(data) {
            $('#cats').html(data);
        });
    });

    // Add category button click
    $('.rango-add').click(function() {
        var catid = $(this).attr('data-catid');
        var categoryname = $(this).attr('data-name');
        var button = $(this);
        
        $.get('/rango/like_category/', {category_id: catid}, function(data) {
            $('#like_count_' + catid).html(data);
            button.hide();
        });
    });
});
