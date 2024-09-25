var saldo = 0;

function cekSaldo() {
    document.getElementById("saldo").innerHTML = "Total saldo: " + saldo;
}

function tambahSaldo() {
    var nominal = parseFloat(prompt("Masukkan nominal saldo yang ingin ditambahkan: "));
    if (!isNaN(nominal)) {
        saldo += nominal;
        document.getElementById("saldo").innerHTML = "Total saldo: " + saldo;
        document.getElementById("keterangan").innerHTML = "Saldo berhasil ditambahkan sebesar " + nominal;
    } else {
        alert("Input tidak valid.");
    } 
}

function kurangiSaldo() {
    var nominal = parseFloat(prompt("Masukkan nominal saldo yang ingin dikurangi: "));
    if (!isNaN(nominal)) {
        if (nominal > saldo) {
            alert("Saldo tidak mencukupi.");
            return;
        }else{
            saldo -= nominal;
            document.getElementById("saldo").innerHTML = "Total saldo: " + saldo;
            document.getElementById("keterangan").innerHTML = `Saldo berhasil dikurangi sebesar ${nominal}`;
        }
    }else {
        alert("Input tidak valid.");
    }
}

