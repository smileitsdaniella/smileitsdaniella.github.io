function sendData(){
       var request = $.ajax({
          url: "yourApp.php",
          data: $("#myform").serialize(),
          type: 'POST'
       });

    request.done(function(){
          $("#myform").submit();
     });
}
