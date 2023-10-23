import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import { Route, BrowserRouter ,Routes} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    progress:10
  }
  setProgress = (progress) =>{
    this.setState({progress:progress})
  }

  render() {
    this.pageSize=15;
    return (
      <div>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
        <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route  path='/' element={<News setProgress={this.setProgress} key={"general"} pageSize={this.pageSize} country="in" category="general"/>}/>
        <Route  path='/business' element={<News setProgress={this.setProgress} key={"business"} pageSize={this.pageSize} country="in" category="business"/>}/>
        <Route  path='/sports'element={<News setProgress={this.setProgress} key={"sports"} pageSize={this.pageSize} country="in" category="sports"/>}/>
        <Route  path='/health'element={<News setProgress={this.setProgress} key={"health"} pageSize={this.pageSize} country="in" category="health"/>}/>
        <Route  path='/entertainment'element={<News setProgress={this.setProgress} key={"entertainment"} pageSize={this.pageSize} country="in" category="entertainment"/>}/>
        <Route  path='/science'element={<News setProgress={this.setProgress} key={"science"} pageSize={this.pageSize} country="in" category="science"/>}/>
        <Route  path='/technology'element={<News setProgress={this.setProgress} key={"technology"} pageSize={this.pageSize} country="in" category="technology"/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

