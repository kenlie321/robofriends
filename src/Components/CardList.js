import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return(
        <div>
            {
                robots.map(robot => {
                    return <Card key={robot.id} name={robot.name} email={robot.email} username={robot.username} />
                 })
            }
        </div>
    )
}

export default CardList;