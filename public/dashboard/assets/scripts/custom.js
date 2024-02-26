$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).parent('.panel').find('.pe-7s-less ').show();
    $(this).parent('.panel').find('.pe-7s-plus ').hide();
  })
  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).parent('.panel').find('.pe-7s-less').hide();
    $(this).parent('.panel').find('.pe-7s-plus ').show();
  })
  
  $(document).ready(function(){
      var trigger = $('.hamburger'),   
       isClosed=false ;
      trigger.click(function () {
        hamburger_cross();      
      });
  
      function hamburger_cross() {
        if (isClosed == false) {          
          var container = $(".closed-sidebar");
          container.addClass('sidebar-mobile-open'); 
  var container = $(".mobile-toggle-nav");
  container.addClass('is-active');
  
          isClosed = true;
        } else {   
          var container = $(".closed-sidebar");
  container.removeClass('sidebar-mobile-open');
  
   
  var container = $(".mobile-toggle-nav");
  container.removeClass('is-active');
  $(".fixed-sidebar").addClass('closed-sidebar');
          isClosed = false;
        }
    }
  });
  
   
  
  
  
  
  
  
  
  
  $('.app-main').click(function (e) {
  
  
   
  var container = $(".mobile-toggle-nav");
  container.removeClass('is-active');
  
  
  $(".fixed-sidebar").addClass('closed-sidebar');
  
   
  });
  $('.app-main1').click(function (e) {
  
  var container = $(".closed-sidebar");
  container.removeClass('sidebar-mobile-open');
  
   
  var container = $(".mobile-toggle-nav");
  container.removeClass('is-active');
  
  
  
  $(".fixed-sidebar").addClass('closed-sidebar');
  
   
  });
  
  
  function toggleIcon(e) {
      $(e.target)
          .prev('.metismenu')
          .find(".icon0")
          .toggleClass('flaticon-add flaticon-adds');
  }
  $('.app-sidebar__inner').on('hidden.bs.collapse', toggleIcon);
  $('.app-sidebar__inner').on('shown.bs.collapse', toggleIcon);
  