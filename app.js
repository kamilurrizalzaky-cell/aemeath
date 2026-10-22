console.log("=== SOAL JS-1: Variabel, Tipe Data & Operator ===");
const namaToko = "Senja Mountain Store";
const tahunBerdiri = 2022;
const sedangBuka = true;
let alamat = null;

console.log("Tipe data namaToko:", typeof namaToko);
console.log("Tipe data tahunBerdiri:", typeof tahunBerdiri);
console.log("Tipe data sedangBuka:", typeof sedangBuka);
console.log("Tipe data alamat:", typeof alamat);

const tahunSekarang = new Date().getFullYear();
const umurToko = tahunSekarang - tahunBerdiri;
console.log(`Toko ${namaToko} sudah beroperasi selama ${umurToko} tahun.`);


console.log("\n=== SOAL JS-2: Percabangan / Control Flow ===");
function cekStatusPesanan(statusKode) {
    switch (statusKode) {
        case 1:
            return "Menunggu Pembayaran";
        case 2:
            return "Pembayaran Dikonfirmasi";
        case 3:
            return "Sedang Dikemas";
        case 4:
            return "Sedang Dikirim";
        case 5:
            return "Pesanan Diterima";
        default:
            return "Kode Status Tidak Valid";
    }
}

console.log("Status 2:", cekStatusPesanan(2));
console.log("Status 4:", cekStatusPesanan(4));
console.log("Status 9:", cekStatusPesanan(9));


console.log("\n=== SOAL JS-3: Perulangan / Looping ===");
const hargaProdukList = [35000, 75000, 550000, 120000, 300000, 650000, 180000, 750000, 45000, 250000];

// a) For loop total & rata-rata
let totalHarga = 0;
for (let i = 0; i < hargaProdukList.length; i++) {
    totalHarga += hargaProdukList[i];
}
let rataRataHarga = totalHarga / hargaProdukList.length;
console.log(`a) Total Harga Produk Peralatan Gunung: Rp ${totalHarga}, Rata-rata: Rp ${rataRataHarga}`);

// b) While loop cari harga > 500.000
let indexDitemukan = -1;
let hargaDitemukan = null;
let i = 0;
while (i < hargaProdukList.length) {
    if (hargaProdukList[i] > 500000) {
        indexDitemukan = i;
        hargaDitemukan = hargaProdukList[i];
        break;
    }
    i++;
}
console.log(`b) Peralatan gunung > 500000 pertama di indeks ${indexDitemukan} dengan harga Rp ${hargaDitemukan}`);

// c) For...of untuk harga di bawah 100000
console.log("c) Peralatan gunung di bawah Rp 100.000:");
for (let harga of hargaProdukList) {
    if (harga < 100000) {
        console.log(`- Rp ${harga}`);
    }
}


console.log("\n=== SOAL JS-4: Array & Array Method ===");
const daftarProduk = ["Carrier 60L", "Tenda Dome", "Sepatu Gunung", "Sleeping Bag", "Kompor Portable", "Cooking Set", "Headlamp", "Matras"];
console.log("Array Awal Alat Gunung:", daftarProduk);

daftarProduk.push("Flysheet", "Trekking Pole");
console.log("a) Setelah push 2 produk:", daftarProduk);

daftarProduk.unshift("Jaket Windproof");
console.log("b) Setelah unshift 1 produk:", daftarProduk);

let produkPop = daftarProduk.pop();
console.log(`c) Produk yang di-pop (dihapus akhir): ${produkPop}`);

let produkShift = daftarProduk.shift();
console.log(`d) Produk yang di-shift (dihapus awal): ${produkShift}`);

console.log("e) Apakah 'Laptop' ada di array?", daftarProduk.includes("Laptop"));
console.log("f) Posisi indeks 'Sepatu Gunung':", daftarProduk.indexOf("Sepatu Gunung"));

let slicedProduk = daftarProduk.slice(2, 5);
console.log("g) Ambil 3 produk dari indeks ke-2 (slice):", slicedProduk);

daftarProduk.splice(3, 0, "Mouse Wireless");
console.log("h) Setelah sisip 'Mouse Wireless' di indeks ke-3:", daftarProduk);
console.log("i) Jumlah total produk saat ini (.length):", daftarProduk.length);


console.log("\n=== SOAL JS-5: Function ===");
function hitungDiskon(harga, persen) {
    return harga - (harga * persen) / 100;
}

const hitungPPN = function(harga, tarif = 0.11) {
    return harga + (harga * tarif);
};

const hitungOngkir = (jarak) => {
    if (jarak <= 10) return 10000;
    if (jarak <= 25) return 25000;
    return 50000;
};

const kuadrat = angka => angka * angka;
console.log("d) Kuadrat dari 6:", kuadrat(6));

// e) Gabungkan fungsi
let hargaAwal = 750000; // Harga Carrier
let diskonPersen = 10;
let jarakKirim = 18;

