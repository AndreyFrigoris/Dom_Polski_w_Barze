// search

// var lastResFind = "";
// var copy_page = "";
// function TrimStr(s) {
//     s = s.replace(/^\s+/g, '');
//     return s.replace(/\s+$/g, '');
// }
//
// function FindOnPage(inputId) {
//     var obj = window.document.getElementById(inputId);
//     var textToFind;
//
//     if (obj) {
//         textToFind = TrimStr(obj.value);
//     } else {
//         alert("Введенная фраза не найдена");
//         return;
//     }
//     if (textToFind == "") {
//         alert("Вы ничего не ввели");
//         return;
//     }
//
//     if (document.body.innerHTML.indexOf(textToFind) == "-1")
//         alert("Ничего не найдено, проверьте правильность ввода!");
//
//     if (copy_page.length > 0)
//         document.body.innerHTML = copy_page;
//     else copy_page = document.body.innerHTML;
//
//
//     document.body.innerHTML = document.body.innerHTML.replace(eval("/name=" + lastResFind + "/gi"), " ");
//     document.body.innerHTML = document.body.innerHTML.replace(eval("/" + textToFind + "/gi"), "<a name=" + textToFind + " style='border-bottom:1px solid red'>" + textToFind + "</a>");
//     lastResFind = textToFind;
//     window.location = '#' + textToFind;
// }

// scrollup

$(document).ready(function(){
  $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          $('.up, .alert').fadeIn();
      } else {
          $('.up, .alert').fadeOut();
      }
  });
  $('.up').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 700);
      return false;
  });
});
