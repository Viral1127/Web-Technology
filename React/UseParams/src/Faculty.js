import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Faculty() {
  const [Faculty, setFaculty] = useState([]);

  useEffect(() => {
    fetch("https://64e4d3f8c55563802913d2e7.mockapi.io/fac")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setFaculty(res);
      });
  }, []);

  let formatedFaculty = Faculty.map((fac) => {
    return (
      <>
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={fac.img}
              alt="..."
              className="card-img-top img-fluid "
              style={{ height: "15rem" }}
            ></img>
            <div className="card-body">
              <div>{fac.id}</div>
              <div>{fac.name}</div>
              <Link to={"/details/" + fac.id} className="btn btn-primary">
                helo world
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  });

  return <>{formatedFaculty}</>;
}

export default Faculty;
