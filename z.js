function minus() {
   if (document.getElementById("num")) {
    var curr = parseInt(document.getElementById("num").innerHTML);
  }			//parseInt()可以傳回由字串轉換而成的整數

  if (curr && curr <= 99) {

    if (curr <= 10) {
      document.getElementById("num").innerHTML = "0" + (curr - 1);
    } else {
      document.getElementById("num").innerHTML = curr - 1;
    }
  } else {
    document.getElementById("num").innerHTML = 59;
  }

  setTimeout(function() {
    minus();
  }, 1000);
};
minus();

function minuses() {
   if (document.getElementById("number")) {
    var curr = parseInt(document.getElementById("number").innerHTML);
  }			//parseInt()可以傳回由字串轉換而成的整數

  if (curr && curr <= 999) {

    if (curr <= 100) {
      document.getElementById("number").innerHTML = "0" + (curr - 1);
    } else {
      document.getElementById("number").innerHTML = curr - 5;
    }
  } else {
    document.getElementById("number").innerHTML = 45;
  }

  setTimeout(function() {
    minuses();
  }, 100);
};
minuses();