//a ideia desse arquivo index é juntar todos os idiomas que tiver no site (nesse caso: pt, en)

import { messages as portugueseMessages} from './pt' 
import { messages as englishMessages } from './en'

const messages = {
    ...portugueseMessages, //estou pegando todas as mensagens que estão em portugueseMessages e colocando nesse objeto
    ...englishMessages
}

export { messages }