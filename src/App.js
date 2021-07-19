import './App.css';
import React, {useEffect, useRef, useState} from 'react'
import axios from 'axios'

function App() {
  const [photos, setPhotos] = useState([])
  const currentLength = useRef(photos.length)
  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)
  const [totalCount, setTotalCount] = useState(0)
  const totalCountRef = useRef(totalCount)

  useEffect(() => {
    if(fetching){
      axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=12&_page=${currentPage}`)
      .then(response => {
        setPhotos([...photos, ...response.data])
        setCurrentPage(prev => prev+1)
        setTotalCount(response.headers['x-total-count'])
      })
      .finally(()=> {
        setFetching(false)
      })
      
    }

  },[fetching])


  useEffect(()=>{
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [fetching])

  const scrollHandler = (e) => {
    
    if(e.target.documentElement.scrollTop+window.innerHeight+100>e.target.documentElement.scrollHeight&&photos.length<totalCount){
      setFetching(true)
    }
  }



  return (
    <div className="App">
      <div className="container">
        {
        photos.map((item) => <div className="item" key={item.id}>
          <img src={item.thumbnailUrl} alt="photo" />
          <h4 className="title">{item.title}</h4>
        </div>)

        }
      </div>
      <div className="totalCount">Items: {photos.length}</div>
      
    </div>
  );
}

export default App;
