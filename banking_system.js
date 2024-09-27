class BankAccount {
    constructor(props) {
        let { nama ,password} = props;
        this.nama = nama;
        this.saldo = 0;
        this.password = password;
        this.encryptedPassword = this.#encrypt(password);
    }

    #encrypt = password => {
        return `encrypted-version-of-${password}`;
    }

    #decrypt = () => {
        return this.encryptedPassword.split(`encrypted-version-of-`)[1];
    }

    authenticate(password){ 
        return this.#decrypt() === password;
    }

    login() {
        const nama = document.getElementById('nama').value;
        const password = document.getElementById('password').value;
        
        if (this.nama === nama && this.authenticate(password)) {
            window.location.href = "index.html"; 
        } else {
            alert("Nama atau password salah");
        }
    }
        
    cekSaldo() {
        document.getElementById("saldo").innerHTML = `Total saldo ${this.nama}:  ${this.saldo}`;
    }

    tambahSaldo() {
        var nominal = parseFloat(prompt("Masukkan nominal saldo yang ingin ditambahkan: "));
        if(nominal <=0){
            alert("Input tidak valid.");
            return;
        }
        if (!isNaN(nominal)) {
            setTimeout(() => {
                try {
                    this.saldo += nominal;
                    document.getElementById("saldo").innerHTML = `Total saldo ${this.nama}:  ${this.saldo}`;
                    document.getElementById("keterangan").innerHTML = "Saldo berhasil ditambahkan sebesar " + nominal;
                } catch (error) {
                    document.getElementById("keterangan").innerHTML = "Terjadi kesalahan saat menambahkan saldo.";
                    console.error(error);
                }
            }, 3000); 
        } else {
            alert("Input tidak valid.");
        }
    }

    kurangiSaldo() {
        var nominal = parseFloat(prompt("Masukkan nominal saldo yang ingin dikurangi: "));
        if(nominal <=0){
            alert("Input tidak valid.");
            return;
        }
        if (!isNaN(nominal)) {
            setTimeout(() => {
                try {
                    if (nominal > this.saldo) {
                        document.getElementById("keterangan").innerHTML = `Saldo atas nama ${this.nama} tidak mencukupi.`;
                        return;
                    } else {
                        this.saldo -= nominal;
                        document.getElementById("saldo").innerHTML = `Total saldo ${this.nama}:  ${this.saldo}`;
                        document.getElementById("keterangan").innerHTML = `Saldo berhasil dikurangi sebesar ${nominal}`;
                    }
                } catch (error) {
                    document.getElementById("keterangan").innerHTML = "Terjadi kesalahan saat mengurangi saldo.";
                    console.error(error);
                }
            }, 1000); 
        } else {
            alert("Input tidak valid.");
        }
    }
}
const account = new BankAccount({ nama: 'vania', password: '1234' });