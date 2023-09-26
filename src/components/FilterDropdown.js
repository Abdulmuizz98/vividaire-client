import { VdClose } from "./Icons";
import InlineButton from "./InlineButton";
import { useState } from "react";
import { toggleFilterDropdown } from "../utils";
import "./FilterDropdown.css";

const FilterDropdown = ({ tags }) => {
  const [filter, setFilter] = useState([]);

  const handleChecked = (e) => {
    if (e.target.checked) {
      setFilter([...filter, e.target.id]);
    } else if (!e.target.checked) {
      setFilter(filter.filter((el) => el !== e.target.id));
    }
  };

  // console.log("Filter: ", filter);
  return (
    <div className="filter-dropdown hidden">
      <InlineButton
        value={<VdClose />}
        classString="position-top-left"
        onClick={toggleFilterDropdown}
      />

      <div className="tags">
        {tags.length &&
          tags.map((tag) => (
            <div className="tag">
              <span className="input-border">
                <input
                  type="checkbox"
                  class="filter-checkbox"
                  id={tag}
                  onChange={handleChecked}
                />
              </span>
              <label htmlFor="filter-checkbox"> {tag}</label>
            </div>
          ))}
      </div>
      <InlineButton value="CLEAR" classString="clear-btn" />
    </div>
  );
};

export default FilterDropdown;
