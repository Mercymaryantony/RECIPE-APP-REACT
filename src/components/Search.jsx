import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Search = () => {
    const [data, setData] = useState({
        "item": ""
    })
    const inputhandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const [result, setresult] = useState([])
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search",data).then((response)=>{
            setresult(response.data)
        }).catch((error)=>{
            console.log(error.message)
            alert(error.message)

        })
        

        }
    
    return (
        <div>
            <Navbar />
            <div className="conatiner">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">ITEM NAME</label>
                                <input type="text" className="form-control" name='item' value={data.item} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>SEARCH</button>
                            </div>
                        </div>
                    </div>
                    <div className="row g-3">
                        {result.map(
                            (value, i) => {
                                return <div className="col col-12 col sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
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


    )
}

export default Search