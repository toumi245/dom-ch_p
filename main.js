var btn = document.getElementsByClassName('removeproduct')

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function(e) {
    // e.currentTarget.parentNode.removeproduct();
    e.currentTarget.parentNode.remove();
    //this.closest('.single').remove() // in modern browsers in complex dom structure
    //this.parentNode.remove(); //this refers to the current target element 
    //e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  }, false);
}
