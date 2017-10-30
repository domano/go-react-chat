import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const mockPeople = [
    {
        name:"Batman",
    },
    {
        name:"Wolverine",
    },
    {
        name:"Muten Roshi",
    },
    {
        name:"Boris Karloff",
    },
    {
        name:"Max Mustermann",
    },
]
class People extends React.Component {
    render() {
        return (
            <div className="people">
          <Menu>
            {
              mockPeople.map(function (person, index) {
                return <MenuItem key={index} primaryText={person.name} />
              })
            }
          </Menu>
            </div>

        );
    }
}

export default People;