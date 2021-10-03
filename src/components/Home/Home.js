import React, { useEffect, useState } from 'react';
import { Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import Teams from '../Teams/Teams';

const Home = () => {
    const [teams,setTeams] = useState([]);
    const [searchText,setSearchText] = useState('')
   useEffect(()=>{
       fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`)
       .then(res => res.json())
       .then(data => setTeams(data.teams))
   },[searchText]);
    const handleSearch =(e)=>{
         const searchTextValue = e.target.value;
         setSearchText(searchTextValue);
    }
    
    return (
        <div>
    <InputGroup onChange={handleSearch} className="w-50 mx-auto mt-3">
        <FormControl
        aria-label="Example text with button addon"
        aria-describedby="basic-addon1" placeholder="Search Your Team"
        />
   </InputGroup>
   
   <Container className="mt-5 mb-5">
   <Row xs={1} md={4} className="g-4">

    {
        teams?.map(team => <Teams team={team}></Teams>)
    }
    
  </Row>
  </Container>






        </div>
    );
};

export default Home;