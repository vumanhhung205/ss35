import React, { useState } from 'react';

export default function B3() {
  // Khởi tạo state chứa danh sách users
  const [users, setUsers] = useState([
    { id: 1, name: 'Vmh', address: 'Hp' },
    { id: 2, name: 'Mh', address: 'Nhà' },
  ]);

  return (
    <>
      B3:
      <ul>
        {/* Sử dụng hàm map để render danh sách users */}
        {users.map(user => (
          <li key={user.id}>
            <b>ID:</b> {user.id}, <b>Name:</b> {user.name}, <b>Address:</b> {user.address}
          </li>
        ))}
      </ul>
    </>
  );
}