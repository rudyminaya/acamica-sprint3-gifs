import React, { createContext, useReducer } from 'react'
import IAction, { ActionType } from '../models/actions'
import AppMode from '../models/appMode'
import Autocompletar from '../models/autocompletar'
import IState from '../models/istate'
import PrevGif from '../models/prevGif'
import SearchValue from '../models/searchValue'

const initialState: IState = {
    prevGif: [],
    appMode: AppMode.lightMode,
    searchValue: '',
    autocompletado: undefined
}

interface IContext {
    state: IState
    dispatch: React.Dispatch<IAction>
}

export const Store = createContext<IContext>({
    state: initialState,
    dispatch: () => null
})

function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case ActionType.cambiarModoApp: {
            const payload = action.payload as AppMode
            return {
                ...state,
                appMode: payload
            }
        }

        case ActionType.actualizarLista: {
            const payload = action.payload as PrevGif[]
            return {
                ...state,
                prevGif: payload
            }
        }

        case ActionType.autocompletar: {
            const payload = action.payload as Autocompletar
            return {
                ...state,
                autocompletado: payload
            }
        }

        case ActionType.actualizarKeywords:
            {
                const payload = action.payload as string
                return {
                    ...state,
                    searchValue: payload
                }
            }
            return state
    }
}

type Props = {
    children: React.ReactNode
}

const StoreProvider = (props: Props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Store.Provider value={{ state, dispatch }}>
            {props.children}
        </Store.Provider>
    )
}

export default StoreProvider
