import React from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuItem } from 'material-ui/Menu';


const Rooms = ({ rooms }) =>
    <Menu>
        {
            rooms.map(function (room, index) {
                return <MenuItem key={index} primaryText={room.name} />
            })
        }
    </Menu>

export default Rooms;