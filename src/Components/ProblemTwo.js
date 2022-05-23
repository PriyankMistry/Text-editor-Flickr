import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import axios from 'axios'

export default function ProblemTwo() {

  // const [result, setResult] = useState(null);
  // const [query, setQuery] = useState("cat");

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const res = await axios(
  //       `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=856469212751850d05909cd654396d65&text=${query}&sort=relevance&per_page=35&format=json&nojsoncallback=1`
  //     );
  //     setResult(res.data.photos.photo);
  //   };
  //   fetchItems();
  // }, [query]);

  return (
    <>
    <Navbar/>
    </>
  )
}
