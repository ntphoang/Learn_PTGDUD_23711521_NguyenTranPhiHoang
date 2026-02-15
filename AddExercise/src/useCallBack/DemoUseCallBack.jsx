import { memo, useCallback, useState } from "react";

const Child = memo(({ handClick }) => {
  console.log("Child render...");
  return <button onClick={handClick}>Click Child</button>;
});
export default function DemoUseCallBack() {
  const [count, setCount] = useState(0);
  const handClick = useCallback(() => {
    console.log("Clicked");
  },[]);
  return (
    <>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count + 1)}>Increase</button>
      <Child handClick={handClick}/>
    </>
  );
}
/*Giải thích
- useCallBack giúp ghi nhớ function, khi có prop là 1 function được truyền đi, react sẽ kiểm tra xem function 
đó có khác với function cũ không. Nếu khác thì mới render còn nếu không thì thôi không cần render lại.
- Trong ví dụ trên, nếu không dùng useCallBack thì khi bấm Increase, component sẽ render lại, Child sẽ cho răng
handClick là 1 hàm mới, vậy nên Child cũng render lại. Nếu có useCallBack thì nó sẽ so sánh và nhận ra hàm 
này giống với hàm cũ vậy nên không cần render lại nữa.
*/
