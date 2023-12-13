import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  const { id } = useParams();
  const [data, setdata] = useState({});
  var url = `https://64e2cbfbbac46e480e77c247.mockapi.io/student/${id}`;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setdata(res);
      });
  }, []);

  function editData(data) {
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" }
    }).then((res) => {
      console.log(res);
      navigate("/fac");
    });
  }

  return (
    <>
      <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">
          Name :
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="inputEmail3"
            value={data.name}
            onChange={(e) => {
              setdata({ ...data, name: e.target.value });
            }}
          />
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-2 col-form-label">
          Img Link :
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="inputPassword3"
            value={data.avatar}
            onChange={(e) => {
              setdata({ ...data, avatar: e.target.value });
            }}
          />
        </div>
      </div>
      <button
        type="submit"
        class="btn btn-primary w-25"
        id="edit_submit"
        onClick={() => {
          editData(data);
        }}
      >
        Submit
      </button>
    </>
  );
}
