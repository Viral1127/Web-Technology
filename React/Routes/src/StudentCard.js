var StudentCard = (props) => {
  return (
    <>
      <div className="col-3">
        <div className="card" style={{ width: "18rem" , marginBottom: "30px"  }}>
          <img
            src={props.url}
            alt="..."
            className="card-img-top img-fluid /"
            style={{ height: "15rem"}}
          ></img>
          <div className="card-body">
            <div>{props.name}</div>
            <div>{props.degree}</div>
            <div>{props.clg}</div>
            <div>{props.city}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentCard;
