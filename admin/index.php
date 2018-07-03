<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">

  <title>BigWin Admin</title>
  <!--===============================================================================================-->

  <link rel="stylesheet" href="css/style.css" media="screen" type="text/css" />
<!--===============================================================================================-->
<script
  src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"></script>
  <script
  src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"
  integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30="
  crossorigin="anonymous"></script>
  <script type="text/javascript" src="js/validation.min.js"></script>

   
</head>

<body>

  <div class="login-card" id="box">
    <h1>Log-in</h1><br>
    <form  method="post" id="login-form">
    <div id="error"></div>
    <input type="text" name="user_name" id="user_name" placeholder="Username">
    <input type="password" name="password" id="password" placeholder="Password"> 
    <input type="submit" name="btn-login" id="btn-login" class="login login-submit" value="login">
    
  </form>

</div>


</body>
<script src="js/main.js"></script>
</html>