let totalBelanja = hitungPPN(hitungDiskon(hargaAwal, diskonPersen)) + hitungOngkir(jarakKirim);
console.log(`e) Total belanja akhir (Harga carrier setelah diskon + PPN 11% + ongkir jarak ${jarakKirim}km): Rp ${totalBelanja}`);


console.log("\n=== SOAL JS-6: Object & Object Method ===");
const produkUnggulan = {
    nama: "Carrier 60L Ultralight",
    kategori: "Tas Gunung",
    harga: 750000,
    stok: 10,
    rating: 4.9,

    tampilkanInfo() {
        console.log(`Detail Alat Outdoor: ${this.nama} (${this.kategori}), Harga: Rp ${this.harga}, Stok: ${this.stok}`);
    }
};

console.log("a) Akses properti 'nama':", produkUnggulan.nama);
let keyHarga = "harga";
console.log("b) Akses properti 'harga' dengan bracket notation:", produkUnggulan[keyHarga]);

produkUnggulan.diskon = true;
console.log("c) Setelah tambah properti 'diskon':", produkUnggulan);

delete produkUnggulan.rating;
console.log("d) Setelah hapus properti 'rating':", produkUnggulan);

console.log("e) Apakah properti 'stok' ada?", "stok" in produkUnggulan);

console.log("f) Iterasi seluruh properti menggunakan for...in:");
for (let key in produkUnggulan) {
    if (typeof produkUnggulan[key] !== 'function') {
        console.log(`   ${key}: ${produkUnggulan[key]}`);
    }
}

console.log("g) Object.keys():", Object.keys(produkUnggulan));
console.log("h) Object.values():", Object.values(produkUnggulan));

console.log("i) Pemanggilan method object:");
produkUnggulan.tampilkanInfo();


console.log("\n=== SOAL JS-7: Iterable & Non-Iterable ===");
const warnaList = ["Hijau Army", "Oranye Outdoor", "Hitam", "Abu-abu"];
console.log("a) Iterasi array warna perlengkapan gunung dengan for...of:");
for (let w of warnaList) {
    console.log(`   Warna: ${w}`);
}

const mahasiswaObj = { nama: "Budi", nim: "123456", jurusan: "Informatika" };
console.log("b) Iterasi object mahasiswa dengan for...in:");
for (let prop in mahasiswaObj) {
    console.log(`   ${prop}: ${mahasiswaObj[prop]}`);
}

console.log("c) Iterasi string 'JavaScript' karakter per karakter:");
for (let char of "JavaScript") {
    console.log(`   Karakter: ${char}`);
}


console.log("\n=== SOAL JS-8: String & Number Built-in Function ===");
const inputEmail = "  Budi.Santoso@GMAIL.COM  ";
const inputHarga = "750000.50";
const kalimat = "Selamat datang di Toko Elektronik Online";

const cleanEmail = inputEmail.trim().toLowerCase();
console.log("a) Email ternormalisasi:", `"${cleanEmail}"`);
console.log("b) Mengandung '@gmail':", cleanEmail.includes("@gmail"));
console.log("c) Diawali 'budi':", cleanEmail.startsWith("budi"));

let domainIndex = cleanEmail.indexOf("@");
let domainEmail = cleanEmail.slice(domainIndex + 1);
console.log("d) Potong domain email:", domainEmail);

const kataArray = kalimat.split(" ");
console.log("e) Pecah kalimat menjadi array kata:", kataArray);

const kalimatBaru = kalimat.replace("Elektronik", "Digital");
console.log("f) Ganti kata:", kalimatBaru);

const numHarga = parseFloat(inputHarga);
console.log("g) Konversi inputHarga ke Number:", numHarga);

console.log("h) Harga dengan 2 desimal (toFixed):", numHarga.toFixed(2));
console.log("i) Panjang kalimat:", kalimat.length);


console.log("\n=== SOAL JS-9: Scope, Hoisting & Closure ===");
// a) Scope demonstration
let globalVar = "Variabel Global";
function testScope() {
    let localVar = "Variabel Lokal Function";
    console.log("Di dalam fungsi:", globalVar, "dan", localVar);
}
testScope();

if (true) {
    let blockVar = "Variabel Block Scope";
    console.log("Di dalam blok if:", blockVar);
}

// b) Hoisting
console.log("Hoisting Function Declaration berhasil:", demoHoistedFunc());
function demoHoistedFunc() {
    return "Fungsi ini di-hoist dengan sempurna!";
}

console.log("Hoisting var (nilai undefined):", varHoisted);
var varHoisted = "Data Var";

try {
    console.log(letHoisted);
} catch (error) {
    console.log("Hoisting let error (Temporal Dead Zone):", error.message);
}
let letHoisted = "Data Let";

