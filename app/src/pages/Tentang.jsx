import mahasiswa from '../../mahasiswa.json'
import './Detail.css'

const REPO = 'https://github.com/aw2606/uts-paw'

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa
  return (
    <section className="halaman-detail">
      <h1>Tentang</h1>
      <p className="subjudul-detail">
        Informasi pembuat aplikasi dan repositori proyek Ujian Tengah Semester Pengembangan Aplikasi Web.
      </p>

      <div className="kartu-detail">
        <div className="kepala-detail">
          <span>Tema Proyek</span>
          <strong>{tema}</strong>
        </div>

        <dl className="daftar-detail">
          <div className="baris-detail">
            <dt>Nama</dt>
            <dd>{nama}</dd>
          </div>
          <div className="baris-detail">
            <dt>NIM</dt>
            <dd>{nim}</dd>
          </div>
          <div className="baris-detail">
            <dt>Kelas</dt>
            <dd>{kelas}</dd>
          </div>
          <div className="baris-detail">
            <dt>Kode sumber</dt>
            <dd>
              <a href={REPO}>{REPO}</a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}