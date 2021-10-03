import React from 'react';
import { Card, Col,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Teams = (props) => {
    const {strTeam,strCountry,strTeamBadge,strDescriptionEN,idTeam} = props.team;
    const buttonUrl = `/home/${idTeam}`
    return (
        <div>
            
     <Col>
        <Card className="text-center">
            <Card.Img className="text-center fluid " variant="top" src={strTeamBadge} />
            <Card.Body>
            <Card.Title>{strTeam}</Card.Title>
            <Card.Text>{strCountry} </Card.Text>
            <Card.Text>{strDescriptionEN?.slice(0,150)} </Card.Text>
            </Card.Body>
            <Link to={buttonUrl}>
             <Button variant="danger" className="w-50 mx-auto mb-2">Team Details</Button>
             </Link>   
        </Card>
    </Col>
        </div>
       
    );
};

export default Teams;