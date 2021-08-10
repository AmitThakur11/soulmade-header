import { useState } from "react";
import "./css/footer.css";
import sort from "../svg/sort.svg";
import filter from "../svg/filter.svg";

const Footer = () => {
  let [sortFilter, setSortFilter] = useState({ sort: false, filter: false });
  let allClose = () =>
    setSortFilter({ ...sortFilter, sort: false, filter: false });
  return (
    <section className="sort_filter">
      <ul
        className={sortFilter.sort ? "active" : ""}
        onclick={() => allClose()}
      >
        <li>
          {" "}
          <i
            onClick={() => allClose()}
            className="fa fa-chevron-circle-down close"
          ></i>
        </li>
        <li>sort by price </li>
        <li>sort </li>
        <li>sort </li>
      </ul>

      <ul className={sortFilter.filter ? "active" : ""}>
        <li>
          {" "}
          <i
            onClick={() => allClose()}
            className="fa fa-chevron-circle-down close"
          >
            {" "}
            Filter
          </i>
        </li>
        <li>filter by price </li>
        <li>filter </li>
        <li>filter </li>
      </ul>

      <div className="sort_filter_btn">
        <div
          className="filter_btn"
          onClick={() =>
            setSortFilter({
              ...sortFilter,
              filter: !sortFilter.filter,
              sort: false
            })
          }
        >
          <img src={sort} alt="sort" width="30px" />
        </div>
        <div
          className="sort_btn"
          onClick={() =>
            setSortFilter({
              ...sortFilter,
              sort: !sortFilter.sort,
              filter: false
            })
          }
        >
          <img src={filter} alt="sort" width="25px" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
