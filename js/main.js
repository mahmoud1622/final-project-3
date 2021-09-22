const btnscrolltotp= document.querySelector("#btnscrolltotp");

$(document).ready(function(){
btnscrolltotp.addEventListener("click",function(){
   $("home ,body").animate({
      scrollTop:0
   },"show");
});

});

$('.mohm1').click(function(){

    $('.task4').show();
    $('.task72').hide();
    $('.task73').hide();
    $('.task74').hide();
    $('.task75').hide();
    $('.task76').hide();
})
$('button.btn1').click(function(){
        $('p.class1').toggle();
         $('.task1').toggle();
         $('.task2').toggle();
})

$('button.btn2').click(function(){
    $('p.class2').toggle();
     $('.tes1').toggle();
     $('.tes2').toggle();
} ) 
 $('button.btn3').click(function(){
    $('p.class3').toggle();
     $('.tes3').toggle();
     $('.tes4').toggle();
} )

$('button.btn4').click(function(){
    $('p.class4').toggle();
     $('.tes5').toggle();
     $('.tes6').toggle();
})



//1
$('.mohm2').click(function(){

    $('.task72').show();
    $('.task4').hide();
    $('.task73').hide();
    $('.task74').hide();
    $('.task75').hide();
    $('.task76').hide();
})

$('button.btn5').click(function(){
    $('p.class5').toggle();
     $('.tes7').toggle();
     $('.tes8').toggle();
} )
 $('button.btn6').click(function(){
    $('p.class6').toggle();
     $('.tes9').toggle();
     $('.tes10').toggle();
})
$('button.btn7').click(function(){
    $('p.class7').toggle();
     $('.tes11').toggle();
     $('.tes12').toggle();
} )
 $('button.btn8').click(function(){
    $('p.class8').toggle();
     $('.tes13').toggle();
     $('.tes14').toggle();
  } )
  $('button.btn9').click(function(){
    $('p.class9').toggle();
     $('.tes15').toggle();
     $('.tes16').toggle();
  } )

//2
$('.mohm3').click(function(){

    $('.task73').show();
    $('.task4').hide();
    $('.task72').hide();
    $('.task74').hide();
    $('.task75').hide(); 
    $('.task76').hide();
})
$('button.btn10').click(function(){
    $('p.class10').toggle();
     $('.tes17').toggle();
     $('.tes18').toggle();
  } )
  $('button.btn11').click(function(){
    $('p.class11').toggle();
     $('.tes19').toggle();
     $('.tes20').toggle();
  } )
  $('button.btn12').click(function(){
    $('p.class12').toggle();
     $('.tes21').toggle();
     $('.tes22').toggle();
  } )
  $('button.btn13').click(function(){
    $('p.class13').toggle();
     $('.tes23').toggle();
     $('.tes24').toggle();
  } )
  $('button.btn14').click(function(){
    $('p.class14').toggle();
     $('.tes25').toggle();
     $('.tes26').toggle();
  } )
//3

$('.mohm4').click(function(){
    $('.task74').show();
  $('.task4').hide();
  $('.task72').hide();
    $('.task73').hide();
  $('.task75').hide();
     $('.task76').hide();
})

$('button.btn15').click(function(){
    $('p.class15').toggle();
     $('.tes27').toggle();
     $('.tes28').toggle();
  } )
  $('button.btn16').click(function(){
    $('p.class16').toggle();
     $('.tes29').toggle();
     $('.tes30').toggle();
  } )
  $('button.btn17').click(function(){
    $('p.class17').toggle();
     $('.tes31').toggle();
     $('.tes32').toggle();
  } )
  //4

  $('.mohm5').click(function(){
    $('.task75').show();
    $('.task4').hide();
    $('.task72').hide();
    $('.task73').hide();
    $('.task74').hide();
    $('.task76').hide();
})

$('button.btn18').click(function(){
    $('p.class18').toggle();
     $('.tes33').toggle();
     $('.tes34').toggle();
  } )
  $('button.btn19').click(function(){
    $('p.class19').toggle();
     $('.tes35').toggle();
     $('.tes36').toggle();
  } )
  $('button.btn20').click(function(){
    $('p.class20').toggle();
     $('.tes37').toggle();
     $('.tes38').toggle();
  } )
  $('button.btn21').click(function(){
    $('p.class21').toggle();
     $('.tes39').toggle();
     $('.tes40').toggle();
  } )
//5

$('.mohm6').click(function(){
    $('.task76').show();
     $('.task4').hide();
     $('.task72').hide(); 
     $('.task73').hide();
     $('.task74').hide();
      $('.task75').hide();   
})
$('button.btn22').click(function(){
    $('p.class22').toggle();
     $('.tes41').toggle();
     $('.tes42').toggle();
  } )
  $('button.btn23').click(function(){
    $('p.class23').toggle();
     $('.tes43').toggle();
     $('.tes44').toggle();
  } )
  $('button.btn24').click(function(){
    $('p.class24').toggle();
     $('.tes45').toggle();
     $('.tes46').toggle();
  } )
  $('button.btn25').click(function(){
    $('p.class25').toggle();
     $('.tes47').toggle();
     $('.tes48').toggle();
  } )



  let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
  let searchBtn = document.querySelector(".bx-search");
 
  closeBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      menuBtnChange(); //calling the function(optional)
  });
 
  searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
      sidebar.classList.toggle("open");
      menuBtnChange(); //calling the function(optional)
  });
 
  // following are the code to change sidebar button(optional)
  function menuBtnChange() {
      if (sidebar.classList.contains("open")) {
          closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
      } else {
          closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
      }
  }
