import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import TeamDetails from '../TeamDetails/TeamDetails';

const SingleTeamDetails = () => {
    const {idTeam} = useParams();
    
    const [details,setDetails] = useState();
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        .then(res => res.json())
        .then(data => setDetails(data.teams));
    },[])

    return (
        <div>
            <Container className="mt-2 mb-2">
   <Row xs={1} md={4} className="g-4">
 
      {
        details?.map(detail => <TeamDetails detail={detail}></TeamDetails>)
      }
    
    
  </Row>
  </Container>
        </div>
    );
};

export default SingleTeamDetails;