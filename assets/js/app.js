$(document).ready(function() {

  $('.signin').click(function(){
    // guardando datos de los inputs        
    var user = $('#user').val();
    var password = $('#pass').val();      

    if (user === '' || password === '' || user === '' && password === '') {
      $('.replaceable').append('<div class=" wrng alert alert-warning" role="alert"> Debes ingresar un usuario y contraseña</div>')
    } 
    if ($('#pass').val().length < 6 && typeof password !== 'number') {
      $('.replaceable').append('<div class=" wrng alert alert-warning" role="alert"> La contraseña debe ser de mínimo 6 números</div>')
    } else {
    // borrar advertencia
    $('.wrng').remove();
    // setItem guarda datos en localStorage
    localStorage.setItem("User", user);
    localStorage.setItem("Password", password);

    $('#user').val('');
    $('#pass').val('');

    console.log(localStorage.getItem('User'), localStorage.getItem('Password'));
    window.location.href= "dnd.html";
    }
  });
});  
 