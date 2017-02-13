/**
 * Created by NAPatel on 10-Feb-17.
 */
$(function () {

    console.log(window.location.host);
    $('.reset-button').click( function(e){
        e.preventDefault();
        var country = $('.form-country').val('');
        var month = $('.form-month').val('');
        var date = $('.form-date').val('');
        var temp = $('.form-temp').val('');
    });

    $('.submit-button').click( function(e) {
        e.preventDefault();
        var country = $('.form-country').val();
        var month = $('.form-month').val();
        var date = $('.form-date').val();
        var temp = $('.form-temp').val();
        $('.form-country').val('');
        $('.form-month').val('');
        $('.form-date').val('');
        $('.form-temp').val('');
        var tempData = {
            country : "country",
            month: "month",
            date: "date",
            temp: "temp"
        };
        $.ajax({
            type: "POST",
            url: "/AddRecord.html",
            dataType: 'json',
            data: tempData,
            success : function() {
                alert("Insert Successful");
            }
        });
    });

});