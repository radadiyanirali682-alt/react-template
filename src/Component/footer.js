import React from "react";
import Icon from "./Icon"; // <-- Reusable icon component

export default function Footer() {
  return (
    <>
      {/* ===================== FOOTER ===================== */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-col footer-left">
            <img src="logo.jpg" alt="Logo" className="footer-logo" />

            <address className="footer-address">
              Jl. Siliwangi No 123, Cibadak, Sukabumi, Jawa Barat 43351, Indonesia
            </address>

            <div className="footer-emails">
              <a href="mailto:info@smpn1cibadak.sch.id">info@smpn1cibadak.sch.id</a><br/>
              <a href="mailto:smpn1cbd_kabsi@yahoo.co.id">smpn1cbd_kabsi@yahoo.co.id</a>
            </div>
          </div>

          <div className="footer-col footer-links">
            <div className="links-block">
              <h4>Jelajah</h4>
              <ul>
                <li><a href="#">Sambutan</a></li>
                <li><a href="#">Profil Sekolah</a></li>
                <li><a href="#">Berita</a></li>
                <li><a href="#">Galeri</a></li>
              </ul>
            </div>

            <div className="links-block">
              <h4>Halaman Umum</h4>
              <ul>
                <li><a href="#">Data Guru</a></li>
                <li><a href="#">PPDB SMPN 1 Cibadak</a></li>
                <li><a href="#">Panduan PPDB</a></li>
                <li><a href="#">Lokasi</a></li>
                <li><a href="#">Kontak</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-col footer-social">
            <h4>Media Sosial</h4>
            <div className="social-buttons">
              <a className="social-btn" href="#"><Icon name="twitter" /></a>
              <a className="social-btn" href="#"><Icon name="facebook" /></a>
              <a className="social-btn" href="#"><Icon name="instagram" /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-line"></div>
          <p>
            Copyright © SMP Negeri 1 Cibadak. 
            All rights Reserved. Hosting By IDCloudHost
          </p>
        </div>
      </footer>
    </>
  );
}
