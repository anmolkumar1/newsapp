import './App.css';
import React, { useState, useEffect } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import { Route, BrowserRouter ,Routes} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setProgress]= useState(10);  
  useEffect(() => {
    setProgress(progress)
  },[])
  
  const pageSize=15;
    return (
       <div>
            <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
            />
        <BrowserRouter>
          <NavBar/>
            <Routes>
                <Route  path='/' element={<News setProgress={setProgress} key={"general"} pageSize={pageSize} country="in" category="general"/>}/>
                <Route  path='/business' element={<News setProgress={setProgress} key={"business"} pageSize={pageSize} country="in" category="business"/>}/>
                <Route  path='/sports'element={<News setProgress={setProgress} key={"sports"} pageSize={pageSize} country="in" category="sports"/>}/>
                <Route  path='/health'element={<News setProgress={setProgress} key={"health"} pageSize={pageSize} country="in" category="health"/>}/>
                <Route  path='/entertainment'element={<News setProgress={setProgress} key={"entertainment"} pageSize={pageSize} country="in" category="entertainment"/>}/>
                <Route  path='/science'element={<News setProgress={setProgress} key={"science"} pageSize={pageSize} country="in" category="science"/>}/>
                <Route  path='/technology'element={<News setProgress={setProgress} key={"technology"} pageSize={pageSize} country="in" category="technology"/>}/>
            </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;