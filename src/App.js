import React, { useState, useReducer } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import HomeView from './HomeView'
import CategorySelectionView from './CategorySelectionView'
import NewEntryView from './NewEntryView'
import stateReducer from './stateReducer'
import StateContext from './store'

const App = () => {
  // const [categories, setCategories] = useState(['development', 'movies', 'philosophy', 'other'])
  // const [entries, setEntries] = useState([])
  const initialState = {
    categories: ['development', 'movies', 'philosophy', 'other'],
    entries: []
  }

  const [store, dispatch] = useReducer(stateReducer, initialState)
  const { categories, entries } = store

  return (
    <div>
      <StateContext.Provider value={ { store, dispatch } }>
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/category">Category</Link>
            <Link to="/entry">New Entry</Link>
          </nav>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/category" component={CategorySelectionView} />
          <Route exact path="/entry/new/:cat_id" component={NewEntryView} />
        </BrowserRouter>
      </StateContext.Provider>
    </div>
  )
}

export default App
