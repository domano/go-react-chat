import React from 'react';
import { Menu, MenuItem } from 'material-ui/Menu';


const Rooms = ({ rooms, selected, onClick }) =>
    <Menu>
        {
            rooms.map(function (room, index) {
                return <MenuItem onClick={onClick} key={index} primaryText={room.name} focusState={selected===index?'focused':'none'}/>
            })
        }
    </Menu>

export default Rooms;