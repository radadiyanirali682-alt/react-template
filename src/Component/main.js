import React from "react";
import { FaPlay } from "react-icons/fa";
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaLandmark,
  FaTrophy
} from "react-icons/fa";


export default function Main() {
  return (
    <>
      {/* ===================== SAMBUTAN SECTION ===================== */}
      <div className="sambutan-section">
        <div className="sambutan-image">
          <img src="mainn.jpg" alt="Principal" />
          <div className="icon"><FaMapMarkerAlt /></div>
          <div className="play-icon"><FaPlay /></div>
        </div>

        <div className="sambutan-text">
          <h2>Sambutan Kepala Sekolah SMP Negeri 1 Cibadak</h2>
          <p>Puji dan syukur mar kita panjatkan kehadirat Allah SWT...</p>
          <a href="#" className="btn btn-primary">Lebih Lanjut</a>
        </div>
      </div>

      
    </>
  );
}
