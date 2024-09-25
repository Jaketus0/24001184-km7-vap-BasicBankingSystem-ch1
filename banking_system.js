class BankAccount {
    constructor() {
        this.saldo = 0;
    }

    cekSaldo() {
        document.getElementById("saldo").innerHTML = "Total saldo: " + this.saldo;
    }   

    tambahSaldo() {
        var nominal = parseFloat(prompt("Masukkan nominal saldo yang ingin ditambahkan: "));
        if (!isNaN(nominal)) {
            this.saldo += nominal;
            document.getElementById("saldo").innerHTML = "Total saldo: " + this.saldo;
            document.getElementById("keterangan").innerHTML = "Saldo berhasil ditambahkan sebesar " + nominal;
        } else {
            alert("Input tidak valid.");
        }
    }

    kurangiSaldo() {
        var nominal = parseFloat(prompt("Masukkan nominal saldo yang ingin dikurangi: "));
        if (!isNaN(nominal)) {
            if (nominal > this.saldo) {
                alert("Saldo tidak mencukupi.");
                return;
            } else {
                this.saldo -= nominal;
                document.getElementById("saldo").innerHTML = "Total saldo: " + this.saldo;
                document.getElementById("keterangan").innerHTML = `Saldo berhasil dikurangi sebesar ${nominal}`;
            }
        } else {
            alert("Input tidak valid.");
        }
    }
}

const account = new BankAccount();

