import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ProductList} from "./components/ProductList.tsx";

function App() {
    const [count, setCount] = useState(0)
    const [dato, setDato] = useState([])
    const url = import.meta.env.VITE_API_URL
    useEffect(() => {
        const response = fetch(url + "/products")
        .then(res => res.json())
        .then(data => setDato(data))

    }, [])

    return (
        <>
            <ProductList  products={dato}/>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>

            </div>

        </>
    )
}

export default App
