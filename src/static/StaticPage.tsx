import './StaticPage.css';

export const StaticPage = () => {
  return (
    <div className="table">
      <div className="table__parent">
        <div className="table__parent-header table__header ">
          <div className="table__cell"></div>
          <div className="table__cell">ID</div>
          <div className="table__cell">Name</div>
          <div className="table__cell">Gender</div>
          <div className="table__cell">Ability</div>
          <div className="table__cell">Minimal distance</div>
          <div className="table__cell">Weight</div>
          <div className="table__cell">Born</div>
          <div className="table__cell">In space since</div>
          <div className="table__cell">Beer consumption (l/y)</div>
          <div className="table__cell">Knows the answer?</div>
          <div className="table__cell">Delete</div>
        </div>

        <div className="table__parent-data">
          <div className="table__cell">
            <button className="table__toggle-btn">▶</button>
          </div>
          <div className="table__cell">44</div>
          <div className="table__cell">Trillian</div>
          <div className="table__cell">Female</div>
          <div className="table__cell">Mathematician</div>
          <div className="table__cell">6.2</div>
          <div className="table__cell">49</div>
          <div className="table__cell">Mon Dec 14 1994</div>
          <div className="table__cell">Wed Dec 24 2014</div>
          <div className="table__cell">6704</div>
          <div className="table__cell">True</div>
          <div className="table__cell">
            <button className="table__remove-btn">❌</button>
          </div>
        </div>
      </div>

      <div className="table__first-child-wrapper">
        <div className="table__first-child">
          <div className="table__first-child-header table__header">
            <div className="table__cell"></div>
            <div className="table__cell">ID</div>
            <div className="table__cell">Character ID</div>
            <div className="table__cell">Is alive?</div>
            <div className="table__cell">Years</div>
            <div className="table__cell">Delete</div>
          </div>

          <div className="table__first-child-data">
            <div className="table__cell">
              <button className="table__toggle-btn">▶</button>
            </div>
            <div className="table__cell">1007</div>
            <div className="table__cell">44</div>
            <div className="table__cell">true</div>
            <div className="table__cell">29</div>

            <div className="table__cel">
              <button className="table__remove-btn">❌</button>
            </div>
          </div>
        </div>
      </div>

      <div className="table__second-child-wrapper">
        <div className="table__second-child">
          <div className="table__second-child-header table__header">
            <div className="table__cell">ID</div>
            <div className="table__cell">Nemesis ID</div>
            <div className="table__cell">Secret Code</div>
            <div className="table__cell">Delete</div>
          </div>

          <div className="table__second-child-data">
            <div className="table__cell">2008</div>
            <div className="table__cell">1007</div>
            <div className="table__cell">1799820570</div>
            <div className="table__cell">
              <button className="table__remove-btn">❌</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
