import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, expect, test, vi } from 'vitest'
import App from './App.jsx'

const DATA = [
  {
    id: '1',
    judul: 'Ayam Geprek Mba Uwa',
    kategori: 'Nasi',
    alamat: 'Jl. Perum Pemda Wayhui',
    hargaRataRata: 12000,
    jamBuka: '08:00-22:00',
  },
]

beforeEach(() => {
  localStorage.clear()
  vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify(DATA))))
})

function buka(path) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

test('beranda menampilkan judul utama', () => {
  buka('/')
  expect(screen.getByRole('heading', { name: /Pusat Informasi Kuliner/i })).toBeInTheDocument()
})

test('menampilkan data hasil fetch di halaman koleksi', async () => {
  buka('/koleksi')
  expect(await screen.findByText('Ayam Geprek Mba Uwa')).toBeInTheDocument()
})

test('form menolak judul kosong', async () => {
  buka('/tambah')
  await userEvent.click(screen.getByRole('button', { name: 'Simpan' }))
  expect(screen.getByRole('alert')).toHaveTextContent('Judul wajib diisi')
})

test('halaman tentang menampilkan nama dan NIM', () => {
  buka('/tentang')
  expect(screen.getByText('Adhitya Warman')).toBeInTheDocument()
  expect(screen.getByText('124140007')).toBeInTheDocument()
})

test('rute tidak dikenal menampilkan 404', () => {
  buka('/tidak-ada')
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})