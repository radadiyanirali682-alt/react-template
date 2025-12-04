import React from "react";
import { FaMapMarkerAlt, FaBuilding, FaLandmark, FaTrophy } from "react-icons/fa";

export default function Profile() {
  return (
    <>
      {/* ===================== PROFILE SECTION ===================== */}
      <div className="profile-section">
        <div className="profile-left">
          <h2>Profil Sekolah</h2>
          <p>Profil sekolah kami secara keseluruhan ...</p>
          <button className="btn">Lebih Lanjut</button>
        </div>

        <div className="profile-right">
          <div className="card">
            <div className="icon"><FaBuilding /></div>
            <h3>Fasilitas</h3>
            <p>Lorem ipsum dolor sit amet adipiscing aqua lorem ipsum.</p>
          </div>

          <div className="card">
            <div className="icon"><FaMapMarkerAlt /></div>
            <h3>Lokasi</h3>
            <p>Lorem ipsum dolor sit amet adipiscing aqua lorem ipsum.</p>
          </div>

          <div className="card">
            <div className="icon"><FaLandmark /></div>
            <h3>Sejarah</h3>
            <p>Lorem ipsum dolor sit amet adipiscing aqua lorem ipsum.</p>
          </div>

          <div className="card">
            <div className="icon"><FaTrophy /></div>
            <h3>Prestasi</h3>
            <p>Lorem ipsum dolor sit amet adipiscing aqua lorem ipsum.</p>
          </div>
        </div>
      </div>
    </>
  );
}
