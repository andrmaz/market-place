import React from 'react'
import Nav from './components/Nav/Nav'

function App() {
    return (
        <div className="box-content w-screen h-screen bg-white dark:bg-gray-800">
            <Nav />
            <main className="h-auto w-screen"></main>
            <footer className="absolute bottom-0 w-screen h-28 bg-white text-black-50"></footer>
        </div>
    )
}

export default App
