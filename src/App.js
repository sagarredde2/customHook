import "./styles.css";
import useOrderCountHook from "./useOrderCount";

export default function App() {
  const orderHook = useOrderCountHook();
  return (
    <div>
      <h1>count:{orderHook.orderCount.count}</h1>
      <button type="button" onClick={orderHook.changeOrderCount}>
        Increment
      </button>
    </div>
  );
}
