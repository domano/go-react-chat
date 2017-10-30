import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const People = ({ people }) =>
    <div className="people">
        <Menu>
            {
                people.map(function (person, index) {
                    return <MenuItem key={index} primaryText={person.name} />
                })
            }
        </Menu>
    </div>


export default People;