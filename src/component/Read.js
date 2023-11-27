import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { Button, Table } from 'semantic-ui-react'
import { API_URL } from '../Api/URL'
import {useNavigate} from 'react-router-dom'


function Read() {
        const [apiData,setAPIData] = useState([])
        const navigate = useNavigate();

        const updateUser = ({
          yourName,
          address,
          birthday,
          mail,id}) =>{
            localStorage.setItem('id',id)
            localStorage.setItem('yourName',yourName)
            localStorage.setItem('address',address)
            localStorage.setItem('birthday',birthday)
            localStorage.setItem('mail',mail)
          navigate('/update')
        }
        const deleteUser = async (id) =>{
        await axios.delete(API_URL + id)
        callGETApi();
        } 
         
       const callGETApi = async()=>{
          const resp =  await axios.get(API_URL);
          setAPIData(resp.data);
          
        }
    useEffect(() =>{
      callGETApi();
    },[] ) ;     

  return (
    
    
    <>
    <br />
    <div>
    {/* <Button  content="Back to form" floated="left"  background='red'  /> */}
    <Button primary floated='left' onClick={()=> navigate(-1)}>Back to Form</Button>
    
    </div>
    <br />
    <br />
    <br />
    <div>
    
    
    <Table singleLine>
      
         <Table.Header>
          <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>  
          <Table.HeaderCell>Address</Table.HeaderCell>
          <Table.HeaderCell>Date of Birth</Table.HeaderCell>
          <Table.HeaderCell>Gmail</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
          </Table.Row>
         </Table.Header>
         <Table.Body>
          {
            apiData.map(data =>(
            <Table.Row key={data.id}>
            <Table.Cell>{data.yourName}</Table.Cell>  
            <Table.Cell>{data.address}</Table.Cell>
            <Table.Cell>{data.birthday}</Table.Cell>
            <Table.Cell>{data.mail}</Table.Cell>
            <Table.Cell>
              <Button content='Secondary'  onClick={()=> deleteUser(data.id)}>Delete</Button>
            </Table.Cell>
            <Table.Cell>
              <Button  content='Primary' onClick={()=> updateUser(data)}>Update</Button>
            </Table.Cell>
            
          </Table.Row>

            )
              )
          }
          
         </Table.Body>


    </Table>
    </div> 
    </>
  )
}

export default Read