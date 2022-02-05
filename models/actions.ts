interface IAction {
    type: ActionType
    payload: any
}

export enum ActionType {
    cambiarModoApp,
    actualizarLista,
    autocompletar
}

export default IAction
