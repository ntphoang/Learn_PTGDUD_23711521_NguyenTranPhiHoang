import { useRef, useState } from "react";

export default function DemoUseRef() {
  const [count, setCount] = useState(0);
  const refCount = useRef(0);
  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {refCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Tăng State</button>
      <button onClick={() => refCount.current++}>Tăng Ref</button>
    </div>
  );
}
/*Giải thích:
- useRef là hook dùng để lưu một giá trị tồn tại qua nhiều lần render 
nhưng khi thay đổi giá trị đó sẽ không làm component render lại.
- trong demo trên, khi thay đổi bằng setCount() thì component render lại,
nhưng khi refCount.current thay đổi thì component không render lại.
*/
