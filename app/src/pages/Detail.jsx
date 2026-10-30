import { Link, useNavigate, useParams } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Detail.css'

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { items, loading, hapus } = useKoleksi()
  const item = items.find((i) => String(i.id) === id)

  if (loading) return <p>Memuat data...</p>
  if (!item) {
    return (
      <section className="halaman-detail">
        <h1>Item tidak ditemukan</h1>
        <Link to="/koleksi" className="tombol-kembali">
          Kembali ke koleksi
        </Link>
      </section>
    )
  }

  const konfirmasiHapus = () => {
    if (window.confirm(`Hapus "${item.judul}"?`)) {
      hapus(item.id)
      navigate('/koleksi')
    }
  }

  return (
    <section className="halaman-detail">
      <h1>{item.judul}</h1>
      <p className="subjudul-detail">
        Informasi tempat makan di sekitar kampus ITERA, tersaji dalam satu halaman.
      </p>

      <div className="kartu-detail">
        <div className="kepala-detail">
          <span>Kategori</span>
          <strong>{item.kategori}</strong>
        </div>

        <dl className="daftar-detail">
          <div className="baris-detail">
            <dt>Alamat</dt>
            <dd>{item.alamat}</dd>
          </div>
          <div className="baris-detail">
            <dt>Harga Rata-rata</dt>
            <dd>Rp{item.hargaRataRata}</dd>
          </div>
          <div className="baris-detail">
            <dt>Jam Buka</dt>
            <dd>{item.jamBuka}</dd>
          </div>
        </dl>
      </div>

      <div className="aksi-detail">
        <Link to="/koleksi" className="tombol-kembali">
          Kembali
        </Link>
        <button type="button" className="tombol-hapus" onClick={konfirmasiHapus}>
          Hapus
        </button>
      </div>
    </section>
  )
}