import { useState } from "react";
import Button from "../components/Button";
import List from "../components/List";
import useProducts from "../hooks/useProduct";
import Input from "../components/Input";

const Products = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const { productsData, categoriesData, addProduct, deleteProduct, updateProduct } = useProducts();
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    categoryId: "",
    price: "",
    stock: "",
    image: ""
  });


  const handleUpdate = async () => {
    if (!editProduct.name || !editProduct.categoryId || !editProduct.price) {
      alert("Ürün adı, kategori ve fiyat zorunlu!");
      return;
    }
    await updateProduct(editProduct.id, {
      name: editProduct.name,
      categoryId: Number(editProduct.categoryId),
      price: Number(editProduct.price),
      stock: Number(editProduct.stock) || 0,
      image: editProduct.image
    });
    setEditProduct(null);
  };

  const filtered = productsData.filter(product => {
    const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = selectedCategory === "all" || product.categoryId === Number(selectedCategory);
    return matchSearch && matchCategory;
  });


  const handleAdd = async () => {
    if (!newProduct.name || !newProduct.categoryId || !newProduct.price) {
      alert("Ürün adı, kategori ve fiyat zorunlu!");
      return;
    }
    await addProduct({
      name: newProduct.name,
      categoryId: Number(newProduct.categoryId),
      price: Number(newProduct.price),
      stock: Number(newProduct.stock) || 0,
      image: newProduct.image
    });
    setNewProduct({ name: "", categoryId: "", price: "", stock: "", image: "" });
    setShowModal(false);
  };



  return (
    <div className="p-6">
      {/* Başlık */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Ürün Yönetimi</h1>
          <p className="text-slate-500 mt-1">{filtered.length} ürün listeleniyor</p>
        </div>
        <Button variant="primary" onClick={() => setShowModal(true)}>+ Yeni Ürün Ekle</Button>
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
          {categoriesData.map(cat => (
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



      <List type="product" onUpdate={setEditProduct} onDelete={deleteProduct} viewMode={viewMode} data={filtered} />



      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-xl p-6 w-96" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-bold text-slate-900 mb-4">Yeni Ürün Ekle</h2>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Input
                variant="primary"
                placeholder="Ürün Adı"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
              <select
                value={newProduct.categoryId}
                onChange={(e) => setNewProduct({ ...newProduct, categoryId: e.target.value })}
                className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
              >
                <option value="">Kategori Seçin</option>
                {categoriesData.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
              <Input
                variant="primary"
                placeholder="Fiyat (₺)"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              />
              <Input
                variant="primary"
                placeholder="Stok"
                value={newProduct.stock}
                onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
              />
              <Input
                variant="primary"
                placeholder="Görsel URL"
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              />
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <Button variant="outline" onClick={() => setShowModal(false)}>İptal</Button>
              <Button variant="primary" onClick={handleAdd}>Kaydet</Button>
            </div>
          </div>
        </div>
      )}
      {editProduct && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setEditProduct(null)}>
          <div className="bg-white rounded-xl p-6 w-96" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-bold text-slate-900 mb-4">Ürünü Düzenle</h2>
            <div className="flex flex-col gap-3">
              <Input
                variant="primary"
                placeholder="Ürün Adı"
                value={editProduct.name}
                onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
              />
              <select
                value={editProduct.categoryId}
                onChange={(e) => setEditProduct({ ...editProduct, categoryId: e.target.value })}
                className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
              >
                <option value="">Kategori Seçin</option>
                {categoriesData.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
              <Input
                variant="primary"
                placeholder="Fiyat (₺)"
                value={editProduct.price}
                onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
              />
              <Input
                variant="primary"
                placeholder="Stok"
                value={editProduct.stock}
                onChange={(e) => setEditProduct({ ...editProduct, stock: e.target.value })}
              />
              <Input
                variant="primary"
                placeholder="Görsel URL"
                value={editProduct.image}
                onChange={(e) => setEditProduct({ ...editProduct, image: e.target.value })}
              />
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <Button variant="outline" onClick={() => setEditProduct(null)}>İptal</Button>
              <Button variant="primary" onClick={handleUpdate}>Güncelle</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;