// c) Closure buatKeranjang
function buatKeranjang() {
    let items = [];
    let totalHarga = 0;

    return {
        tambahItem(nama, harga) {
            items.push({ nama, harga });
            totalHarga += harga;
        },
        hapusItem(nama) {
            let index = items.findIndex(item => item.nama === nama);
            if (index !== -1) {
                totalHarga -= items[index].harga;
                items.splice(index, 1);
            }
        },
        lihatKeranjang() {
            console.log("Isi Keranjang Belanja Outdoor:", items, `| Total: Rp ${totalHarga}`);
        }
    };
}

const keranjang1 = buatKeranjang();
const keranjang2 = buatKeranjang();

keranjang1.tambahItem("Carrier 60L", 750000);
keranjang2.tambahItem("Tenda Dome 4P", 550000);

console.log("Buktinya instance keranjang independen:");
keranjang1.lihatKeranjang(); // Hanya ada Carrier
keranjang2.lihatKeranjang(); // Hanya ada Tenda


console.log("\n=== SOAL JS-10: Date Object ===");
const sekarang = new Date();
const opsiTanggal = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log("a) Tanggal format lokal:", sekarang.toLocaleDateString('id-ID', opsiTanggal));

// b) Hitung hari menuju tahun baru
let tahunDepan = sekarang.getFullYear() + 1;
let tahunBaru = new Date(tahunDepan, 0, 1);
let selisihHari = Math.ceil((tahunBaru - sekarang) / (1000 * 60 * 60 * 24));
console.log(`b) Sisa hari menuju Tahun Baru ${tahunDepan}: ${selisihHari} hari`);

// c) Fungsi formatTanggalIndonesia
function formatTanggalIndonesia(date) {
    let d = String(date.getDate()).padStart(2, '0');
    let m = String(date.getMonth() + 1).padStart(2, '0');
    let y = date.getFullYear();
    return `${d}/${m}/${y}`;
}
console.log("c) Format DD/MM/YYYY:", formatTanggalIndonesia(sekarang));

// d) Umur dalam hari
let tglLahir = new Date("2000-05-15");
let selisihWaktuLahir = sekarang - tglLahir;
let umurHari = Math.floor(selisihWaktuLahir / (1000 * 60 * 60 * 24));
console.log(`d) Umur dalam hari sejak tanggal lahir: ${umurHari} hari`);


console.log("\n=== SOAL JS-11: Destructuring, Spread & Rest ===");
// a) Object Destructuring
const pesanan = {
    idPesanan: "ORD-001",
    pelanggan: "Budi Pendaki",
    totalHarga: 1300000,
    statusBayar: true,
    alamatKirim: "Jl. Merdeka No. 10"
};

const { idPesanan, pelanggan, totalHarga: totalOrd } = pesanan;
const { statusBayar: sudahBayar } = pesanan;
const { kurirPengiriman = "JNE" } = pesanan;
console.log("a) Destructure:", idPesanan, pelanggan, totalOrd, "Sudah Bayar:", sudahBayar, "Kurir:", kurirPengiriman);

function cetakPesanan({ idPesanan, pelanggan }) {
    console.log(`   [Parameter Destructure] Pesanan ${idPesanan} atas nama ${pelanggan}`);
}
cetakPesanan(pesanan);

// b) Array Destructuring
const koordinat = [106.8456, -6.2088, "Jakarta", "Indonesia"];
const [longitude, latitude, , negara] = koordinat;
console.log("b) Koordinat:", longitude, latitude, "Negara:", negara);

let a = 10, b = 20;
[a, b] = [b, a];
console.log("b) Tukar nilai variabel (a, b):", a, b);

// c) Spread Operator
const arrayAsli = [1, 2, 3];
const arrayCopy = [...arrayAsli];
const gabungArray = ["Awal", ...arrayAsli, "Tengah", 4, 5];
const updateProdukObj = { ...produkUnggulan, harga: 800000, stok: 15 };
const angkaArrayNilai = [45, 88, 12, 99, 34];
const nilaiMax = Math.max(...angkaArrayNilai);
console.log("c) Spread Copy:", arrayCopy);
console.log("c) Spread Gabung:", gabungArray);
console.log("c) Spread Update Object:", updateProdukObj);
console.log("c) Nilai Max menggunakan Spread:", nilaiMax);

// d) Rest Parameter
function hitungRataRata(...angka) {
    if (angka.length === 0) return 0;
    let sum = angka.reduce((acc, curr) => acc + curr, 0);
    return sum / angka.length;
}
console.log("d) Rata-rata angka (80, 90, 100):", hitungRataRata(80, 90, 100));

function buatPesanan(namaPemesan, ...daftarMenu) {
    console.log(`d) Pesanan Alat Gunung dari ${namaPemesan}:`, daftarMenu);
}
buatPesanan("Siti", "Carrier 60L x1", "Tenda Dome x1", "Kompor Mawar x1");