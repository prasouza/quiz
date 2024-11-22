export default interface pergunta {
    id: number
    enunciado: string
    // aqui iremos inserir as opções de resposta
    opcoes: string[]
    // aqui será armazenado o índice da resposta correta
    resposta: number
}
