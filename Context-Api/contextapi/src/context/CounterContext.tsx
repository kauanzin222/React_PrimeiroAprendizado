import { createContext, useState, type Dispatch, type PropsWithChildren, type SetStateAction } from 'react'

type CounterContextValue = {
  counter: number
  setCounter: Dispatch<SetStateAction<number>>
}

export const CounterContext = createContext<CounterContextValue | undefined>(undefined)

export const CounterContextProvider = ({ children }: PropsWithChildren) => {
  const [counter, setCounter] = useState(5)

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  )
}
