import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const TeamDetails = (props) => {
    const {strTeam,strCountry,strTeamBadge,strDescriptionEN} = props.detail;
    return (
        <div>
           <Col>
        <Card className="text-center mx-auto">
            <Card.Img className="text-center fluid " variant="top" src={strTeamBadge} />
            <Card.Body>
            <Card.Title>{strTeam}</Card.Title>
            <Card.Text>{strCountry} </Card.Text>
            <Card.Text>{strDescriptionEN?.slice(0,150)} </Card.Text>
            </Card.Body>
            <Link to="/home">
             <Button variant="danger" className="w-50 mx-auto mb-2">Back Home</Button>
             </Link>   
        </Card>
    </Col>
        </div>
    );
};

export default TeamDetails;