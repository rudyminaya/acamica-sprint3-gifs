import AppMode from './appMode'
import Autocompletar from './autocompletar'
import ListaGif from './listaGif'
import SearchValue from './searchValue'

type IState = {
    listaGif?: ListaGif
    appMode: AppMode
    searchValue?: SearchValue
    autocompletado?: Autocompletar
}
export default IState
