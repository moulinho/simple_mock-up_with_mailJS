$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items:3,
    autoplay: true,
    margin:10,
    autoplayTimeout:4000,
    loop: true,
     responsiveClass:true,
    responsive:{
        0:{
            items:1,
           
        },
        600:{
            items:3,
           
        },
        1000:{
            items:4,
        }
    }
   
  });
//   var data = {
//     service_id: 'service_yzp3t17',
//     template_id: 'template_ykhzanb',
//     user_id: 'user_SW7PDmXcJo8VeUTo6FMkj',
//     template_params: {
//         'username': 'James',
//         'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
//     }
// };
 
// $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
//     type: 'POST',
//     data: JSON.stringify(data),
//     contentType: 'application/json'
// }).done(function() {
//     alert('Your mail is sent!');
// }).fail(function(error) {
//     alert('Oops... ' + JSON.stringify(error));
// });
// 
$('#myForm').on('submit', function(event) {
    event.preventDefault(); // prevent reload
    
    var formData = new FormData(this);
    formData.append('service_id', 'service_yzp3t17');
    formData.append('template_id', 'template_ykhzanb');
    formData.append('user_id', 'user_SW7PDmXcJo8VeUTo6FMkj');
 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        alert('Your mail is sent!');
    }).fail(function(error) {
        alert('Oops... pas de message posté' + JSON.stringify(error));
    });
})
});