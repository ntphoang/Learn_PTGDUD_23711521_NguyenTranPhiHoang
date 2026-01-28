export default function StudentInfo(props){
    return(
        <div className="card">
            <ul className="info">
                <li>Họ và tên: {props.hoten}</li>
                <li>MSSV: {props.mssv}</li>
                <li>Lớp: {props.lop}</li>
            </ul>
        </div>
    );
}