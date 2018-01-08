if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'helloworld'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'helloworld'.");
}
var helloworld = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var ensureNotNull = Kotlin.ensureNotNull;
  function main(args) {
    println('Hola mundo');
    var msg = document.getElementById('msg');
    ensureNotNull(msg).innerHTML = '<h1>Hola mundo<\/h1>';
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('helloworld', _);
  return _;
}(typeof helloworld === 'undefined' ? {} : helloworld, kotlin);
