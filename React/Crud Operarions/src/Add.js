import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Add() {
  const [data, setdata] = useState({});
  var url = "https://64e2cbfbbac46e480e77c247.mockapi.io/student";
  const navigate = useNavigate();
  function addData(data) {
    fetch(url, {
      method: "POST",
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
        <label class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            onChange={(e) => {
              setdata({ ...data, name: e.target.value });
            }}
          />
        </div>
      </div>
      <button
        class="btn btn-primary w-25"
        id="add_submit"
        onClick={() => {
          addData(data);
        }}
      >
        Submit
      </button>
    </>
  );
}
