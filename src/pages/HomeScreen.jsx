import useProducts from "../hooks/useProduct";
import useStudent from "../hooks/useStudent";

const HomeScreen = () => {
  const { productsData,categoriesData } = useProducts();
   const { studentsData} = useStudent();
  const totalProducts = productsData.length;
  const lowStock = productsData.filter(p => p.stock < 10).length;
  const totalCategories = categoriesData.length;
  const totalStudents = studentsData.length;

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
        Hoş geldin, Kantinci Ahmet 👋
      </h1>
      <p className="text-slate-500 mt-1">NovaStore Kantin Yönetim Paneli</p>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
        <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <p className="text-slate-500 text-xs sm:text-sm">Toplam Ürün</p>
          <p className="text-xl sm:text-2xl font-bold text-blue-600">{totalProducts}</p>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <p className="text-slate-500 text-xs sm:text-sm">Düşük Stok</p>
          <p className="text-xl sm:text-2xl font-bold text-red-500">{lowStock}</p>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <p className="text-slate-500 text-xs sm:text-sm">Kategoriler</p>
          <p className="text-xl sm:text-2xl font-bold text-emerald-500">{totalCategories}</p>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <p className="text-slate-500 text-xs sm:text-sm">Öğrenciler</p>
          <p className="text-xl sm:text-2xl font-bold text-amber-500">{totalStudents}</p>
        </div>
      </div>

      {/* Düşük Stoklu Ürünler */}
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 mt-6 p-4">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-3">Düşük Stoklu Ürünler</h2>
        {productsData.filter(p => p.stock < 10).map(product => (
          <div key={product.id} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors duration-200 px-2 -mx-2 rounded-lg">
            <span className="text-sm sm:text-base text-slate-700 truncate mr-2">{product.name}</span>
            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap">
              {product.stock} adet
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;