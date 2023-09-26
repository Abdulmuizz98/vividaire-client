import { VdClose } from "./Icons";
import InlineButton from "./InlineButton";
import { toggleFilterDropdown } from "../utils";
import "./FilterDropdown.css";

const FilterDropdown = ({ tags }) => {
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
              <input
                type="checkbox"
                class="filter-checkbox"
                id="filter-checkbox"
              />
              <label htmlFor="filter-checkbox"> {tag}</label>
            </div>
          ))}
      </div>
      <InlineButton value="CLEAR" classString="clear-btn" />
    </div>
  );
};

export default FilterDropdown;
