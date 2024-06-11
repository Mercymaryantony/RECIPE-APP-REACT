import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    const[data,changedata]=useState([])
    const fetchdata = ()=>{
        axios.get("http://localhost:8080/view").then(
            (response)=>{
                changedata(response.data)
                console.log(data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        )
        
    }
    useEffect(()=>{fetchdata()},[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                           {data.map(
                            (value,i)=>{
                                return  <div className="col col-12 col sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card" >
                                    <img src="{value.url}" class="card-img-top" alt="..." height="250px"></img>
                                        <div class="card-body">
                                            <h5 class="card-title">{value.item}</h5>
                                            <p class="card-text">{value.desc}</p>
                                            <a href="#" class="btn btn-primary">KNOW MORE</a>
                                        </div>
                                </div>
                            </div>
                            }
                           )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View