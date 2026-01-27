function Alert( props ) {
  const message = {
    success: "Thao tác thành công!",
    warning: "Cảnh báo! Hãy kiểm tra lại!",
    error: "Có lỗi xảy ra!",
  };
  return <div className={`alert alert-${props.type}`}>{message[props.type]}</div>;
}
export default Alert;
