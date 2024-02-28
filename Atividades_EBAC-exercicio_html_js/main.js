// Função para validar o formulário
function validarFormulario() {
    // Obtém os valores dos campos
    const campoA = document.getElementById("campoA").value;
    const campoB = document.getElementById("campoB").value;
  
    // Verifica se o valor de B é maior que A
    if (campoB <= campoA) {
      // Exibe mensagem de erro
      exibirMensagem("Erro: O número B precisa ser maior que o número A.", false);
      return false;
    }
  
    // Exibe mensagem de sucesso
    exibirMensagem("Formulário enviado!", true);
    return true;
  }
  
  // Função para exibir mensagem
  function exibirMensagem(mensagem, positivo) {
    // Obtém a div de mensagem
    const divMensagem = document.getElementById("mensagem");
  
    // Define o conteúdo da mensagem
    divMensagem.innerHTML = mensagem;
  
    // Adiciona classe de acordo com o tipo de mensagem
    if (positivo) {
      divMensagem.classList.add("mensagem-positiva");
    } else {
      divMensagem.classList.add("mensagem-negativa");
    }
  }