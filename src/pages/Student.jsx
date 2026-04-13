import React, { useState } from 'react';
import mockData from '../data/mock';
import Button from '../components/Button';
import Input from '../components/Input';
import List from '../components/List';

const Student = () => {
  const [search, setSearch] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [students, setStudents] = useState(mockData.students);
  const [newStudent, setNewStudent] = useState({ name: "", school: "", parent: "" });

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    if (!newStudent.name || !newStudent.school || !newStudent.parent) {
      alert("Tüm alanları doldurun!");
      return;
    }
    const student = {
      id: students.length + 1,
      name: newStudent.name,
      school: newStudent.school,
      parent: newStudent.parent,
      balance: 0,
    };
    setStudents([...students, student]);
    setNewStudent({ name: "", school: "", parent: "" });
    setShowPopup(false);
  };

  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl text-slate-900">Students</h1>
      <p className="text-slate-500 mt-1">{filtered.length} Öğrenci listeleniyor</p>

      <div className="flex justify-between items-center gap-4 mt-6">
        <Input
          variant="search"
          placeholder="Öğrenci ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={() => setShowPopup(true)} variant="primary">
          Öğrenci Ekle
        </Button>
      </div>

      <List type="student" data={filtered} />

      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-96">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Yeni Öğrenci Ekle</h2>
            <div className="flex flex-col gap-3">
              <Input
                variant="primary"
                placeholder="Ad Soyad"
                value={newStudent.name}
                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
              />
              <Input
                variant="primary"
                placeholder="Okul"
                value={newStudent.school}
                onChange={(e) => setNewStudent({ ...newStudent, school: e.target.value })}
              />
              <Input
                variant="primary"
                placeholder="Veli Adı"
                value={newStudent.parent}
                onChange={(e) => setNewStudent({ ...newStudent, parent: e.target.value })}
              />
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <Button variant="outline" onClick={() => setShowPopup(false)}>İptal</Button>
              <Button variant="primary" onClick={handleAdd}>Kaydet</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Student;