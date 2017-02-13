$(function () {

    console.log(window.location.host);

    $('.del-submit-button').click(function(e) {
        console.log("Delete button clicked.");
        e.preventDefault();
        console.log("Button Clicked");
        var country = $('.del-form-country').val();
        var month = $('.del-form-month').val();
        var date = $('.del-form-date').val();
        $('.del-form-country').val('');
        $('.del-form-month').val('');
        $('.del-form-date').val('');
        date = Ext.Date.parse(date, 'd-M-Y');
        date = date.toString();
        var tempData = {
            country : country,
            month: month,
            date: date
        };
        $.ajax({
            type: "DELETE",
            url: "InsertData.html",
            dataType: 'json',
            data: tempData,
            success : function() {
                alert("Insert Successful");
            },
            error: function(data) {
                alert("Error: "+data.responseText);
            }
        });
    });

});
