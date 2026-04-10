import { useDispatch } from "react-redux";
import { xoa, sua } from "./todoSlice";
import { useState } from "react";

export default function TodoItem({ id, text }) {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [textSua, setTextSua] = useState(text);
  return (
    <div>
      {isEdit && (
        <div>
          <input
            value={textSua}
            onChange={(e) => setTextSua(e.target.value)}
            placeholder="Nhập nội dung thay thế"
          ></input>
          <button onClick={() => dispatch(sua({ id: id, text: textSua }))}>
            Xác nhận
          </button>
        </div>
      )}
      <p>
        Key: {id} - Todo: {text}{" "}
      </p>
      <button onClick={() => dispatch(xoa(id))}>Delete</button>
      <button onClick={() => setIsEdit(isEdit == true ? false : true)}>
        Sửa
      </button>
    </div>
  );
}
