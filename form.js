/**
 * Created by nimishagoyal on 01/11/17.
 */

$(function(){
    var output = $('#output');
    var URL = 'https://api.myjson.com/bins/18iw4x';
    $.ajax({url: URL, success:function(result){
        console.log(result);
        output.html('<form onsubmit="return validateForm()">' +
            'ITSC<br> ' +
            '<input type="text" name="itsc" value='+result.profile.itsc+'><br>'+
            'Name<br> ' +
            '<input type="text" name="flname" value='+result.profile.name+'><br>'+
            'E-mail<br> ' +
            '<input type="email" name="email" value='+result.profile.email+'><br>' +
            'Age<br> ' +
            '<input type="number" name="age" value='+result.profile.age+'><br>' +
            'Website<br> ' +
            '<input type="text" name="website" value='+result.profile.website+'><br><br> ' +
            '<input type="submit" value="Submit">'

        )
    }})
    // function validateForm(){
    //     var nam = $("input[name=flname]").value;
    //     if (nam == "") {
    //         console.log("name field empty");
    //         alert("Name must be filled out");
    //         return false;
    //     }
    // };
});
