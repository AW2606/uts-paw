export default function RingkasanKoleksi({ jumlahItem, jumlahKategori }) {
  return (
    <div className="ringkasan">
      <div className="kotak-angka">
        <strong>{jumlahItem}</strong>
        <span>Tempat Makan</span>
      </div>
      <div className="kotak-angka">
        <strong>{jumlahKategori}</strong>
        <span>Kategori</span>
      </div>
    </div>
  )
}