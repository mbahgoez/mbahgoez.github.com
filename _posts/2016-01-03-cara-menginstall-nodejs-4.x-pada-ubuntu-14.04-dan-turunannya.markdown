---
layout: post
title: Cara menginstall Node JS Versi 4.x pada Ubuntu 14.04 LTS dan turunannya
date: 2016-02-01 21:52:00 +0800
categories: Node JS
author:  Bagus Mantonafi
---


Menginstall Node JS pada linux sangatlah mudah, setidaknya ada dua cara untuk menginstall Node JS pada linux pertama menggunakan terminal dan kedua bisa dengan mendownload file tar.gz pada website resmi Node JS. cara pertama adalah yang termudah karena kita cukup memasukan perintah ke terminal kemudian terminal akan mendownload nodejs sekaligus menginstallnya secara otomatis, yang artinya saat proses penginstallan kita membutuhkan koneksi internet. 

lantas bagaimana jika komputer yang akan diinstall Node JS tidak memiliki koneksi internet. Anda bisa melakukannya dengan mengunduh file tar.gz pada laman resmi node js terlebih dahulu saat memiliki koneksi internet, misalnya saat anda berada di area free wifi atau warnet kemudian mengkompilenya di komputer yang akan diinstall.

Nah, tanpa basa-basi langsung saja kita ke caranya.

### Install Node Js menggunakan terminal

{% highlight bash %}
$ curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
$ sudo apt-get install -y nodejs
$ sudo apt-get install -y build-essential
{% endhighlight %}


_* Untuk menginstall dengan file tar.gz nanti akan menyusul._

Demikian cara menginstall node js 4.x pada ubuntu 14.04 dan turunannya cara ini dapat diterapkan pada linux yang menggunakan package manager apt-get seperti ubuntu dan turunannya. untuk linux yang lain seperti arch linux, fedora bisa menggunakan package managernya masing-masing caranya ada pada website official.

