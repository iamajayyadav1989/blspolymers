import React, { useEffect, useState } from "react";
import axios from "axios";
import { adminBaseUrl } from "../App";

const GlobalExpansion = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(adminBaseUrl + "/api/globalexpansion")
      .then((res) => {
        if (res.data.length > 0) setData(res.data[0]);
      })
      .catch((err) => console.error("Failed to load data", err));
  }, []);

  if (!data || data.length === 0) return <div>Loading...</div>;

  return (
    <section className="global-expansion">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 text-white pl-10 pr-5">
            <h2 className="section-title text-white">
              {data.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
            <p className="mt-3">
              <strong>{data.paragraph1}</strong>
            </p>
            <p>{data.paragraph2}</p>
          </div>
          <div className="col-lg-6 p-0">
            <img
              src={`${process.env.PUBLIC_URL}/images/${data.image}`} // Make sure /public/images/factory_01.jpg exists
              alt="BLS Company Building"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalExpansion;
