$(document).ready(function(){
  $( function() {
    $( ".rectangle" ).draggable();
    $( ".shopbg" ).droppable({
    });
  } );

  $('.container').click(function(){
    let url = "https://veqch.github.io/secrefegame/";
      $(location).attr('href',url);
  })

  $('.first').click(function(){
    let url = "shop.html";
      $(location).attr('href',url);
  })

  $('.cover1').click(function(){
    let url = "magazin.html";
      $(location).attr('href',url);
   })

  $('.cover2').click(function(){
    let url = "test.html";
      $(location).attr('href',url);
  })

  $('.cover3').click(function(){
    let url = "wait.html";
      $(location).attr('href',url);
    })

  $('.cover4').click(function(){
    let url = "out.html";
      $(location).attr('href',url);
  })

  $('.arrow').click(function(){
    $('.img1').css('transform', 'scale(1.2)');
    $('.img1').addClass('scaling');
  })

  $('.link').click(function(){
    let url = "https://youtu.be/4QrietTFd9A";
      $(location).attr('href',url);
  })

  $('.img2').click(function(){
    $('.img2').css('transform', 'scale(1.2)');
  })

  $('.button').click(function() {
    $('.cat').css('display', 'block');
  })

  $('.back').click(function(){
    let url = "shop.html";
      $(location).attr('href',url);
  })
});
