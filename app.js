alert('Olá mundo!'); // serve para criar uma janela de mensagem
let nindigena = 18; // É o comando que cria uma variável que vai ser ARMAZENADA na memória, o "nindigena" é o nome da variável. Foi setado 16
console.log(nindigena) // Comando console.log serve para imprimir mensagens ou valores no console do navegador, q não é visível ao usuário
let chute = prompt ('Qual é o número indígena?'); // Criar uma janela de alert com espaço para o usuário digitar informação, o "let" informa que o conteúdo inserido pelo usuário vai ser armazenado como "chute"; o ('') serve para a inserção de uma mensagem na janela
if (chute == nindigena) { // O if serve para criar uma condição; os dois sinais de iguais são para verificar se uma variável é igual a outra, e entre chaves é o comando que vai ser executado se as variáveis forem iguais
    alert(`Boa, você sabe o número do índio, ${nindigena}, seja bem-vindo ao nosso site`) //Nesse caso eu adicionei um texto com uma variável dentro, para tanto ao invés de usar aspas simples se fez necessário usar a CRASE, e antes da variável usa-se o ${} com o nome da variável para ser lida dentro das chaves
    
} else { //caso o chute não seja igual ao número indígena, executa o comando else
    alert('Poxa vida, você errou!')
}