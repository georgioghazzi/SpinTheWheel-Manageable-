<input type="submit" class="button" onClick='winIDa()'>
<script
  src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"></script>
<script>
function winIDa() {
 
      $.ajax({
           type: "POST",
           url: 'http://127.0.0.1:8080/test/wheel.php',
           data:{action:'a'},
           success:function(html) {
             console.log(html)
           },error: function(xhr, ajaxOptions, thrownError){
                    console.log(xhr.status);
                },

      });
 }

</script>