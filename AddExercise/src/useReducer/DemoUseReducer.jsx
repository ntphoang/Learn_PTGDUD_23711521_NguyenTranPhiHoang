import { useReducer } from "react";
function reducer(state,action){
    if(action.type === "increment"){
        return {count: state.count + 1};
    }
    if(action.type === "decrement"){
        return {count: state.count - 1};
    }
    return state;
}

export default function DemoUseReducer(){
    const [state,dispatch] = useReducer(reducer,{count:0});
    return(
        <div>
            <h2>{state.count}</h2>
            <button onClick={()=>dispatch({type:"decrement"})}>-</button>
            <button onClick={()=>dispatch({type:"increment"})}>+</button>
        </div>
    );
}

/*Giải thích:
- useReducer là một hook giúp quản lý state thông qua nhiều action khác nhau.
- Trong ví dụ trên, khi ấn vào nút +. dispatch sẽ gửi tín hiệu đến useReducer kèm theo type tương ứng. 
Khi useReducer nhận được thì nó sẽ chạy hàm reducer để xử lý logic. Nó so sánh xem type được gửi đến là
thuộc loại nào và xử lý tương ứng. 
*/