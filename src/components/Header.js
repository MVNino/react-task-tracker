import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAddForm }) => {
  return (
    <header>
      <h1>{title}</h1>
      <Button color={showAddForm ? 'red' : 'green'} style={headingStyle} onClick={onAdd} text={showAddForm ? 'Hide form' : 'Add Task'} />
    </header>
  );
};

Header.defaultProps = {
  title: "TASK TRACKER",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
const headingStyle = {
  color: "red",
  backgroundColor: "black",
};

export default Header;
