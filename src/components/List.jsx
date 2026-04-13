import React from 'react';
import mockData from '../data/mock';
import Button from './Button';

const List = ({ viewMode, type = "product", data }) => {

  const getCategoryName = (categoryId) => {
    const cat = mockData.categories.find(c => c.id === categoryId);
    return cat ? cat.name : "";
  };

  return (
    <div>
      {type === "product" && viewMode === "grid" && (
        <div className="grid grid-cols-5 gap-4 mt-6">
          {data.map(product => (
            <div key={product.id} className="bg-white p-4 h-96 flex flex-col justify-end rounded-xl shadow-sm">
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-lg mb-3" />
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-900">{product.name}</h3>
                  <span className="text-sm text-blue-600 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">
                    {getCategoryName(product.categoryId)}
                  </span>
                </div>
                <p className="text-lg font-bold text-slate-900">₺{product.price}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className={`text-sm font-medium px-2 py-1 rounded-lg ${
                  product.stock < 10 ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"
                }`}>
                  Stok: {product.stock}
                </span>
                <div className="flex gap-2">
                  <Button variant="text">Düzenle</Button>
                  <Button variant="danger">Sil</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {type === "product" && viewMode === "list" && (
        <div className="bg-white rounded-xl shadow-sm mt-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left p-4 text-slate-500 text-sm">#</th>
                <th className="text-left p-4 text-slate-500 text-sm">Ürün Adı</th>
                <th className="text-left p-4 text-slate-500 text-sm">Kategori</th>
                <th className="text-left p-4 text-slate-500 text-sm">Fiyat</th>
                <th className="text-left p-4 text-slate-500 text-sm">Stok</th>
                <th className="text-left p-4 text-slate-500 text-sm">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {data.map(product => (
                <tr key={product.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 text-slate-500">{product.id}</td>
                  <td className="p-4 font-medium text-slate-900">{product.name}</td>
                  <td className="p-4">
                    <span className="text-sm text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {getCategoryName(product.categoryId)}
                    </span>
                  </td>
                  <td className="p-4 text-slate-900">₺{product.price}</td>
                  <td className="p-4">
                    <span className={`text-sm font-medium px-2 py-1 rounded-lg ${
                      product.stock < 10 ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"
                    }`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Button variant="text">Düzenle</Button>
                      <Button variant="danger">Sil</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {type === "student" && (
        <div className="bg-white rounded-xl shadow-sm mt-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left p-4 text-slate-500 text-sm">#</th>
                <th className="text-left p-4 text-slate-500 text-sm">Ad Soyad</th>
                <th className="text-left p-4 text-slate-500 text-sm">Okul</th>
                <th className="text-left p-4 text-slate-500 text-sm">Veli</th>
                <th className="text-left p-4 text-slate-500 text-sm">Bakiye</th>
                <th className="text-left p-4 text-slate-500 text-sm">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {data.map(student => (
                <tr key={student.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 text-slate-500">{student.id}</td>
                  <td className="p-4 font-medium text-slate-900">{student.name}</td>
                  <td className="p-4 text-slate-700">{student.school}</td>
                  <td className="p-4 text-slate-700">{student.parent}</td>
                  <td className="p-4">
                    <span className={`text-sm font-medium px-2 py-1 rounded-lg ${
                      student.balance < 100 ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"
                    }`}>
                      ₺{student.balance}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Button variant="text">Düzenle</Button>
                      <Button variant="danger">Sil</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default List;