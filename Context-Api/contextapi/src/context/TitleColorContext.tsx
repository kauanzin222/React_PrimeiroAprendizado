import { createContext, useReducer, type Dispatch, type PropsWithChildren } from "react";

type TitleColorState = {
    titleColor: string
}

export type TitleColorAction =
    | { type: 'set_title_color', payload: string }
    | { type: 'reset_color' }

type TitleColorContextValue = {
    state: TitleColorState
    dispatch: Dispatch<TitleColorAction>
}

export const TitleColorContext = createContext<TitleColorContextValue | undefined>(undefined)

export const titleColorReducer = (
    state: TitleColorState,
    action: TitleColorAction
): TitleColorState => {
    switch (action.type) {
        case 'set_title_color':
            return {
                ...state,
                titleColor: action.payload
            }
        case 'reset_color':
            return initialState
        default:
            return state
    }
}

const initialState = { titleColor: 'purple' }
export const TitleColorContextProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(titleColorReducer, initialState)

    return (
        <TitleColorContext.Provider value={{ state, dispatch }}>
            {children}
        </TitleColorContext.Provider>
    )
}