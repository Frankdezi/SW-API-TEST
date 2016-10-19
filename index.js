window.onload = function () {
    var $card1 = $('.card1');
    var $card2 = $('.card2');
    var $win = $('.win');
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
   
    
    
 
        
    $('.game').click(function(){
     
     
        
        var firstcard = $.getJSON('https://swapi.co/api/people/' + randomIntFromInterval(1, 87) + '/');
        var seccard = $.getJSON('https://swapi.co/api/people/' + randomIntFromInterval(1, 87) + '/');
      
    setTimeout(function(){
    $.when(firstcard, seccard).then(function(card1, card2){
       
     
        $card1.append('<li>' + card1[0].name + '</li><li> Height: '+ card1[0].height +  '</li>');
        $card2.append('<li>' + card2[0].name +  '</li><li> Height: '+ card2[0].height + '</li>');
        
        
        if( card1[0].height === 'unknown' || card2[0].height === 'unknown' ){
            
             $(".win").fadeIn("slow", function(){
         $win.append('<p>Heights of one or more cannot be found</p>');  
             });
            
        }
        else if( card1[0].height > card2[0].height){
            
            $(".win").fadeIn("slow", function(){
            $win.append('<p>YOU WIN: ' + card1[0].name + '</p>' );
            });
            $($card2).animate({opacity: 0.25}, 500, function(){});
        }
        else {
             $(".win").fadeIn("slow", function(){
            $win.append('<p>COMPUTER WIN: ' + card2[0].name + '</p>' );
             });
             $($card1).animate({opacity: 0.25}, 500, function(){});
        };
        
       
   });
         $($card2).animate({opacity: 1}, 0, function(){});
        $($card1).animate({opacity: 1}, 0, function(){});
     $("li").remove();
      $("p").remove();  
   }, 500);
            
            
    });
   
}
