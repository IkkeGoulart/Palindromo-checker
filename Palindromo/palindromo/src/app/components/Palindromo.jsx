//componente que verifica se uma palavra é palindromo
//retorna uma tag p dizendo que é palindromo
export default function Palindromo ({palavraOriginal, palavraInvertida}) {
    if (palavraOriginal.toLowerCase() === palavraInvertida.toLowerCase() && palavraOriginal)
        return <p>{palavraOriginal} é palindromo</p>
}