import { useState } from "react"

function App() {
  // States (Estados)
  // Variável que quando alterada, a tela e o componente é alterada (renderizada novamente).
    // Útil quando querer fazer algo em relação a interação do usuário.
  const [message, setMessage] = useState("Olá Mundo!");

  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage("Clicado!")
        }}
      >
        Mudar Mensagem
      </button>
    </div>
  );
}

export default App;
