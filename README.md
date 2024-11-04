Naming Conventions in programming languages

camelCase : cartQuantity
PascalCase: CartQuantity
kebab-case: cart-quantity
snake_case: cart_quantity

##############################
Falsy Value
false 0 '' NaN undefined null

Truthy Value
Any value that is not on Falsy Value
##############################

let result = 0 && 'pengunjung';
console.log(result); // pengunjung

# ini adalah salah satu bentuk shrotcut pemberian nilai jika ingin menampilkan nilai default

let result = undefined || 'USD';
console.log(result); // USD

let result = 'Rp' || 'USD';
console.log(result); // Rp

# yang pertama true yang akan ditampilkan

# pennulisan object

menggunakan dot adalah default
product.name;
tapi apabila menggunakan dot tidak bisa, maka gunakan bracket notation
product['delivery-time']

# perbedaan javascript object dan JSON

JSON memiliki less feature than javascript object
JSON nama property nya semua wajib menggunakan string dan double quotes,sedangkan javascript object tidak wajib
JSON tidak support function seperti halnya javascipt object
tapi JSON universal di semua bahasa pemrograman, sehingga hanya digunakan JSON ketika send data between computers yang menggunakan bahasa pemrograman yang berbeda dan untuk store data

# Built in syntax untuk konversi javascript object ke JSON

JSON.stringify(nama_object)

dengan begitu, siap dikirim atau distore

# cara mengecek jika object bernilai null atau kosong

score === null
!score

keduanya sama

# default operator untuk memberikan nilai ke variable sesuai dengan kondisi nilainya

let namaVariable = 'adi' || 'eti';
namaVariable akan berisi 'adi'

let namaVariable = null || 'eti';
namaVariable akan berisi 'eti'

let score = JSON.parse(localStorage.getItem("score")) || {
wins: 0,
loses: 0,
ties: 0,
};

Jika di sebelah kiri null

# penamaan jika ingin menyimpan nilai object ke dalam variabel

const message = object4.message;
const { message } = object4;

disarankan pakai contoh ke dua \
biasa disebut destructuring

const object4 = {
message: "Good job!",
price: 799,
};

// const message = object4.message;
const { message, price } = object4;
console.log(message);
console.log(price);

# Penggunaan localstrorage

Pastikan nama variable di localstorage tidak ada yang sama di dalam satu komputer, jangkauan nya 1 komputer, bukan 1 file


# Perbedaan document dan window object di DOM
document itu halaman
window itu browser, contoh: window.console.log();
window.document.querySelector();

kita tidak perlu mengetik window karena JavaScript akan otomatis menambahkannya
                            