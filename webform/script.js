document.addEventListener("change", function(event) {
    let element = event.target;
    if (element && element.matches(".form-element-field")) {
      element.classList[element.value ? "add" : "remove"]("-hasvalue");
    }
  });   

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
  });

  n =  new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();
  document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

// var d = new Date();
// document.getElementById("demo").innerHTML = d;