import React from 'react';
import './App.css';
import './styles/index.css';
import './styles/header.css';
import './styles/main.css';
import './styles/footer.css';
import './styles/common.css';
import './styles/repositoriesView.css';
import {Header} from './components/header';
import {Content} from './components/content';
import {Footer} from './components/footer';


function App() {
  return (
    <div className="App">
		<Header/>
		<Content/>
		<Footer/>
    </div>
  );
}

export default App;
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
// 	Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
// 	className="App-link"
// 	href="https://reactjs.org"
// 	target="_blank"
// 	rel="noopener noreferrer"
//   >
// 	Learn React
//   </a>
// </header>
