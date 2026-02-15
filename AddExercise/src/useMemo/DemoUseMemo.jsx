import { useState, useMemo } from "react";

export default function DemoUseMemo() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  const doubleNumber = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]);

  return (
    <>
      <h3>Number: {number}</h3>
      <h3>Double: {doubleNumber}</h3>

      <button onClick={() => setNumber(number + 1)}>
        Change number
      </button>

      <button onClick={() => setCount(count + 1)}>
        Increase count
      </button>
    </>
  );
}
/*Giải thích:
- useMemo là hook giúp ghi nhớ kết quả tính toán , tránh lặp lại
các phép tính toán nặng khi dữ liệu kh thay đổi
- Trong ví dụ trên: Nếu không dùng useMemo, mỗi khi nhấn vào nút Increase
thì component render lại và hàm doubleNumber phải tính lại. Nhưng nếu
có useMemo, chỉ khi ta nhấn vào ChangeNumber làm thay đổi number thì 
doubleNumber mới tính toán lại.
*/
