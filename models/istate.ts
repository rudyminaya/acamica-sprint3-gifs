import AppMode from './appMode'
import Autocompletar from './autocompletar'
import PrevGif from './prevGif'

type IState = {
    prevGif: PrevGif[]
    appMode: AppMode
    searchValue: string
    autocompletado?: Autocompletar
}
export default IState
