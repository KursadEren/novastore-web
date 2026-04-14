import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import List from "../components/List";
import useStudent from "../hooks/useStudent";

const Student = () => {
  const { studentsData, addStudent, deleteStudent, updateStudent } = useStudent();
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editStudent, setEditStudent] = useState(null);
  const [newStudent, setNewStudent] = useState({ name: "", school: "", parent: "" });

  const filtered = studentsData.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = async () => {
    if (!newStudent.name || !newStudent.school || !newStudent.parent) {
      alert("Tüm alanları doldurun!");
      return;
    }
    await addStudent({
      name: newStudent.name,
      school: newStudent.school,
      parent: newStudent.parent
    });
    setNewStudent({ name: "", school: "", parent: "" });
    setShowModal(false);
  };

  const handleUpdate = async () => {
    if (!editStudent.name || !editStudent.school || !editStudent.parent) {
      alert("Tüm alanları doldurun!");
      return;
    }
    await updateStudent(editStudent.id, {
      name: editStudent.name,
      school: editStudent.school,
      parent: editStudent.parent
    });
    setEditStudent(null);
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="font-bold text-xl sm:text-2xl text-slate-900">Öğrenciler</h1>
          <p className="text-slate-500 mt-1">{filtered.length} öğrenci listeleniyor</p>
        </div>
        <Button variant="primary" onClick={() => setShowModal(true)}>+ Öğrenci Ekle</Button>
      </div>

      <div className="mt-6">
        <Input
          variant="search"
          placeholder="Öğrenci ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <List type="student" data={filtered} onDelete={deleteStudent} onEdit={setEditStudent} />

      {/* Ekleme Modalı */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 animate-fadeIn" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-bold text-slate-900 mb-4">Yeni Öğrenci Ekle</h2>
            <div className="flex flex-col gap-3">
              <Input variant="primary" placeholder="Ad Soyad" value={newStudent.name} onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} />
              <Input variant="primary" placeholder="Okul" value={newStudent.school} onChange={(e) => setNewStudent({ ...newStudent, school: e.target.value })} />
              <Input variant="primary" placeholder="Veli Adı" value={newStudent.parent} onChange={(e) => setNewStudent({ ...newStudent, parent: e.target.value })} />
            </div>
            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
              <Button variant="outline" onClick={() => setShowModal(false)}>İptal</Button>
              <Button variant="primary" onClick={handleAdd}>Kaydet</Button>
            </div>
          </div>
        </div>
      )}

      {/* Düzenleme Modalı */}
      {editStudent && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 animate-fadeIn" onClick={() => setEditStudent(null)}>
          <div className="bg-white rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-bold text-slate-900 mb-4">Öğrenciyi Düzenle</h2>
            <div className="flex flex-col gap-3">
              <Input variant="primary" placeholder="Ad Soyad" value={editStudent.name} onChange={(e) => setEditStudent({ ...editStudent, name: e.target.value })} />
              <Input variant="primary" placeholder="Okul" value={editStudent.school} onChange={(e) => setEditStudent({ ...editStudent, school: e.target.value })} />
              <Input variant="primary" placeholder="Veli Adı" value={editStudent.parent} onChange={(e) => setEditStudent({ ...editStudent, parent: e.target.value })} />
            </div>
            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
              <Button variant="outline" onClick={() => setEditStudent(null)}>İptal</Button>
              <Button variant="primary" onClick={handleUpdate}>Güncelle</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Student;