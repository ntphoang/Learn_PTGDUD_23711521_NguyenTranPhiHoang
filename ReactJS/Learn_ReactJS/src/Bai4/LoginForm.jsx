import { useState } from "react";

function LoginForm() {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="login_form">
      <button className="btn_close" onClick={() => setShow(false)}>
        x
      </button>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
}
export default LoginForm;
