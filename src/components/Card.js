import React from "react";

export default function Card() {
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "400px" }}>
        <img className="card-img-top" style={{ width: "18rem", maxHeight: "250px" }} src="https://images.immediate.co.uk/production/volatile/sites/30/2021/04/Chicken-momos-1ed8358.jpg?quality=90&resize=556,505" alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some Important Text</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              <option value="Half">Half</option>
              <option value="Full">Full</option>
            </select>
            <div className="d-inline h-100 fs-5">Total</div>
          </div>
        </div>
      </div>
    </div>
  );
}
