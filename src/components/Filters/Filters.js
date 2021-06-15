import React from "react";
import PropTypes from "prop-types";
import './Filters.scss';
import { connect } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../redux/contact';

const Filter = ({ filter, changeFilter }) => {
  return (
    <>
        <h3> Find contacts by me </h3>
      <input className="Input-Filter"
        type="text"
        name=''
        value={filter}
        onChange={changeFilter}
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  changeFilter: (e) => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Filter);