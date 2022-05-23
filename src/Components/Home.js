import React from 'react'

export default function Home() {
  return (
      <>
      <div className="own" style={{textAlign:"center", marginTop:"10vh"}}><h3>Developed by - Priyank Mistry</h3></div>
      <div className='container'>
          <div className="row">
              <div className="col" style={{ textAlign: "center", marginTop: "20vh" }}>
                  <a href="http://localhost:3000/problemone"><button type="button" class="btn btn-primary btn-lg">Problem 1</button></a>
              </div>
              <div className="col" style={{ textAlign: "center", marginTop: "20vh" }}>
                  <a href="http://localhost:3000/problemtwo"><button type="button" class="btn btn-primary btn-lg">Problem 2</button></a>
              </div>
          </div>
      </div>
      </>
  )
}
