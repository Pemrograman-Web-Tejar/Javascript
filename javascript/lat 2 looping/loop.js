function loop() {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  let text = "";
  for (let i = n1; i <= n2; i++) {
    text += i + "<br>";
  }
  document.getElementById("t").innerHTML = text;
}

function loop2() {
  let nl1 = document.getElementById("nl1").value;
  let nl2 = document.getElementById("nl2").value;
  let text1 = "";
  while (nl1 >= nl2) {
    text1 += nl1 + "<br>";
    nl1--;
  }
  document.getElementById("r").innerHTML = text1;
}



