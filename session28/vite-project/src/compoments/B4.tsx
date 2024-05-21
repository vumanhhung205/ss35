import React, { useState } from 'react';
import Bbt4 from './Bbt4';

const B4 = () => {
  // Khởi tạo state
  const [selfName, setSelfName] = useState("Hung");

  return (
    <>
      <div>B4:</div>
      <p>Họ và tên bên cha: { selfName}</p>
      <Bbt4 selfName={selfName} />
    </>
  );
};

export default B4;