import "./styles.css";

export default function App() {
  //보통 따로 이렇게 함수를 빼서 정의
  const onButton = () => {
    alert("click");
  };

  //키보드 눌렀다가 올라올 때 발생하는 이벤트
  const onKeyUp = (event) => {
    if (event.keyCode === 13) {
      //엔터 13번째 일때 onButton 실행
      onButton(); // 위에 alert("click"); 이 실행
    }
    console.log("key up");
  };

  return (
    <div className="App">
      <input onKeyUp={onKeyUp} />
      {/* <button onClick={()=> alert('hello')}>Button</button> */}
      <button onClick={onButton}>Button</button>
    </div>
  );
}
