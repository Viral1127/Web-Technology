var FacultyCard = (props) => {
  return (
    <>
      {/* <div className="container">
        <div className="row"> */}
      <div className="col-3">
        <div className="card" style={{ width: "18rem", marginBottom: "30px" }}>
          <img
            src={props.url}
            alt="..."
            className="card-img-top img-fluid /"
            style={{ height: "15rem" }}
          ></img>
          <div className="card-body">
            <div>{props.name}</div>
            <div>{props.prof}</div>
            <div>{props.desig}</div>
            <div>{props.exp}</div>
            <div>{props.pass}</div>
          </div>
        </div>
      </div>
      {/* </div>
      </div> */}
    </>
  );
};

export default FacultyCard;
