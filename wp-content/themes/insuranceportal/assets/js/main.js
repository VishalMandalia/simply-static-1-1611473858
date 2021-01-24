$('.owl-carousel').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    margin:10
});


if($(window).width()<767){
    $('.top-links-main-nav li a').click(function(e) {
      if($(this).next().hasClass('sub-menu')) {
        e.preventDefault(); 
      }
     $('.top-links-main-nav li.open ').find('.sub-menu').slideUp();
      $(this).find('sub-menu').slideToggle()
       if($(this).parents('li').hasClass('open')){
        $(this).parents('li').removeClass('open');
      }
      else{
        $(this).next('.sub-menu').slideToggle();
        $('.top-links-main-nav li.open').removeClass('open');
        $(this).parents('li').addClass('open');
      }
      
    
     
  });
  }






  
  $(".expert-help a.remove").click(function(event){
    event.preventDefault();
    $(".expert-help").toggleClass("closed")

  });


  $(".expert-help a.expert-close").click(function(event){
    event.preventDefault();
    var cl = $(".expert-help a.expert-close").parents().hasClass('closed');
    // console.log(cl);
    if(cl) {
      console.log(cl);
      $('.expert-help').removeClass('closed');
    }
  });

  // var policyTableHeight= $('#policy-table').height();
  // var policyHeaderHeight = $('.policy-term-header').height();
  // var slimSliderHeight = (policyTableHeight - 50);


 
  // $('#policy-term-content').slimScroll({
   
  //   height: slimSliderHeight+'px',
  //   size: '2px',
  //   position: 'right',
  //   color: '#8000FF',
  //   alwaysVisible: true,
  //   distance: '5px',
  //   start: $('#policy-term-content'),
  //   railVisible: true,
  //   railColor: '#03456C',
  //   railOpacity: 0.3,
  //   wheelStep: 10,
  //   allowPageScroll: false,
  //   disableFadeOut: false


	// });




  $(".user-details a.xpand").click(function(){
    $(this).toggleClass("removed");
    
    var cl = $(this).hasClass('removed');
    if(cl) {
      $(this).find("span").text("-");
    } else {
      $(this).find("span").text("+");

    }

    $(".card-wrapper").toggleClass("expand");

  });


  $("#genPolTerm").click(function(event){
    event.preventDefault();
  $('.policy-terms-wrap').toggleClass("out");
 
});
  
  $("a.policy-close").click(function(event){
    event.preventDefault();
  $('.policy-terms-wrap').toggleClass("out");
 
});
  

// $('.compare-offers-modal').modal();


$(".compare-offers-modal").on('shown.bs.modal', function() {
  // $('#compare-table').DataTable();
  $.extend( $.fn.dataTable.defaults, {
    // responsive: true
} );

  var table = $('#compare-table').DataTable( {
    scrollX:        true,
    scrollCollapse: true,
    paging:         false,
    info:     false,
    searching: false,
    ordering:false,
    fixedColumns:   {
        leftColumns: 1,
    }
} );


});

$(".policy-details-modal").on('shown.bs.modal', function() {
 
  // $('#policy-details-modal .modal-body')
  //   .slimscroll({ destroy: true })
  //   .slimscroll({ height: '500px' })
  //   .text(text);

    var policyTableHeight= $('#policy-table').height();
    var policyHeaderHeight = $('.policy-term-header').height();
    var slimSliderHeight = (policyTableHeight - 50);
  
   
    $('#policy-term-content').slimScroll({
    
      // destroy: true,
      height: slimSliderHeight+'px',
      size: '2px',
      position: 'right',
      color: '#8000FF',
      alwaysVisible: true,
      distance: '5px',
      start: $('#policy-term-content'),
      railVisible: true,
      railColor: '#03456C',
      railOpacity: 0.3,
      wheelStep: 10,
      allowPageScroll: false,
      disableFadeOut: false
  
  
    });



});






  
$('.menu-burger').click(function() {

    if($(this).hasClass('open'))
        {
          $(this).removeClass('open');
            tweenMenu.reverse();
            setTimeout(function() {
                $('.top-links-main-nav').removeClass('open');
            // $('menu').removeClass('open');
             $('body').removeClass('overflow-hidden');
         },600);
        }
        else
        {
           $(this).addClass('open');
        //   $('header').addClass('open');
           $('.top-links-main-nav').addClass('open');
          setTimeout(function() {
            $('body').addClass('overflow-hidden');
            tweenMenu.play();
          }, 400);
    
        }
    
    });

var tweenMenu = new TimelineMax({
     paused: !0
  });
  tweenMenu.add(TweenMax.staggerFromTo('.top-links-main-nav.mobile li', 0.4, {
    opacity: 0,
    y: 50,
    ease: Power4.easeInOut
  }, {
    opacity: 1,
    y: 0,
    ease: Power1.easeout,
    clearProps:'all',
  }, 0.1));
   
    