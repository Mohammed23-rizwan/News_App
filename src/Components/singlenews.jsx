const singlenews = ({ title }) => {
  return (
    <div>
      <p>{title.slice(0, 50)}</p>
    </div>
  );
};

export default singlenews;
