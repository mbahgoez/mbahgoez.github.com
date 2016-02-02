---
layout: post
title: "Mudahnya membuat aplikasi Android dan iOS dengan Ionic"
date: 2016-02-01 23:23:40 +0800
categories: ionic
author: Bagus Mantonafi
---
Aplikasi mobile saat ini sudah menjadi tren di kalangan developer. banyaknya permintaan ini diakibatkan karena mulai berjamurnya pengguna smartphone. sebagai seorang programmer situasi seperti ini bisa menjadi ladang penghasilan yang menggiurkan. karena dengan banyaknya pengguna smartphone maka permintaan akan konten digital misalnya seperti aplikasi mobile akan meningkat.

Permasalahannya untuk mengembangkan sebuah aplikasi mobile yang tersedia di berbagai platform, programmer setidaknya menguasai bahasa pemograman yang dianjurkan. sebagai contoh jika ingin membuat aplikasi android setidaknya developer mengerti bahasa pemograman java. kemudian jika ingin membuat aplikasi untuk ios setidaknya menguasai pemograman semisalnya Objective C atau Swift.

Bagaimana caranya jika programmer ingin sekali coding namun hasil codingannya bisa untuk berbagai platform, tanpa harus menulis ulang dari awal dengan bahasa pemograman yang berbeda. lalu bagaimana jika seorang programmer ingin membuat aplikasi mobile sedangkan kemampuannya hanya sebatas HTML, CSS dan Javascript.

saat ini banyak sekali bermunculan tools maupun framework yang dapat digunakan untuk membangun aplikasi mobile menggunakan teknologi web sebagai contohnya ionic framework. ionic framework sendiri adalah framework yang dapat diandalkan untuk membangun aplikasi mobile menggunakan teknologi web namun meski begitu tetap focus pada performa. Sehingga aplikasi yang dibuat menggunakan ionic dapat berjalan dengan mulus layaknya aplikasi yang dibangun secara native. untuk dapat menggunakan ionic anda setidaknya menguasai HTML, CSS dan Javascript, jika sudah mengusai angularjs itu sangat memudahkan nantinya karena ionic ini dibuatnya menggunakan gaya mvc angularjs.

**Beberapa syarat untuk dapat menginstall ionic**
<ol class="material">
	<li>Koneksi internet</li>
	<li>Komputer yang sudah terinstall nodejs</li>
</ol>

**Langkah-langkah install**
<ol class="material">
	<li>Buka terminal/cmd</li>
	<li>
		Untuk windows dapat mengetik <kbd>npm install -g ionic cordova</kbd> pada terminal/cmd
	</li>
	<li>
		Jika menggunakan Linux dan Mac dapat dengan mengetik <kbd>sudo npm install -g ionic cordova</kbd>
	</li>
	<li>jika proses instalasi sudah selesai silahkan mengetik ke terminal dengan perintah <kbd>cordova -v && ionic -v</kbd>, atau <kbd>cordova -v</kbd> dan <kbd>ionic -v</kbd> untuk mengetahui apakah ionic berhasil terinstall atau tidak dan juga untuk mengetahui versi berapakah yang sudah terinstal</li>
	<img src="/image/cek-versi-ionic.png" alt="">
</ol>


**Membuat Project ionic**
<ol class="material">
	<li>Buka terminal/cmd.</li>
	<li>Masukan perintah <kbd>ionic start inicontoh blank</kbd> jika di linux dan mac gagal silahkan menambahkan "sudo" di depan perintah tadi sehingga menjadi <kbd>sudo ionic start inicontoh blank</kbd>.</li>
	<em>*pastikan tersambung dengan internet karena ionic akan mendownload project dari repository</em>
	<li>Jika sudah nanti ionic akan membuat project atau folder bernama inicontoh. didalam folder inilah nanti kita akan berkerja.</li>
	<li>Panggil directory/folder "inicontoh" menggunakan perintah <kbd>cd inicontoh</kbd>.</li>
	<li>Lalu ketikan <kbd>ionic serve</kbd> untuk menjalankan server. nanti secara otomatis ionic akan membuka browser dan mengarahkan ke localhost:4000 dan dibrowser ini nanti kita akan dapat melihat preview tampilan dari aplikasi mobile yang akan dibuat.</li>
</ol>