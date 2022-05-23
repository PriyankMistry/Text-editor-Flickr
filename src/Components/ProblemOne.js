import React, { useState } from 'react'
import "../Assets/ProblemOne.css"

export default function ProblemOne() {
    const [boldFont1, setBoldFont1] = useState(false);
    const [italicFont1, setItalicFont1] = useState(false);
    const [underlineFont1, setUnderlineFont1] = useState(false);
    const [fontSize1, setFontSize1] = useState(16);
    const [fontColor1, setFontColor1] = useState("");

    const [boldFont2, setBoldFont2] = useState(false);
    const [italicFont2, setItalicFont2] = useState(false);
    const [underlineFont2, setUnderlineFont2] = useState(false);
    const [fontSize2, setFontSize2] = useState(16);
    const [fontColor2, setFontColor2] = useState("");

    const [boldFont3, setBoldFont3] = useState(false);
    const [italicFont3, setItalicFont3] = useState(false);
    const [underlineFont3, setUnderlineFont3] = useState(false);
    const [fontSize3, setFontSize3] = useState(16);
    const [fontColor3, setFontColor3] = useState("");

    const [boldFont4, setBoldFont4] = useState(false);
    const [italicFont4, setItalicFont4] = useState(false);
    const [underlineFont4, setUnderlineFont4] = useState(false);
    const [fontSize4, setFontSize4] = useState(16);
    const [fontColor4, setFontColor4] = useState("");

    const onClickB1 = () => {
       setBoldFont1(!boldFont1) 
    }
    const onClickI1 = () => {
       setItalicFont1(!italicFont1)
    }
    const onClickU1 = () => {
        setUnderlineFont1(!underlineFont1)
     }
     const onClickB2 = () => {
        setBoldFont2(!boldFont2) 
     }
     const onClickI2 = () => {
        setItalicFont2(!italicFont2)
     }
     const onClickU2 = () => {
         setUnderlineFont2(!underlineFont2)
      }
      const onClickB3 = () => {
        setBoldFont3(!boldFont3) 
     }
     const onClickI3 = () => {
        setItalicFont3(!italicFont3)
     }
     const onClickU3 = () => {
         setUnderlineFont3(!underlineFont3)
      }
      const onClickB4 = () => {
        setBoldFont4(!boldFont4) 
     }
     const onClickI4 = () => {
        setItalicFont4(!italicFont4)
     }
     const onClickU4 = () => {
         setUnderlineFont4(!underlineFont4)
      }

  return (
    <div className="cards">
        <div className='card1'>
            <button type="button" className="btn btn-warning control-btn mx-2" onClick={onClickB1}>Bold</button>
            <button type="button" className="btn btn-warning control-btn mx-2" onClick={onClickI1}>Italics</button>
            <button type="button" className="btn btn-warning control-btn mx-2" onClick={onClickU1}>Underline</button>
            <input type="number" className="form-control mx-2" placeholder='Font size' style={{width:"20%"}} onChange={(e)=>{ 
                const target = e.target.value;
                {target <= 32 ? setFontSize1(target) : setFontSize1(20)}}} />
            <input type="color" className="form-control form-control-color mx-2" id='btn-picker-4' onChange={(e)=>{
              setFontColor1(e.target.value)}}/>
        </div>
        <div className="card" style={{
            fontWeight: boldFont1 ? "bold" : "normal", 
            fontStyle: italicFont1 ? "italic" : "normal", 
            textDecoration: underlineFont1 ? "underline" : "none",
            fontSize: `${fontSize1}px`,
            color:`${fontColor1}`}}>He's not the sharpest knife in the drawer</div>
        <div className='card1'>
            <button type="button" className="btn btn-warning control-btn mx-2" onClick={onClickB2}>Bold</button>
            <button type="button" className="btn btn-warning control-btn mx-2" onClick={onClickI2}>Italics</button>
            <button type="button" className="btn btn-warning control-btn mx-2" onClick={onClickU2}>Underline</button>
            <input type="number" className="form-control mx-2" placeholder='Font size' style={{width:"20%"}} onChange={(e)=>{ 
                const target = e.target.value;
                {target <= 32 ? setFontSize2(target) : setFontSize2(20)}}} />
            <input type="color" className="form-control form-control-color mx-2" id='btn-picker-4' onChange={(e)=>{
              setFontColor2(e.target.value)}}/>
        </div>
        <div className="card" style={{
            fontWeight: boldFont2 ? "bold" : "normal", 
            fontStyle: italicFont2 ? "italic" : "normal", 
            textDecoration: underlineFont2 ? "underline" : "none",
            fontSize: `${fontSize2}px`,
            color:`${fontColor2}`}}>The big building was blazing with lights</div>
        <div className='card1'>
            <button type="button" className="btn btn-warning control-btn mx-2" onClick={onClickB3}>Bold</button>
            <button type="button" className="btn btn-warning control-btn mx-2" onClick={onClickI3}>Italics</button>
            <button type="button" className="btn btn-warning control-btn mx-2" onClick={onClickU3}>Underline</button>
            <input type="number" className="form-control mx-2" placeholder='Font size' style={{width:"20%"}} onChange={(e)=>{ 
                const target = e.target.value;
                {target <= 32 ? setFontSize3(target) : setFontSize3(20)}}} />
            <input type="color" className="form-control form-control-color mx-2" id='btn-picker-4' onChange={(e)=>{
              setFontColor3(e.target.value)}}/>
        </div>
        <div className="card" style={{
            fontWeight: boldFont3 ? "bold" : "normal", 
            fontStyle: italicFont3 ? "italic" : "normal", 
            textDecoration: underlineFont3 ? "underline" : "none",
            fontSize: `${fontSize3}px`,
            color:`${fontColor3}`}}>Now you must answer some big questions</div>
        <div className='card1'>
            <button type="button" className="btn btn-warning control-btn mx-2" onClick={onClickB4}>Bold</button>
            <button type="button" className="btn btn-warning control-btn mx-2" onClick={onClickI4}>Italics</button>
            <button type="button" className="btn btn-warning control-btn mx-2" onClick={onClickU4}>Underline</button>
            <input type="number" className="form-control mx-2" placeholder='Font size' style={{width:"20%"}} onChange={(e)=>{ 
                const target = e.target.value;
                {target <= 32 ? setFontSize4(target) : setFontSize4(20)}}} />
            <input type="color" className="form-control form-control-color mx-2" id='btn-picker-4' onChange={(e)=>{
              setFontColor4(e.target.value)}}/>
        </div>
        <div className="card" style={{
            fontWeight: boldFont4 ? "bold" : "normal", 
            fontStyle: italicFont4 ? "italic" : "normal", 
            textDecoration: underlineFont4 ? "underline" : "none",
            fontSize: `${fontSize4}px`,
            color:`${fontColor4}`}}>Get your act together!</div>
    </div>
  )
}
