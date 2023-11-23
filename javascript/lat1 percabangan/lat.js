function ceknilai() {
  let nilai = document.getElementById("nilai").value;
  // console.log(nilai.value)
  if (nilai >= 0 && nilai <= 70) {
    document.getElementById("tes").innerHTML = "Nilai Anda " + nilai + " Remedial";
  } else if (nilai >= 71 && nilai <= 79) {
    document.getElementById("tes").innerHTML = "nilai anda " + nilai + " C";
  } else if (nilai >= 80 && nilai <= 89) {
    document.getElementById("tes").innerHTML = "nilai anda " + nilai + " B";
  } else if (nilai >= 90 && nilai <= 100) {
    document.getElementById("tes").innerHTML = "nilai anda " + nilai + " A";
  } else {
    document.getElementById("tes").innerHTML = "Nilain yang anda masukan salah";
  }
}
