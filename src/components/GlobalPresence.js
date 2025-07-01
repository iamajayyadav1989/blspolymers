import React, { useEffect, useState } from "react";
import axios from "axios";
import { adminBaseUrl } from "../App";

const GlobalPresence = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchGlobalPresence = async () => {
      try {
        const response = await axios.get(adminBaseUrl + "/api/global-presence");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching Global Presence", error);
      }
    };

    fetchGlobalPresence();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <section className="global-presence">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Map & Heading */}
          <div className="col-md-12">
            <h2 className="section-title">
              {data.title.split(" ").slice(0, 2).join(" ")} <br />
              {data.title.split(" ").slice(2).join(" ")}
            </h2>
            <div className="map-container">
              <img
                src={require(`../assets/images/${data.mapImage}`)}
                className="img-fluid"
                alt="World Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
