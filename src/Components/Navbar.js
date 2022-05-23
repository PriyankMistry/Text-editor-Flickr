import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function Navbar() {

  const [photo, setPhoto] = useState("");
  const [result, setResult] = useState([])

   const onClick = event => {
     event.preventDefault()
     axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=856469212751850d05909cd654396d65&text=${photo}&sort=relevance&per_page=35&format=json&nojsoncallback=1&extras=url_o`)
     .then((response)=> {
      console.log(response.data.photos.photo);
      setResult(response.data.photos.photo);
     })
    };
  return (
    <>
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">My Photo Gallery</a>
        <button className="navbar-toggler my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="d-flex ms-auto" role="search">
            <input className="form-control me-2" type="text" placeholder="Photos, people, groups" value={photo} onChange={(e)=>{
              setPhoto(e.target.value)
            }}/>
            <button className="btn btn-outline-success" type="submit" onClick={onClick}>Search</button>
          </form>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Log in</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sign up</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/"><h5>HOME</h5></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container">
      <div className="row text-center text-lg-start">
        {result.length > 0 ? 
        result.map((value) => {
          return (
            <div className="col-lg-3 col-md-4 col-6">
              <a href="#" className='d-block mb-4 h-100'>
                <img src={`https://farm${value.farm}.staticflickr.com/${value.server}/${value.id}_${value.secret}.jpg`} alt="" className='img-fluid img-thumbnail' key={value.id}/>
              </a>
            </div>
          )
        }) : ""  }
      </div>
    </div>
  </>
  )
}
