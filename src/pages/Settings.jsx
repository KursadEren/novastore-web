import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

const Settings = () => {
  const [settings, setSettings] = useState({
    kantinName: "Atatürk Kantini",
    school: "Atatürk İlkokulu",
    phone: "02164441122",
    email: "kantin@ataturkilkokulu.com",
    address: "Atatürk Cad. No:1 Kadıköy/İstanbul",
    ownerName: "Ahmet Yılmaz",
    lowStockLimit: 10,
    dailyLimit: 100,
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Ayarlar</h1>
      <p className="text-slate-500 mt-1">Kantin bilgilerini düzenleyin</p>

      {saved && (
        <div className="bg-emerald-100 text-emerald-600 px-4 py-3 rounded-lg mt-4 font-medium text-sm sm:text-base animate-scaleIn shadow-lg">
          ✓ Ayarlar başarıyla kaydedildi!
        </div>
      )}

      {/* Kantin Bilgileri */}
      <div className="bg-white rounded-xl shadow-sm mt-6 p-4 sm:p-6">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-4">Kantin Bilgileri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-500 mb-1">Kantin Adı</label>
            <Input
              variant="primary"
              placeholder="Kantin adı"
              value={settings.kantinName}
              onChange={(e) => setSettings({ ...settings, kantinName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-500 mb-1">Okul</label>
            <Input
              variant="primary"
              placeholder="Okul adı"
              value={settings.school}
              onChange={(e) => setSettings({ ...settings, school: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-500 mb-1">Telefon</label>
            <Input
              variant="primary"
              placeholder="Telefon"
              value={settings.phone}
              onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-500 mb-1">E-posta</label>
            <Input
              variant="primary"
              placeholder="E-posta"
              value={settings.email}
              onChange={(e) => setSettings({ ...settings, email: e.target.value })}
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-slate-500 mb-1">Adres</label>
            <Input
              variant="primary"
              placeholder="Adres"
              value={settings.address}
              onChange={(e) => setSettings({ ...settings, address: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-500 mb-1">Kantinci Adı</label>
            <Input
              variant="primary"
              placeholder="Kantinci adı"
              value={settings.ownerName}
              onChange={(e) => setSettings({ ...settings, ownerName: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Sistem Ayarları */}
      <div className="bg-white rounded-xl shadow-sm mt-6 p-4 sm:p-6">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-4">Sistem Ayarları</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-500 mb-1">Düşük Stok Limiti</label>
            <Input
              variant="primary"
              placeholder="10"
              value={settings.lowStockLimit}
              onChange={(e) => setSettings({ ...settings, lowStockLimit: e.target.value })}
            />
            <p className="text-xs text-slate-400 mt-1">Bu değerin altındaki ürünler uyarı gösterir</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-500 mb-1">Günlük Harcama Limiti (₺)</label>
            <Input
              variant="primary"
              placeholder="100"
              value={settings.dailyLimit}
              onChange={(e) => setSettings({ ...settings, dailyLimit: e.target.value })}
            />
            <p className="text-xs text-slate-400 mt-1">Öğrenci başına günlük maksimum harcama</p>
          </div>
        </div>
      </div>

      {/* Kaydet Butonu */}
      <div className="flex justify-center sm:justify-end mt-6">
        <Button variant="primary" onClick={handleSave}>
          Ayarları Kaydet
        </Button>
      </div>
    </div>
  );
};

export default Settings;