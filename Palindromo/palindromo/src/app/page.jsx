'use client'
import { useState } from "react";
import Palindromo from "./components/Palindromo";

export default function Home() {
  //Declarando as variavéis de estado
  const [palavraOriginal, setPalavraOriginal] = useState("")
  const [palavraInvertida, setPalavraInvertida] = useState("")

  //Método para alterar o valor do input
  //declara a palavra invertida como vazia
  const handleInputChange = (e) => {
    setPalavraOriginal(e.target.value)
    setPalavraInvertida('')
  }

  //função auxiliar para inverter uma palavra
  function reverse(a) {
    let e = ''
  
    for (let i = a.length - 1; i >= 0; i--) {
      e += a[i]
    }
    
    return e
  }

  //Método para o click do botão
  //declara a palavra invertida como o inverso da palavra original
  const handleClickButton = () => {
    setPalavraInvertida(reverse(palavraOriginal))
  }

  //habilita a tecla 'Enter' para apertar o botão
  const handleKeyUp = (e) => {
    if (e.key == 'Enter') {
      handleClickButton()
    }
  }

  //estrutura da página
  return (
    <div>
      <h1>Palíndromo</h1>
      <h2>Palíndromo é a frase ou palavra que mantém o mesmo sentido quando lida de trás pra frente.</h2>
      <h2>Ex: Bob, Ana, arara, salas, ele, esse, osso, ovo, somos, sopapos, rir, seres.</h2>
      <p>Digite uma palavra ou frase para ver o seu inverso e verificar se é palíndromo:</p>

      <input type="text" value={palavraOriginal} onChange={handleInputChange} onKeyUp={handleKeyUp} />
      <button onClick={handleClickButton}>Verificar</button>
      <p>{palavraInvertida ? `a palavra ${palavraOriginal} invertida é ${palavraInvertida}` : ''}</p>
      <Palindromo palavraOriginal={palavraOriginal} palavraInvertida={palavraInvertida}></Palindromo>
    </div>
  );
}
