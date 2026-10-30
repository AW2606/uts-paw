import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import RingkasanKoleksi from '../components/RingkasanKoleksi.jsx'
import mahasiswa from '../../mahasiswa.json'
import './Beranda.css'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section className="beranda">
      <div className="beranda-kiri">
        <p className="kicker">PANDUAN RASA · SEKITAR KAMPUS</p>
        <h1>Pusat Informasi Kuliner Sekitar ITERA</h1>
        <p className="subjudul">Tema: {mahasiswa.tema}</p>
        <p className="deskripsi">
          Dari makan siang yang mengenyangkan hingga tempat ngopi untuk jeda kuliah, temukan inspirasi rasa berikutnya di sekitar ITERA.
        </p>

        <Link to="/koleksi" className="tombol">
          Lihat semua tempat makan
        </Link>

        {loading ? (
          <p>Memuat ringkasan...</p>
        ) : (
          <RingkasanKoleksi jumlahItem={items.length} jumlahKategori={jumlahKategori} />
        )}
      </div>

      <div className="beranda-kanan">
        <img
          src={`${import.meta.env.BASE_URL}kuliner.jpg`}
          alt="Kuliner sekitar ITERA"
          className="gambar-beranda"
        />
      </div>
    </section>
  )
}