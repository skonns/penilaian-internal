import React from 'react';
import './AboutMe.css'; // Import CSS file for styling

function AboutMe() {
  return (
    <div className="AboutMe">
      <h1 className="title">About Me</h1>
      <div className="brandContainer">
        <h3 className="brandTitle">Brand Story</h3>
        <p className="brandText">Kenalin, kami Pizza Hut.</p>
        <p>Cerita kami di Indonesia, dimulai pada tahun 1984, dimana Outlet Pertama Pizza Hut dibuka di gedung Djakarta Theatre. Hingga di tahun 2004, Pizza Hut di Indonesia makin mengepakkan sayapnya lewat akuisisi dari Sriboga Group. Pizza Hut Indonesia kemudian melakukan penawaran umum perdana melalui Bursa Efek Indonesia di tahun 2018.
        </p>
        <p>
        Produk-produk Pizza Hut mendapatkan Sertifikasi Halal dari Majelis Ulama Indonesia sejak tahun 1997. Pizza Hut Indonesia selalu memastikan kepatuhan halal baik dalam proses perpanjangan saat berakhir maupun sertifikasi untuk produk-produk baru sebelum diperkenalkan kepada Masyarakat.
        </p>
        <p>Hingga saat ini Pizza Hut telah berada di Indonesia selama 40 tahun, dan saat ini mempekerjakan lebih dari 13.000 karyawan di 600+ Outlet dari Sabang sampai Merauke, dipimpin oleh jajaran Direksi dan Komisaris yang keseluruhannya Warga Negara Indonesia.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
