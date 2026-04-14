import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

const AnimationTest = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-slate-900">Animasyon Test Sayfası 🎨</h1>

      {/* Button Animations */}
      <section className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold mb-4">1. Button Animasyonları</h2>
        <p className="text-slate-600 mb-4">Butonların üzerine gelin ve tıklayın (hover scale + active press)</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary Button</Button>
          <Button variant="danger">Danger Button</Button>
          <Button variant="success">Success Button</Button>
          <Button variant="warning">Warning Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="light">Light Button</Button>
          <Button variant="text">Text Button</Button>
        </div>
      </section>

      {/* Input Animations */}
      <section className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold mb-4">2. Input Animasyonları</h2>
        <p className="text-slate-600 mb-4">Input'a tıklayın (focus ring glow efekti)</p>
        <div className="space-y-3 max-w-md">
          <Input
            variant="primary"
            placeholder="Primary Input - Tıklayın!"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Input
            variant="search"
            placeholder="Search Input - Hover & Focus"
          />
        </div>
      </section>

      {/* Card Animations */}
      <section>
        <h2 className="text-xl font-bold mb-4">3. Kart Animasyonları</h2>
        <p className="text-slate-600 mb-4">Kartların üzerine gelin (hover lift + shadow)</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <p className="text-slate-500 text-sm">Toplam Ürün</p>
            <p className="text-2xl font-bold text-blue-600">124</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <p className="text-slate-500 text-sm">Düşük Stok</p>
            <p className="text-2xl font-bold text-red-500">8</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <p className="text-slate-500 text-sm">Kategoriler</p>
            <p className="text-2xl font-bold text-emerald-500">15</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <p className="text-slate-500 text-sm">Öğrenciler</p>
            <p className="text-2xl font-bold text-amber-500">342</p>
          </div>
        </div>
      </section>

      {/* Modal Animation */}
      <section className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold mb-4">4. Modal Animasyonu</h2>
        <p className="text-slate-600 mb-4">Modal açın (fade-in backdrop + scale-in modal)</p>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Modal Aç 🎭
        </Button>
      </section>

      {/* Table Row Animation */}
      <section className="bg-white rounded-xl shadow-sm overflow-hidden">
        <h2 className="text-xl font-bold p-6 pb-4">5. Tablo Satır Animasyonu</h2>
        <p className="text-slate-600 px-6 pb-4">Satırların üzerine gelin (hover background change)</p>
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left p-4 text-slate-500">#</th>
              <th className="text-left p-4 text-slate-500">Ürün</th>
              <th className="text-left p-4 text-slate-500">Fiyat</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-100 hover:bg-blue-50 transition-colors duration-200">
              <td className="p-4">1</td>
              <td className="p-4">Çikolata</td>
              <td className="p-4">₺5.50</td>
            </tr>
            <tr className="border-b border-slate-100 hover:bg-blue-50 transition-colors duration-200">
              <td className="p-4">2</td>
              <td className="p-4">Su</td>
              <td className="p-4">₺2.00</td>
            </tr>
            <tr className="border-b border-slate-100 hover:bg-blue-50 transition-colors duration-200">
              <td className="p-4">3</td>
              <td className="p-4">Meyve Suyu</td>
              <td className="p-4">₺8.00</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-xl p-6 w-full max-w-md animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Modal Animasyonu! 🎉</h2>
            <p className="text-slate-600 mb-6">
              Bu modal fade-in ve scale-in animasyonlarıyla açıldı.
              Backdrop tıklayınca kapanır.
            </p>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setShowModal(false)}>İptal</Button>
              <Button variant="primary" onClick={() => setShowModal(false)}>Tamam</Button>
            </div>
          </div>
        </div>
      )}

      {/* Success Message Animation */}
      <section className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold mb-4">6. Success Message Animasyonu</h2>
        <div className="bg-emerald-100 text-emerald-600 px-4 py-3 rounded-lg font-medium animate-scaleIn shadow-lg">
          ✓ Animasyon başarıyla çalışıyor!
        </div>
      </section>

      <div className="h-20"></div>
    </div>
  );
};

export default AnimationTest;
