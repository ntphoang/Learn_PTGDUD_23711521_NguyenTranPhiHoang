import { useEffect, useState } from "react";

export default function DemoUseEffect() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]);
  
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
/* Giải thích:
- useEffect là 1 hook thực hiện 1 đoạn code nào đó khi component render.
- Trong demo này, useEffect sẽ thực hiện log ra console mỗi khi biến count có sự thay đổi
- Có 3 loại:
  + Loại 1: useEffect(()=>,[]); --> useEffect sẽ thực hiện khi component mới render lần đầu
  + Loại 2: useEffect(()=>,[điều kiện]) --> sẽ thực hiện khi có điều kiện
  + Loại 3: useEffect(()=>) --> sẽ thực hiện khi có bất cứ sự thay đổi nào
*/