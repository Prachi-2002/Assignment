import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FileManagementSystem from './components/FileStructureManagement'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<FileManagementSystem />
    </>
  )
}

export default App
