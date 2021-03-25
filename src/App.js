import React from 'react'
import Nav from './components/Nav/Nav'
import Jumbotron from './components/Jumbotron/Jumbotron'
import ItemsList from './components/ItemsList/ItemsList'

function App() {
  return (
    <div className='box-content w-screen h-auto bg-white dark:bg-gray-800'>
      <Nav />
      <main className='h-auto w-screen bg-gray-50 relative z-50'>
        <Jumbotron />
        <ItemsList />
      </main>
      <footer className='sticky bottom-0 w-screen h-44 bg-indigo-500 z-0 p-4'>
        <span>@Copyright</span>
      </footer>
    </div>
  )
}

export default App
