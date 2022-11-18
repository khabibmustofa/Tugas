// ---------------------------------------------------------------------------------------------------
// File name: soal1.js 
// Buatlah sebuah program dari akar pangkat 2 dari x dengan x harus bilangan genap, dengan kondisi sebagai berikut :
// Kondisi 1: Jika user input angka kurang dari 0 , user get error message "Tidak bisa input bilangan negatif" 
// Kondisi 2: Jika user input angka ganjil, user get error message "Tidak bisa input bilangan ganjil"
// Hint : gunakan rumus sqrt(x)
// ---------------------------------------------------------------------------------------------------

var prompt = require('prompt-sync')();

// Deklrasi variabel & inputan
const number = prompt('Silakan masukkan bilangan (contoh: 4) : ');

// Cek, jika number bilangan 0 atau bilangan negatif 
if(number <= 0) {
    console.log('Tidak bisa input bilangan 0 atau negatif')
} else if(number % 2 == 1) {        // Jika number bilangan ganjil
    console.log('Tidak bisa input bilangan ganjil')
} else {                            // Jika number bilangan genap
    const result = Math.sqrt(number)
    console.log(`Hasil dari akar pangkat 2 bilangan ${number} adalah ${result}`)
}
