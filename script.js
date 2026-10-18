var layar = document.getElementById("layar");
var angkaSekarang = "0";
var angkaPertama = null;
var operator = null;
var mulaiBaru = false;

function tampilkan() {
  layar.textContent = angkaSekarang;
}

function tekanAngka(angka) {
  if (angkaSekarang === "0" || mulaiBaru === true) {
    angkaSekarang = angka;
    mulaiBaru = false;
  } else {
    angkaSekarang = angkaSekarang + angka;
  }
  tampilkan();
}

function tekanTitik() {
  if (mulaiBaru === true) {
    angkaSekarang = "0";
    mulaiBaru = false;
  }
  if (angkaSekarang.indexOf(".") === -1) {
    angkaSekarang = angkaSekarang + ".";
  }
  tampilkan();
}

function hitung(a, b, op) {
  var hasil = 0;

  if (op === "+") {
    hasil = a + b;
  } else if (op === "-") {
    hasil = a - b;
  } else if (op === "*") {
    hasil = a * b;
  } else if (op === "/") {
    if (b === 0) {
      return null;
    }
    hasil = a / b;
  } else if (op === "%") {
    if (b === 0) {
      return null;
    }
    hasil = a % b;
  }

  return parseFloat(hasil.toFixed(10));
}

function tampilkanError() {
  angkaSekarang = "Error";
  angkaPertama = null;
  operator = null;
  mulaiBaru = true;
  tampilkan();
}

function tekanOperator(op) {
  if (angkaSekarang === "Error") {
    return;
  }

  if (operator !== null && mulaiBaru === false) {
    var hasil = hitung(angkaPertama, parseFloat(angkaSekarang), operator);
    if (hasil === null) {
      tampilkanError();
      return;
    }
    angkaPertama = hasil;
    angkaSekarang = String(hasil);
  } else {
    angkaPertama = parseFloat(angkaSekarang);
  }

  operator = op;
  mulaiBaru = true;
  tampilkan();
}

function tekanSamaDengan() {
  if (operator === null || mulaiBaru === true) {
    return;
  }

  var hasil = hitung(angkaPertama, parseFloat(angkaSekarang), operator);
  if (hasil === null) {
    tampilkanError();
    return;
  }

  angkaSekarang = String(hasil);
  angkaPertama = null;
  operator = null;
  mulaiBaru = true;
  tampilkan();
}

function bersihkan() {
  angkaSekarang = "0";
  angkaPertama = null;
  operator = null;
  mulaiBaru = false;
  tampilkan();
}

function hapusSatu() {
  if (mulaiBaru === true) {
    return;
  }
  angkaSekarang = angkaSekarang.slice(0, -1);
  if (angkaSekarang === "") {
    angkaSekarang = "0";
  }
  tampilkan();
}
