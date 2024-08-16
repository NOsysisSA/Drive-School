import React from "react";
import { FaBook } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import "../styles/Opportunities.css";
function Opportunities() {
  return (
      <div className="Opportunities">
        <div className="Heading">
          <h2>Можливості для навчання</h2>
        </div>
        <div className="Possibilities">
          <div className="Features">
            <div>
              <FaBook className="Icon" />
            </div>
            <div>
              <h3>ПДР України</h3>
            </div>
            <div className="Description">
              <p>Правила дорожнього руху України з відео поясненнями</p>
            </div>
            <div>
              <a className="but" href="#">Детальніше</a>
            </div>
          </div>
          <div className="Features">
            <div>
              <FaCheckCircle className="Icon" />
            </div>
            <div>
              <h3>Тести</h3>
            </div>
            <div>
              <p>
                Підготуйтеся до іспиту за допомогою інтерактивних тестів.
                <br />
                Наш сервіс допоможе вам закріпити знання і впевнено скласти
                іспит
              </p>
              <div>
                <a className="but" href="#">Детальніше</a>
              </div>
            </div>
          </div>
          <div className="Features">
            <div>
              <FaInfoCircle className="Icon" />
            </div>
            <div>
              <h3>Інструкції</h3>
            </div>
            <div>
              <p>
                Як записатися на іспит?
                <br /> Як знайти сервісний центр?
                <br /> Які документи потрібно підготувати?
              </p>
            </div>
            <div>
              <a className="but" href="#">Детальніше</a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Opportunities;
