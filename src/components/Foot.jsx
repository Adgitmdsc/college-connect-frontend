import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export class Foot extends Component {
  render() {
    return (
      <div style={{bottom:"10px",border:"none",background:"lightgreen",padding:"20px 20px"}}>
        <div style={{display:"flex",justifyContent:"space-between"}} >
        <div style={{display:"flex",gap:"5px"}} >
          <img src="https://www.dscsdmc.org/img/logo.png" alt="" style={{height:"30px",width:"60px"}}/>
        
        
         <span style={{right:"5px"}}>
            GDSC ADGITM
           </span>
        
        </div>
        <div>

          Made With ❤️ by 1% Developer 
        </div>
       
        </div>
      </div>
      )
  }
}

export default Foot