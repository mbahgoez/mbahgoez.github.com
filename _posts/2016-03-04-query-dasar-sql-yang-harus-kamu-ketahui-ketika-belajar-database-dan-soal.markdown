---
layout: post
title: 5 Query SQL Dasar yang harus kamu ketahui ketika belajar Database + Soal Latihan
date: 2016-03-04 14.00 +8000
categories: SQL
author: Bagus Mantonafi
description: beberapa Query dasar SQL. Query dasar ini sangat cukup jika hanya digunakan untuk membuat aplikasi yang dapat melakukan operasi CRUD sederhana. seperti SELECT, INSERT, UPDATE dan DELETE
keyword: belajar sql, crud dengan sql, belajar mysql, sql dasar, menggunakan mysql, perintah select di mysql, membuat database dengan cmd, belajar database mysql dengan cmd, belajar sql di cmd, belajar database dengan mysql, belajar database di mysql, perintah dasar sql terminal, contoh soal sql dasar, soal sql pemula, mysql untuk pemula
image: /image/code-wallpaper-20.jpg
---


Kali ini saya akan menjelaskan 5 Query SQL dasar yang seharusnya diketahui oleh pemula sebelum belajar SQL lebih dalam lagi. Query berikut ini sendiri query dasar yang cukup sering digunakan utamanya untuk membuat operasi <b>CRUD</b> pada aplikasi atau web. Dikarenakan di tutorial kali ini ada istilah database yang belum tentu teman-teman tau, ada baiknya teman-teman membaca tutorial sebelumnya mengenai <a href="">Istilah dasar pada database</a> dan barangkali disini ada yang belum tau bagaimana cara menggunakan SQL dan melakukan operasi <b>CREATE</b> bisa membaca <a href="">Cara belajar mengunakan MySQL dan membuat Database beserta tabelnya</a>.

<b class="none">Sebelumnya, silahkan masukan perintah Query dibawah ini ke terminal/cmd untuk bahan praktek.</b>

{% highlight sql %}
CREATE DATABASE IF NOT EXISTS belajar;
USE belajar;

DROP TABLE IF EXISTS customers;

CREATE TABLE IF NOT EXISTS customers(
    id int PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(255) NOT NULL,
    alamat VARCHAR(255) NOT NULL,
    kota VARCHAR(255) NOT NULL,
    negara VARCHAR(255) NOT NULL
);


INSERT INTO customers(nama, alamat, kota, negara) 
VALUES ('Bagus Mantonafi', 'Jalan Pulau Saelus', 'Denpasar', 'Indonesia'),
('Hendry', 'Jalan Watturenggong', 'Denpasar', 'Indonesia'),
('John Doe', 'St. sixth nine', 'New York', 'USA');
{% endhighlight %}


<hr>

## 1. SELECT

### Untuk Menampilkan Data
<b>SELECT</b> berfungsi untuk menampilkan data pada table secara kesuluruhan.

#### Syntax Dasar :
{% highlight sql %}
/** Syntax dasar SELECT **/
SELECT * FROM nama_tabel

/** ATAU **/

/** Syntax dasar SELECT **/
SELECT nama_field, nama_field, nama_field FROM nama_tabel
{% endhighlight %}

#### Contoh Penggunaan :

{% highlight sql %}
SELECT * FROM customers;
/** penggunaan tanda * (bintang) artinya digunakan memilih semua field **/

SELECT nama, kota FROM customers;
/** nama dan kota merupakan sebuah nama_field **/
{% endhighlight %}



<hr>


# 2. WHERE

### Untuk memfilter data/record
<b>where</b> memiliki fungsi untuk memfilter data/record. pengunaan <b>select</b> dapat menampilkan keseluruhan data, sedangkan dengan menambah perintah <b>where</b> setelah <b>select</b> maka data yang ditampilkan dapat difilter/disaring.
Dengan menggunakan <b>where</b> teman-teman juga dapat menggunakan beberapa <b>operator</b> layaknya di bahasa pemograman seperti :

<ul class="material">
    <li>Operator Sama Dengan <b>=</b></li>
    <li>Operator Tidak Sama Dengan <b><></b></li>
    <li>Operator Lebih Besar Dari <b>></b></li>
    <li>Operator Lebih Kecil Dari <b><</b></li>
    <li>Operator Lebih Besar Sama Dengan <b>>=</b></li>
    <li>Operator Lebih Kecil Sama Dengan <b><=</b></li>
    <li>Bedasarkan jangkauan nilai <b>BETWEEN</b></li>
    <li>Dan untuk memfilter bedasarkan pola huruf yang sama <b>LIKE</b></li>
