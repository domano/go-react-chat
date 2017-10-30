import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';

const mockRooms = [
    {
        name:"MyTeam A",
    },
    {
        name:"Off-Topic",
    },
    {
        name:"Funny Memes",
    },
    {
        name:"MyTeam B",
    },
    {
        name:"Stuff",
    },
]
class Rooms extends React.Component {
    render() {
        return (
            <div className="rooms">
          <List>
            {
              mockRooms.map(function (room, index) {
                return <ListItem key={index} primaryText={room.name} />
              })
            }
          </List>
            </div>

        );
    }
}

export default Rooms;