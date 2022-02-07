import IAction, { ActionType } from '../models/actions'

export const valorDeBusqueda = (value: string): IAction => {
    return {
        type: ActionType.actualizarKeywords,
        payload: value
    }
}

export const cambiarModoApp = (mode: boolean): IAction => {
    return {
        type: ActionType.cambiarModoApp,
        payload: mode
    }
}
