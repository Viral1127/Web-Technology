import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Delete from "./Delete";
export default function Home() {
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const navigate = useNavigate();

  var url = "https://64e2cbfbbac46e480e77c247.mockapi.io/student/" + id;

  // function delete1() {
  //   fetch(url, { method: "delete" }).then(() => {
  //     navigate("/fac");
  //   });
  // }

  // fetch(url,{method:delete}).then(()=>{navigate("/")})

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setdata(res);
      });
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "50%"
        }}
      >
        <div className="container ">
          <div class="card">
            <img
              src={data.avatar}
              className="card-img-top img-fluid "
              style={{ height: "20rem" }}
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title">{data.name}</h3>
              <h5 class="card-title">{data.id}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>

              <Link className="btn btn-primary m-3" to="/fac">
                BACK
              </Link>
              <div
                className="btn btn-danger m-3"
                onClick={() => {
                  Delete(data.id, () => {
                    navigate("/fac");
                  });
                }}
              >
                DELETE
              </div>

              {/* <Link className="btn btn-success" to="/Edit">
                Edit
              </Link> */}

              {/* <button onClick={<Delete/>}></button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
