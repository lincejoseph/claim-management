import React from 'react';
import axios from 'axios';

class ClaimList extends React.Component {
  
 constructor(props){
   
  super(props);
  this.state = {
    claims: []
  }

}
  componentDidMount() {
    axios.get(`http://localhost:7000/claims`)
      .then(res => {       
        const claims = res.data;        
        this.setState({ claims });
      })
  }

  render() {
       
    let myTr="";
    myTr= this.state.claims.map(function(claim, index){
               return (<tr><td>{claim.emp_id}</td>
                      <td>{claim.emp_name}</td>
                      <td>{claim.claim_number}</td>
                      <td>{claim.claim_type}</td>
                      <td>{claim.claim_program}</td>
                      <td>{claim.start_date}</td>
                      <td>{claim.end_date}</td>
                      </tr>)
        });

   return myTr;
       

 }    
  
}

export default ClaimList;