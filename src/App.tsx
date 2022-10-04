import { createContext, useContext, useState } from 'react'

const CycleContext = createContext({} as any)

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CycleContext)
  return (
    <h1>
      New Cycle Form: {activeCycle}
      <button onClick={() => setActiveCycle(activeCycle + 1)}>
        Alterar ciclo
      </button>
    </h1>
  )
}

function Countdown() {
  const { activeCycle } = useContext(CycleContext)

  return <h1>Countdown: {activeCycle}</h1>
}

export function App() {
  const [activeCycle, setActiveCycle] = useState(0)

  return (
    <CycleContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <NewCycleForm />
        <Countdown />
      </div>
    </CycleContext.Provider>
  )
}
