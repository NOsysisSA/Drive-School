import "../styles/Banner.css";
import TrafficSignAnimation from "./TrafficSignAnimation";
function Banner() {
  return (
    <div className="Banner">
      <div className="Info">
        <h2>Лекції та тести ПДР.<br/>Теорія з практикою.<br/>Легка підготовка <br/> іспиту в ТСЦ МВС</h2>
        <p>Зручне навчання, легке складання</p>
      </div>
      <div>
        <TrafficSignAnimation />
      </div>
    </div>
  );
}

export default Banner;
