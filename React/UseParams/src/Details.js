import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
function Details() {
  const { id } = useParams();
  const [fac, setfac] = useState({});

  useEffect(() => {
    fetch("https://64e4d3f8c55563802913d2e7.mockapi.io/fac/" + id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setfac(res);
      });
  }, []);

  console.log(fac);
  return (
    <>
      <div className="col-4">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={fac.img}
            alt="..."
            className="card-img-top img-fluid /"
            style={{ height: "15rem" }}
          ></img>
          <div className="card-body">
            <div>{fac.name}</div>
            {/* <Link to={"/fac/"} className="btn btn-primary">
            back
          </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
