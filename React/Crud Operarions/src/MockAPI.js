import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Delete from "./Delete";
export default function MockAPI() {
  const [data, setdata] = useState([]);
  const [data2, setdata2] = useState([]);

  var url = "https://64e2cbfbbac46e480e77c247.mockapi.io/student";
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setdata(res);
        setdata2(res);
      });
  }, []);

  function filter(e) {
    if (e !== "") {
      setdata(
        data.filter((stu) => {
          return stu.name.toLowerCase().includes(e);
        })
      );
    } else {
      setdata(data2);
    }
  }

  const print = data.map((stu, index) => {
    return (
      <>
        <div className="col-3">
          <div class="card m-3">
            <img
              src={stu.avatar}
              className="card-img-top img-fluid"
              style={{ height: "15rem" }}
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{stu.name}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              {/* <button
                onClick={() => {
                  // console.log(index + 1);
                  var temp = [...data];
                  temp.splice(index, 1);
                  setdata(temp);
                }}
              >
                delete
              </button> */}
              <Link to={`/${stu.id}`} className="btn btn-primary">
                More
              </Link>
              <Link to={`/edit/${stu.id}`} className="btn btn-success ms-1">
                Edit
              </Link>
              <button
                className="btn btn-danger ms-1"
                onClick={() => {
                  Delete(data.id, () => {
                    setdata(
                      data.filter((e) => {
                        return e.id != stu.id;
                      })
                    );
                  });
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <input
        class="form-control m-3"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => {
          filter(e.target.value);
        }}
      ></input>
      <div className="row">{print}</div>
    </>
  );
}
