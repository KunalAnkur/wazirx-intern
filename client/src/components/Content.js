import React, { useEffect, useState } from "react";
import "./stylesheets/Content.css";
import axios from "axios";
import MoonLoader from "react-spinners/MoonLoader";

function Content() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/get")
      .then((res) => {
        setResult(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((e) => {
        setLoading(true);
        console.log(e);
      });
  }, []);
  return (
    <div className="content">
      <div className="content__container">
        <div className="content__header">
          <div className="content__header__list a">#</div>
          <div className="content__header__list b">name</div>
          <div className="content__header__list c">Last</div>
          <div className="content__header__list d">Buy / Sell Price</div>
          <div className="content__header__list e">volume</div>
          <div className="content__header__list f">base_unit</div>
        </div>
        {loading ? (
          <div className="content__loading">
            <MoonLoader color={"#49C3BE"} loading={true} />
          </div>
        ) : (
          <div className="content__lists">
            {result.map((info, index) => (
              <div key={index} className="content__list">
                <div className="content__list__item a">{index + 1}</div>
                <div className="content__list__item b">{info.name}</div>
                <div className="content__list__item c">{info.last}</div>
                <div className="content__list__item d">
                  ₹{info.buy} / ₹{info.sell}
                </div>
                <div className="content__list__item e">{info.volume}</div>
                <div className="content__list__item f">{info.base_unit}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Content;
