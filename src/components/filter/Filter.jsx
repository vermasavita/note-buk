import "./filter.css";
const Filter = () => {
  return (
    <div className="filter">
      <div className="filter-header">
        <h2>Filter </h2>
        <button className="filter-clear-btn">Clear</button>
      </div>

      <div className="filter-ipt-container">
        <h2>By time:</h2>
        <div className="filter-ipt">
          <input type="radio" name="" id="" />
          <label htmlFor="">New to old</label>
        </div>
        <div className="filter-ipt">
          <input type="radio" name="" id="" />
          <label htmlFor="">Old to new</label>
        </div>
      </div>
      <div>
        <h2>By Priority:</h2>
        <div className="filter-ipt">
          <input type="radio" name="" id="" />
          <label htmlFor="">High to Low</label>
        </div>
        <div className="filter-ipt">
          <input type="radio" name="" id="" />
          <label htmlFor="">Low to High</label>
        </div>
      </div>
    </div>
  );
};

export { Filter };
