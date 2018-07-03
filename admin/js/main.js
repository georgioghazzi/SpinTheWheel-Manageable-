


$('document').ready(function()
{ 
/* validation */
$("#login-form").validate({
    rules:
    {
    password: {
    required: true,
    },
    user_name: {
    required: true,
    },
    },
    errorPlacement: function(error,element) {
        return true;
      },
    invalidHandler: shakeIt,
    submitHandler: submitForm	
    });  
      /* validation */

/* login submit */
function submitForm()
{		
    var options = {
        distance: '5',
        direction:'left',
        times:'3'
       }
        
    
var data = $("#login-form").serialize();

        $.ajax({

            type : 'POST',
            url  : 'login.php',
            data : data,
            beforeSend: function()
            {	
                $('#btn-login').val("Connecting...");
            },
            success :  function(response)
            {						
                    if($.trim(response)== 'ok'){
                        
                        $("body").load("adminboard.php").hide().fadeIn(1500);
                        ;
            
            
                    }
                    else{
            
                        $("#box").effect("shake", options, 800);
                        $('#btn-login').val("Login");
                        $('#error').html("<span class='text-danger small'>"+response+" \</span>");
                        $('#password').val('');	 
                    }
            }
            });
       } 


return false;
});
function shakeIt(){
    var options = {
        distance: '5',
        direction:'left',
        times:'3'
       }
   
    $("#box").effect("shake", options, 800);
    $('#btn-login').val("Login");
    $('#error').html("<span class='text-danger small'>Please Enter Username And Password \</span>");
    $('#user_name').val('');
    $('#password').val('');	   
}