import React, { Component } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';

class Filter extends Component {
    render() {
        const idFilter = nanoid();
        const { filter, onInputChangeFilter } = this.props;

        return (
            <>
                <label htmlFor={idFilter}>Find contacts by name</label>
                <input
                    id={idFilter}
                    type="text"
                    name="find"
                    value={filter}
                    onChange={onInputChangeFilter}
                    title="Find contacts by name"
                />
            </>
        );
    }
}

export default Filter