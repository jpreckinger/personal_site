$('document').ready(onReady);


function onReady(){
  console.log('Ready');
}

$(window).scroll(function () {
  $('#top-name').addClass("get_hidden");
});
