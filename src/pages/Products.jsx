import { useState } from "react";
import mockData from "../data/mock";
import Button from "../components/Button";
import List from "../components/List";

const Products = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
 

const filtered = mockData.products.filter(product => {
  const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
  const matchCategory = selectedCategory === "all" || product.categoryId === Number(selectedCategory);
  return matchSearch && matchCategory;
});

 
  return (
    <div className="p-6">
      {/* Başlık */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Ürün Yönetimi</h1>
          <p className="text-slate-500 mt-1">{filtered.length} ürün listeleniyor</p>
        </div>
        <Button variant="primary">+ Yeni Ürün Ekle</Button>
      </div>

      {/* Filtreler */}
      <div className="flex gap-4 mt-6">
        <input
          type="text"
          placeholder="Ürün ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
        >
          <option value="all">Tüm Kategoriler</option>
          {mockData.categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <div className="flex gap-1 bg-white border border-slate-200 rounded-lg p-1">
          <button
            onClick={() => setViewMode("grid")}
            className={`px-3 py-1 rounded cursor-pointer ${viewMode === "grid" ? "bg-blue-600 text-white" : "text-slate-500"}`}
          >
            Grid
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`px-3 py-1 rounded cursor-pointer ${viewMode === "list" ? "bg-blue-600 text-white" : "text-slate-500"}`}
          >
            Liste
          </button>
        </div>
      </div>

      {/* Grid Görünüm */}
      
        <List type="product" viewMode={viewMode} data={filtered} />
      
    </div>
  );
};

export default Products;