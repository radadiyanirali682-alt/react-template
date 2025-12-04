import React from "react";
import Arrow from "./Arrow";
import Icon from "./Icon";



export default function Agenda() {
  return (
    <>
      {/* ===================== NEWS & AGENDA SECTION ===================== */}
      <div className="news-agenda">
        <div className="container">
          <div className="section-header">
            <h2>Berita dan Agenda</h2>

            <div className="search-box">
              <Icon name="search" className="search-icon" />
              <input type="text" placeholder="Search" />
            </div>
          </div>

          <div className="content">

            {/* ========== NEWS ========== */}
            <div className="news">

              <div className="news-item">
                <img src="image1.jpg" alt="" />
                <div className="news-info">
                  <h3>Belajar di Rumah</h3>
                  <p>Lorem ipsum dolor sit amet adipicing amet adipicing amet adipisci aqua lorem ipsum.</p>
                  <span>20 Juni</span>
                </div>
                <Arrow className="arrow-icon" />
              </div>

              <div className="news-item">
                <img src="image2.jpg" alt="" />
                <div className="news-info">
                  <h3>Kegiatan Belajar Mengajar di Rumah</h3>
                  <p>Lorem ipsum dolor sit amet adipicing amet adipicing amet adipisci aqua lorem ipsum.</p>
                  <span>20 Juni</span>
                </div>
                <Arrow className="arrow-icon" />
              </div>

              <div className="news-item">
                <img src="images3.jpg" alt="" />
                <div className="news-info">
                  <h3>Kegiatan Belajar Mengajar di Rumah</h3>
                  <p>Lorem ipsum dolor sit amet adipicing amet adipicing amet adipisci aqua lorem ipsum.</p>
                  <span>20 Juni</span>
                </div>
                <Arrow className="arrow-icon" />
              </div>

              <div className="news-item">
                <img src="imaeg4.jpg" alt="" />
                <div className="news-info">
                  <h3>Kegiatan Pembelajaran Daring</h3>
                  <p>Lorem ipsum dolor sit amet adipicing amet adipicing amet adipisci aqua lorem ipsum.</p>
                  <span>20 Juni</span>
                </div>
                <Arrow className="arrow-icon" />
              </div>
            </div>

            {/* ========== AGENDA ========== */}
            <div className="agenda">

              <div className="agenda-item">
                <img src="logo.jpg" alt="" />
                <div>
                  <span className="date">01 - 06 - 2021</span>
                  <h4>Deklarasi Sekolah Ramah Anak</h4>
                </div>
                <Arrow className="arrow-icon" />
              </div>

              <div className="agenda-item">
                <img src="logo.jpg" alt="" />
                <div>
                  <span className="date">01 - 06 - 2021</span>
                  <h4>Pembagian Ijazah</h4>
                </div>
                <Arrow className="arrow-icon" />
              </div>

              <div className="agenda-item">
                <img src="logo.jpg" alt="" />
                <div>
                  <span className="date">01 - 06 - 2021</span>
                  <h4>Pemberitahuan PPDB 2020/2021</h4>
                </div>
                <Arrow className="arrow-icon" />
              </div>

            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}
