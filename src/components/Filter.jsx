export default function Filter(){
    return(
        <div>
            <aside className="filter-aside">
              <div className="prod-head">
                <div className="prod-brand">Filter</div>
                <div className="prod-clear">Clear</div>
              </div>
              <div className="prod-price">
                <div className="filter-heading">Price</div>
                <input
                  type="range"
                  value="35"
                  name="range-input"
                  min="500"
                  max="2000"
                  oninput="this.nextElementSibling.value = this.value"
                />
                <output>500</output>
              </div>
              <div className="prod-category">
                <div className="filter-heading">Category</div>
                <ul className="filter-list">
                  <li className="filter-list-item">
                    <label>
                      <input type="radio" name="men-cloth" />
                      Men
                    </label>
                  </li>
                  <li className="filter-list-item">
                    <label for="">
                      <input type="radio" name="women-cloth" />
                      Women
                    </label>
                  </li>
                  <li className="filter-list-item">
                    <label for="">
                      <input type="radio" name="kid-cloth" />
                      Kid
                    </label>
                  </li>
                </ul>
              </div>
              <div className="prod-rating">
                <div className="filter-heading">Rating</div>
                <ul className="filter-list">
                  <li className="filter-list-item">
                    <label>
                      <input type="checkbox" name="men-cloth" />
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </label>
                  </li>
                  <li className="filter-list-item">
                    <label>
                      <input type="checkbox" name="men-cloth" />
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                    </label>
                  </li>
                  <li className="filter-list-item">
                    <label>
                      <input type="checkbox" name="men-cloth" />
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                      <i className="fa fa-star-o"></i>
                    </label>
                  </li>
                  <li className="filter-list-item">
                    <label>
                      <input type="checkbox" name="men-cloth" />
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </label>
                  </li>
                  <li className="filter-list-item">
                    <label>
                      <input type="checkbox" name="men-cloth" />
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </label>
                  </li>
                </ul>
              </div>
            </aside>
        </div>
    );
}