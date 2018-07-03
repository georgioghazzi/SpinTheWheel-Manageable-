jQuery(document).ready(function(){
  $('.spinner').easyWheel({
      items: [{
        id      : 'a',
        name    : '20% OFF',
        message : 'You win 20% off',
        color   : '#3498db',
      },{
        id      : 'b',
        name    : 'No luck',
        message : 'You have No luck today',
        color   : '#ffc107',
      },{
        id      : 'c',
        name    : '30% OFF',
        message : 'You win 30% off',
        color   : '#f44336',
      },{
        id      : 'd',
        name    : 'Lose',
        message : 'You Lose :(',
        color   : '#3498db',
      },{
        id      : 'e',
        name    : '40% OFF',
        message : 'You win 40% off',
        color   : '#ffc107',
      },{
        id      : 'e',
        name    : '40% OFF',
        message : 'You win 40% off',
        color   : '#f44336',
      },{
        id      : 'e',
        name    : '40% OFF',
        message : 'You win 40% off',
        color   : '#3498db',
      },{
        id      : 'f',
        name    : 'Nothing',
        message : 'You get Nothing :(',
        color   : '#f44336',
      }],
      
      button: '.spin-button',
      frame: 1,
    ajax: {
      url   : 'http://127.0.0.1:8080/test/wheel.php', //Change http://localhost/ to your website name
      type  : 'POST',
      nonce : true //enable Additional security
    },
    onComplete : function(results,count,now){
      $('.spinner-message').html(results.message);
      console.log(results.message);
    }
  });
});

       