import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-row">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="h-24 p-6 transition-[filter] duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-24 p-6 transition-[filter] duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#61dafbaa] animate-[spin_20s_linear_infinite]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl">Vite + React</h1>
      <div className="p-8">
        <button
          className="rounded-lg border border-transparent px-4 py-2 text-base font-medium cursor-pointer transition-colors hover:border-[#646cff]"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="my-4">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <h1 className="text-3xl font-bold underline text-red-500">
          Hello world!
        </h1>
      </div>
      <p className="text-[#888]">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  )
}

export default App
