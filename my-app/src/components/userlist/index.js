import React from 'react'
import {
    Button,
    Table
  } from "react-bootstrap";

export default function propertyList (props){
 return(
  <>
  {props.propertyData.length ? (
    

    <Table style={{marginTop:"50px",marginLeft:"200px"}} >
    <thead style={{marginTop:"50px",marginLeft:"200px"}}>
      <tr >
        <th style={{marginTop:"50px",marginLeft:"200px",padding:"10px"}} > Name</th>
        <th style={{marginTop:"50px",marginLeft:"200px",padding:"10px"}}>Property </th>
        <th  style={{marginTop:"50px",marginLeft:"200px",padding:"10px"}}>Size</th>
        
        <th style={{marginTop:"50px",marginLeft:"200px",padding:"10px"}} >Description</th>
        <th style={{marginTop:"50px",marginLeft:"200px",padding:"10px"}}>Action</th>
      </tr>
    </thead>
    <tbody style={{marginTop:"50px",marginLeft:"200px"}}>
      {props.propertyData.map((property, i) => (
        <tr key={i} style={{marginRight:"30px"}}>
          <td>{property.Name}</td>
          <td>{property.Property}</td>
          <td>{property.Size}</td>
          
          <td>{property.Description}</td>
          <td>
            
              <Button variant="danger" onClick={props.deleProperty.bind(this,i)}>Delete</Button>
              
            
          </td>
        </tr>
      ))}
    </tbody>
  </Table>)
  :(
    <div style={{marginTop:"50px",height:"50px",fontSize:"30px",color:"red"}}> No Data Available</div>
  )
}
  
</>
 )
}
