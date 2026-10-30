import { Link } from 'react-router-dom'
import './Beranda.css'
import './Detail.css'

export default function TidakDitemukan() {
  return (
    <section className="halaman-detail">
      <p className="kicker">HALAMAN TIDAK TERSEDIA</p>
      <h1>404</h1>
      <p className="subjudul-detail">
        Halaman yang kamu cari tidak ditemukan atau alamatnya sudah berpindah.
      </p>
      <Link to="/" className="tombol">
        Kembali ke beranda
      </Link>
    </section>
  )
}