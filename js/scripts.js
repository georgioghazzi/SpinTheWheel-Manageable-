var tick = new Audio('admin/assets/media/tick.mp3');
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
      duration: 8000,
    rotates: 8,
    frame: 1,
    easing: "easyWheel",
    type: "spin",
    markerAnimation: true,
    centerClass: 0,
    width: 500,
    fontSize: 16,
    textOffset: 6,
    letterSpacing: 0,
    textLine: "v",
    textArc: false,
    shadowOpacity: 1,
    sliceLineWidth: 5,
    outerLineWidth: 5,
    centerWidth: 30,
    centerLineWidth: 5,
    centerImageWidth: 60,
    textColor: "#fff",
    markerColor: "#CC3333",
    centerLineColor: "#424242",
    centerBackground: "rgb(66, 66, 66)",
    sliceLineColor: "#424242",
    outerLineColor: "#424242",
    shadow: "#000",
    selectedSliceColor: "#333",
      centerImage: "admin/assets/images/easyWheelText.png",
   
 
      button: '.spin-button',
      frame: 1,
      onStep: function(item, slicePercent, circlePercent) {
        if (typeof tick.currentTime !== 'undefined')
            tick.currentTime = 0;
        tick.play();
    },
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

       