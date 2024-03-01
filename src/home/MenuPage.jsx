import React, { useState, useEffect } from 'react';
import './MenuPage.css'; // Import file CSS untuk gaya tambahan

function MenuItem({ item }) {
  return (
    <div className="MenuItem">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  );
}

function MenuPage() {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Pizza', description: 'Delicious pizza with various toppings.' },
    { id: 2, name: 'Pasta', description: 'Authentic pasta dishes cooked to perfection.' },
    { id: 3, name: 'Burger', description: 'Juicy burgers with fresh ingredients.' },
    // Tambahkan item-menu lainnya di sini
  ]);

  useEffect(() => {
    // Contoh pengambilan data menu dari backend
    // fetchMenuItems().then((data) => setMenuItems(data));
  }, []); // Gunakan effect kosong agar hanya dijalankan sekali saat komponen dipasang

  return (
    <div className="MenuPage">
      <h1>My Menu</h1>
      <p>Silahkan pilih menu yang sudah tersedia di restoran kami.</p>
      <div className="menu-links">
        <a href="http://localhost:3000/pizza">Pizza Menu</a>
        <a href="http://localhost:3000/pasta">Pasta Menu</a>
        {/* Tambahkan tautan menu lainnya di sini */}
      </div>
      <h2>SELAMAT MENIKMATI MAKANAN KAMI</h2>
      <h2>JANGAN LUPA KEMBALI</h2>
      <div className="menu-items">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
