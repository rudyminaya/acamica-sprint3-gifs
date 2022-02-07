import Autocompletar from './autocompletar'
import PrevGif from './prevGif'

type IState = {
    prevGif: PrevGif[]
    darkMode: boolean
    searchValue: string
    autocompletado?: Autocompletar
}
export default IState
