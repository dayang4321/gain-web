
 $(document).ready(padder);

 $(window).resize(padder);

function padder() {
  $('main').css({ paddingTop: $('.navbar').innerHeight() });
}
$('body').append("<div class='backdrop'></div>")
$('.backdrop').click(function (e) {
  $('.backdrop').fadeOut(100);
  $("#navbarSupportedContent").toggleClass("show");
})


$('.custom-toggler').click(function () {
  // console.log('clicked')
  $('.backdrop').fadeToggle(100)
  $("#navbarSupportedContent").toggleClass("show");
  // Close the dropdown if the user clicks outside of it
})




/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// $('.dropbtn').click(function () {
//     console.log('clicked')
//    $("#langDropdown").toggleClass("show");
//   })
  
//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(e) {
//     if (!e.target.matches('.dropbtn')) {
//     var myDropdown = document.getElementById("langDropdown");
//       if (myDropdown.classList.contains('show')) {
//         myDropdown.classList.remove('show');
//       }
//     }
//   }

