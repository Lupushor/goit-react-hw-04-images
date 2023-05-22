import { useState, useRef, useEffect } from 'react';

export const AppTest = () => {
  const [value, setValue] = useState(0);
  const btnRef = useRef();

  // Будет null на первом рендере
  // и ссылкой на DOM-элемент все последующие
  console.log(btnRef.current);

  useEffect(() => {
    // Эффект выполняется после монтирования,
    // поэтому всегда будет ссылкой на DOM-элемент
    console.log(btnRef.current);
  });

  const handleClick = () => {
    // Клики будут после монтирвоания,
    // поэтому всегда будет ссылкой на DOM-элемент
    console.log(btnRef.current);
  };

  return (
    <>
      <button onClick={() => setValue(value + 1)}>
        Update value to trigger re-render {value}
      </button>
      <button ref={btnRef} onClick={handleClick}>
        Button with ref {value}
      </button>
    </>
  );
};
