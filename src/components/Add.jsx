import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Add = () => {
    const [data,setData]=useState({
        "item":"",
        "desc":"",
        "url":"",
        "ing":"",
        "prep":""
    })
    const inputhandler = (event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue = ()=>{
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="ADD")
                    {
                        alert("SUCCESS")
                    }
                else{
                    alert("FAILED")
                }
            }
        ).catch().finally()
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">ITEM NAME</label>
                                    <input type="text" className="form-control" name='item' value={data.item} onChange={inputhandler} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">DESCRIPTION</label>
                                    <textarea name="desc" value={data.desc} onChange={inputhandler} id="" className="form-control"></textarea>
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">IMAGE</label>
                                    <textarea name="url"  value={data.url} onChange={inputhandler} id="" className="form-control"></textarea>
                                </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">INGREDIENTS</label>
                            <textarea name="ing" value={data.ing} onChange={inputhandler} id="" className="form-control"></textarea>
                            </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">PREPARATION</label>
                            <textarea name="prep" value={data.prep} onChange={inputhandler} id="" className="form-control"></textarea>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary" onClick={readValue}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add