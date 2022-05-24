import React, { useState } from 'react'
import Header from './Header'

const Addbus = () => {
  var [route,setRoute]=useState("")
  var [name,setName]=useState("")
  var [reg,setReg]=useState("")
  var [owner,setOwner]=useState("")
  var [contact,setContact]=useState("")

  const subData =() => {
    const data ={ "Route":route,"Bus Name":name,"Bus Reg":reg,"Owner Name":owner,"Contact":contact }
    console.log(data)
  }

  return (
    <div>
      <Header/>
      <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-2 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" className="form-label">Route</label>
                            <input onChange={(e)=>{setRoute(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">Bus Name</label>
                            <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">Bus Reg</label>
                            <input onChange={(e)=>{setReg(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">Owner Name</label>
                            <input onChange={(e)=>{setOwner(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">Contact Number</label>
                            <input onChange={(e)=>{setContact(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button onClick={subData} className="btn btn-primary">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addbus