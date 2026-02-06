import { useState } from "react";

export default function DemoUseState() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count - 1)}>Giảm</button>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
}
/* Giải thích:
- useState là một hook giúp cho component nhận thay đổi và render lại UI
- Trong demo này, count sẽ nhận giá trị khởi tạo là 0, khi muốn thay đổi 
count thì ta dùng setCount()
- Mỗi khi button được nhấn thì nó sẽ thực hiện thao tác thay đổi tương ứng
với biến count, và biến count mới sẽ được hiển thị ở thẻ h3
*/