</ul>

<div class="penting">
    <div class="alert">
        <i class="icon ion-pin"></i>
    </div>
    <div class="notice">
    <h4>PENTING : </h4>
    <p>Saya menyarankan untuk teman-teman agar tidak menghafalkan operator diatas secara paksa. lebih baik dipraktekan, secara tidak langsung nantinya teman-teman bisa hafal dengan sendirinya</p>
    </div>
</div>


#### Syntax Dasar :

{% highlight sql %}
SELECT * FROM nama_tabel WHERE nama_field = 'nilai'
{% endhighlight %}

#### Contoh Penggunaan :

Menampilkan customers yang memiliki id 1
{% highlight sql %}
SELECT * FROM customers WHERE id = '1';
/** query diatas untuk menampilkan customers yang memiliki id 1 **/
{% endhighlight %}
 
Menampilkan customers yang tidak memiliki nama 'bagus mantonafi'
 {% highlight sql %}
SELECT * FROM customers WHERE nama <> 'Bagus Mantonafi';
/** query diatas untuk menampilkan customers yang memiliki nama selain 'bagus mantonafi' **/
{% endhighlight %}

Menampilkan customers yang bertempat tinggal di kota denpasar
{% highlight sql%}
SELECT * FROM customers WHERE kota = 'Denpasar';
/** query diatas untuk menampilkan customers yang bertempat tinggal di kota denpasar **/
{% endhighlight %}

Menampilkan customer yang tinggal di negara indonesia
{% highlight sql%}
SELECT * FROM customers WHERE negara = 'Indonesia';
/** query diatas untuk menampilkan customer yang tinggal di negara indonesia **/
{% endhighlight %}

# 3. INSERT

### Memasukan Data/Record baru
Untuk memasukan atau menambah record/data baru ke table

#### Sytax Dasar :

<b class="none">Tanpa mendefiniskan nama field</b>

{% highlight sql %}
INSERT INTO nama_tabel VALUES('nilai_masukan', 'nilai_masukan', 'dst');
{% endhighlight %}

<b class="none">Dengan mendefinisikan nama field</b>
{% highlight sql %}
INSERT INTO nama_tabel('nama_field', 'nama_field', 'dst' ) VALUES('nilai_masukan', 'nilai_masukan', 'dst');
{% endhighlight %}

