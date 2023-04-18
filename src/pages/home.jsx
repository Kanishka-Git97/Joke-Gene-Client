import React, {useEffect, useState} from 'react'
import {Row, Col, Typography, Select, Button, Skeleton, Input} from 'antd';
import { RedoOutlined } from '@ant-design/icons';
import bg from '../assets/2673774-middle-removebg-preview.png';
import { Typewriter } from 'react-simple-typewriter'

const {Title} = Typography;
const {TextArea} = Input;

function Home() {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedFormType, setSelectedFormType] = useState(null);
  const [joke,setJoke] = useState(null);
  const [jokeForm, setJokeForm] = useState(null);

  const fetchAvailableTypes = async ()=>{
    await fetch('https://joke-service.onrender.com/types').then(response=>response.json()).then(data=>{
    let temp = [];
    data.map((item) => {
      temp.push({value: item._id, label: item.type});
    }) 
    setTypes(temp);
    })
  }

  // Handle Generate button
  const handleGenerate = async ()=>{
    await fetch('https://joke-service.onrender.com/random', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({type: selectedType})
    }).then(response=>response.json()).then(data=>{
      console.log(data);
      if(data === null){
        setJoke(null);
      }
      else{
        setJoke(data.joke);
      }
    })
  }

  // Handle Submitted Joke
  const handleJoke = async ()=>{
    await fetch('https://joke-service.onrender.com/jokes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({type: selectedFormType, joke: jokeForm})
    }).then(response=>response.json()).then(
      setJokeForm(null)
    )
  }


 

  useEffect(()=>{
    fetchAvailableTypes();
  },[]);

  return (
    <div>
      <Row align='center' style={{ marginTop:'70px' }}>
          <Col>
            <img src={bg} className='bg-img'/>
          </Col>
         
          <Col>
             {/* Header Section */}
             <div className='right-section' style={{ backgroundColor: 'whitesmoke', paddingLeft: '30px',paddingRight: '30px',paddingBottom: '30px', paddingTop:'20px', borderRadius: '10px', opacity: '80%', maxWidth: '400px' }}>
             <div className='title-section' style={{ marginBottom: '10px' }}>
              <Title level={1} style={{ padding: 0, color: 'black', fontWeight: 'bold', marginBottom: 0 }}>{`<`}Jokes{`/>`}</Title>
              <span style={{ marginTop: 0, color: 'black' }}>Keep alive and stay Smile 😉</span>
             </div>


             {/* Form Section */}
             <div className='form-section'>
             <Select
                style={{ 
                  marginRight: '10px'
                 }}
                showSearch
                onSearch={setSelectedType}
                onChange={setSelectedType}
                placeholder="Select Joke Type"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={types}
                
              />
              <Button icon={<RedoOutlined />} onClick={handleGenerate}>Generate</Button>
             </div>

             {/* Result Section  */}
              {
                joke === null || joke === undefined
                ? <Skeleton active size='small'></Skeleton> 
                : <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
                  <Typewriter
                    key={joke}
                    words={[joke]}
                    autoStart = {true}
                    loop={1}
                    cursor
                    cursorStyle='|'
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    
                  />
                
                </div>
              }
             </div>

             <div className='joke-add-section' style={{ marginTop: '10px', backgroundColor: 'whitesmoke', padding: '30px', borderRadius: '10px', opacity: '80%', maxWidth: '400px' }}>
                <div className='joke-add-section-header'>
                  <span level={5} style={{ marginBottom: '0px' }}>Psst, Hey! Have any Joke?</span>
                  <Title level={3} style={{ marginTop: '0px' }}>Send Us Your Joke</Title>
                </div>
                <div className='form-section'>
                <TextArea placeholder="Type Here Your Joke" autoSize onChange={(e)=>setJokeForm(e.target.value)} value={jokeForm} />
                  <div
                    style={{
                      margin: '0px 0',
                    }}
                  />
                </div>
               
                <Select
                    style={{ 
                      marginRight: '10px',
                      marginTop: '10px'
                    }}
                    showSearch
                    onSearch={setSelectedFormType}
                    onChange={setSelectedFormType}
                    placeholder="Select Joke Type"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={types}
                    
                  />
                  <Button type='primary' onClick={handleJoke}>Post Joke</Button>
             </div>
          </Col>
        </Row>
    </div>
  )
}

export default Home
