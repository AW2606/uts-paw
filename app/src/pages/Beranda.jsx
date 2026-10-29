import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import RingkasanKoleksi from '../components/RingkasanKoleksi.jsx'
import mahasiswa from '../../mahasiswa.json'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section>
      <h1>Pusat Informasi Kuliner Sekitar ITERA</h1>
      <p>Tema: {mahasiswa.tema}</p>
      {loading ? (
        <p>Memuat ringkasan...</p>
      ) : (
        <RingkasanKoleksi jumlahItem={items.length} jumlahKategori={jumlahKategori} />
      )}
      <Link to="/koleksi">Lihat semua tempat makan</Link>
    </section>
  )
}