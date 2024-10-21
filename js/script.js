function init(){
  var button = document.getElementById('entrybutton');
  
  function showMeText(){
    var textbook = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbook.value;
    alert("Thein Han: " + textbook.value);
  }
 
  button.addEventListener('click', showMeText);
}

window.addEventListener('load', init);