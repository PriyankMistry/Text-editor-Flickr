import React from 'react'

export default function Home() {
  return (
      <>
      <div className="own" style={{textAlign:"center", marginTop:"10vh"}}><h3>Developed by - Priyank Mistry</h3></div>
      <div className='container'>
          <div className="row">
              <div className="col" style={{ textAlign: "center", marginTop: "20vh" }}>
                  <a href="https://texteditor-flickrgallery-7pm.netlify.app/problemone"><button type="button" class="btn btn-primary btn-lg">Problem 1</button></a>
              </div>
              <div className="col" style={{ textAlign: "center", marginTop: "20vh" }}>
                  <a href="https://texteditor-flickrgallery-7pm.netlify.app/problemtwo"><button type="button" class="btn btn-primary btn-lg">Problem 2</button></a>
              </div>
          </div>
      </div>
      </>
  )
}
