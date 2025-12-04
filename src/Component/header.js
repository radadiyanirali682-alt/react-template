import React from "react";
import Button from "./Button";
import Link from "./Link"; // Import reusable Link component

export default function Header() {
  return (
    <>
      {/* ===================== HEADER START ===================== */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
          <div className="container-fluid">
            <a className="navbar-brand fw-bold text-white" href="#">
              <img src="logo.jpg" alt="Logo" />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="menu"
            >
              <ul className="navbar-nav">
                <Link href="#" text="Home" />
                <Link href="#" text="About" />
                <Link href="#" text="Guru" />
                <Link href="#" text="Siswa" />
                <Link href="#" text="Pendaftaran" />
                <Link href="#" text="Lainya" />
                <Link href="#" text="Kontak" />
              </ul>
            </div>
          </div>
        </nav>

        <div className="header-content">
          <p>MOTTO</p>
          <h5>
            SMP N 1 Cibadak (Cerdas Beretika) Ceria, Empati, Rasional, Damai,
            Aktif, Sabar, Bersih, Elok, Tulus, Iman, Konsisten, Amanah.
          </h5>

          <Button text="Contact Us" />
        </div>
      </header>
      {/* ===================== HEADER END ===================== */}
    </>
  );
}