Syntax diatas memang sedikit susah <i>dibaca</i> karena memang sangat panjang oleh karena itu teman-teman dapat menyederhanakannya dengan menambah baris baru setelah <i>nama tabel</i> menjadi seperti dibawah ini.
{% highlight sql %}
INSERT INTO nama_tabel('nama_field', 'nama_field', 'dst' ) 
VALUES('nilai_masukan', 'nilai_masukan', 'dst');
/** lebih rapi dari yang diatas
{% endhighlight %}


#### Contoh Penggunaan :
Memasukan data berikut ini ke tabel :
<table class="database">
    <tr>
        <td>nama</td>
        <td>:</td>
        <td>Sholahudin</td>
    </tr>
    <tr>
        <td>kota</td>
        <td>:</td>
        <td>Jakarta</td>
    </tr>
    <tr>
        <td>negara</td>
        <td>:</td>
        <td>Indonesia</td>
    </tr>
</table>

<b class="none">Tanpa mendefiniskan nama field</b>
{% highlight sql %}
INSERT INTO customers VALUES('', 'Sholahudin', 'Jakarta', 'Indonesia');
{% endhighlight %}


<b class="none">Dengan mendefinisikan nama field</b>
{% highlight sql %}
INSERT INTO customers('nama', 'kota', 'negara') 
VALUES('Sholahudin', 'Jakarta', 'Indonesia');
{% endhighlight %}






# 4. UPDATE

### Memperbarui Data/Record
Memperbarui atau memberbaiki record/data yang sudah ada pada tabel.



{% highlight sql %}
UPDATE customers
SET nama='Hendry'
WHERE id = '4';
{% endhighlight %}

Query diatas hanya mengubah nama saja. Query dibawah ini dapat mengubah nama dan kota sekaligus cukup dengan menambahkan <i>nama field</i> pada <b>SET</b> saja dan pisahkan dengan koma <b>,</b>.

{% highlight sql %}
UPDATE customers
SET nama = 'Agix', kota = 'Gianyar'
WHERE name = 'Hendry';
{% endhighlight %}

<div class="penting">
    <div class="alert">
        <i class="icon ion-pin"></i>
    </div>
    <div class="notice">
    <h4>PENTING : </h4>
    <p>Setiap mengubah data dengan klausa <b>UPDATE</b> diharapkan menambah klausa <b>WHERE</b> di akhir. Tujuannya agar tidak mengubah seluruh record.
Silahkan mencoba tanpa klausa <b>WHERE</b> agar tau dampak yang ditimbulkan</p>
    </div>
</div>



# 5. DELETE

### Menghapus Data/Record
Penggunaan <b>DELETE</b> digunakan untuk menghapus record pada tabel. baik itu satu data/record atau lebih.
{% highlight sql %}
DELETE FROM customers
WHERE negara = 'USA';
{% endhighlight %}


<div class="penting">
    <div class="alert">
        <i class="icon ion-pin"></i>
    </div>
    <div class="notice">
    <h4>PENTING : </h4>
    <p>Sama halnya klausa <b>UPDATE</b>, klausa <b>DELETE</b> juga harus diakhiri dengan <b>WHERE</b>
penggunaan klausa <b>DELETE</b> tanpa <b>WHERE</b> dapat menyebabkan seluruh record yang telah dimasukan ke tabel terhapus</p>
    </div>
</div>

<hr>

## Latihan Soal :
<ol class="material">
    <li>Buatlah database dengan nama <b class="none">belajar</b>?</li>
    <li>Di Database belajar buatlah tabel dengan nama <b class="none">barang</b> dengan field <mark>kode_barang</mark>, <mark>nama_barang</mark>, <mark>harga_barang</mark> dan <mark>total_barang</mark> silahkan tentukan sendiri tipe data dan panjangnya!</li>
    <li>Masukan data dibawah ini ke tabel barang tersebut!</li>
    <table border="1px" class="database">
        <thead>
            <tr>
                <td>kode_barang</td>
                <td>nama_barang</td>
                <td>harga_barang</td>
                <td>total_barang</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1234</td>
                <td>Laptop ASUS X453MA</td>
                <td>4000000</td>
                <td>100</td>
            </tr>
            <tr>
                <td>1235</td>
                <td>Macbook Air MD2015</td>
                <td>14000000</td>
                <td>20</td>
            </tr>
            <tr>
                <td>1236</td>
                <td>Printer Epson</td>
                <td>1000000</td>
                <td>40</td>
            </tr>
            <tr>
                <td>1237</td>
                <td>Flashdisk Kingston 8GB</td>
                <td>80000</td>
                <td>80</td>
            </tr>
            <tr>
                <td>1238</td>
                <td>Intel Core i5</td>
                <td>2200000</td>
                <td>10</td>
            </tr>
                        
            
        </tbody>        
    </table>
    
    <li>Tampilkan barang dengan <mark>kode_barang</mark> 1238!</li>
    <li>Ubah nama barang tersebut dengan nama <b class="none">Intel Core i5 4594</b></li>
    <li>Ubah nama barang dengan nama <b class="none">Flashdisk Kingston 8GB</b> menjadi <b class="none">Kingston 8GB</b></li>
    <li>Tampilkan barang yang memiliki harga diatas 10 Juta</li>
    <li>Hapus barang yang bernama <b class="none">Printer Epson</b></li>
</ol>


<hr>

Nah itulah 5 Query SQL dasar yang harus diketahui sebelum kita mempelajari SQL lebih dalam lagi teman-teman. Penggunaannya sangat penting, Query diatas nantinya dapat dipadukan dengan Query lainnya yang belum kita pelajari seperti INNER JOIN, OUTTER JOIN dll. Jadi lebih baik dimengerti dulu 5 Query diatas sebelum lanjut ke tutorial selanjutnya!

<hr>

**Link Referensi**
<br>
[W3schools SQL][w3sql]
<br>
[W3schools SQL Quick Refference][w3sqlq]



[w3sql]:http://w3schools.com/sql/
[w3sqlq]:http://w3schools.com/sql/sql_quickref.html