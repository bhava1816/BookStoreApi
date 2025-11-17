import React from 'react'
import Navigation from './Navigation'
import { useSelector } from 'react-redux'
import BookStore from './BookStore'
function Dashbroad() {
  let objectdata=useSelector((store)=>{
      return store.login.data
  })
  console.log(objectdata)
  

   
  return (
    <div className="dashboard">
      <Navigation></Navigation>
      
      {Array.isArray(objectdata) && objectdata.length > 0 ? (
  objectdata.map((ele, i) => (
    <div key={i} className="user-section">
      <h1>{ele.firstName}</h1>
      <h1>{ele.lastName}</h1>
      <h1>{ele.email}</h1>
      <img src={`http://localhost:1111/uploads/${ele.profilepic}`} alt=''  width="200px" height="200px"/>
    </div>
    
  ))
) : (
  <h2>No data found</h2>
)}
<BookStore></BookStore> 
    </div>
  )
}

export default Dashbroad
