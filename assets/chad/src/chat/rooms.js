import React from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuItem } from 'material-ui/Menu';


const Rooms = ({ rooms, selected }) =>
    <Menu>
        {
            rooms.map(function (room, index) {
                return <MenuItem key={index} primaryText={room.name} focusState={selected===index?'focused':'none'}/>
            })
        }
    </Menu>

export default Rooms;