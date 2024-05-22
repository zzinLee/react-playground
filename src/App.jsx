import Child from "./Child";

export default function App() {
  return (
    <div>
      현재는 Child가 상태를 공유하고 있지 않습니다. <br></br>
      하지만 Child 컴포넌트가 하나가 열릴 때 나머지 하나가 닫힌다면 어떨까요?
      <Child />
      <Child />
    </div>
  );
}
