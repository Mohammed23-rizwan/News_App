import img1 from "../assets/pexels-padrinan-255379.jpg";

const singlenews = ({ title, description, url, img }) => {
  return (
    <div
      className="card mb-3 d-inline-block my-3 mx-3 py-2 px-2"
      style={{ maxWidth: "298px" }}
    >
      <img
        className="card-img-top"
        src={img ? img : img1}
        style={{ width: "100%", height: "200px" }}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "no description"}
        </p>
        <a href={url} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default singlenews;
