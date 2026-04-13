import mockData from "../data/mock.jsx";

const HomeScreen = () => {
  const totalProducts = mockData.products.length;
  const lowStock = mockData.products.filter(p => p.stock < 10).length;
  const totalCategories = mockData.categories.length;
  const totalStudents = mockData.students.length;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-slate-900">
        Hoş geldin, Kantinci Ahmet 👋
      </h1>
      <p className="text-slate-500 mt-1">NovaStore Kantin Yönetim Paneli</p>

      <div className="grid grid-cols-4 gap-4 mt-6">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-slate-500 text-sm">Toplam Ürün</p>
          <p className="text-2xl font-bold text-blue-600">{totalProducts}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-slate-500 text-sm">Düşük Stok</p>
          <p className="text-2xl font-bold text-red-500">{lowStock}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-slate-500 text-sm">Kategoriler</p>
          <p className="text-2xl font-bold text-emerald-500">{totalCategories}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <p className="text-slate-500 text-sm">Öğrenciler</p>
          <p className="text-2xl font-bold text-amber-500">{totalStudents}</p>
        </div>
      </div>

      {/* Düşük Stoklu Ürünler */}
      <div className="bg-white rounded-xl shadow-sm mt-6 p-4">
        <h2 className="text-lg font-bold text-slate-900 mb-3">Düşük Stoklu Ürünler</h2>
        {mockData.products.filter(p => p.stock < 10).map(product => (
          <div key={product.id} className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-slate-700">{product.name}</span>
            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-lg text-sm font-medium">
              {product.stock} adet
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;