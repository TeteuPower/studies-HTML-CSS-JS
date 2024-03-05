// Quando o projeto ficar disponível para todas as pessoas, os comandos console.log devem ser removidos ou desabilitados, pois podem causar problemas de desempenho e segurança.
let nome=prompt('Olá mundo! Qual o seu nome?'); // Criar uma janela de prompt, ou seja, com espaço para o usuário digitar informação, o "let" informa que o conteúdo inserido pelo usuário vai ser armazenado como "nome"; o ('') serve para a inserção de uma mensagem na janela prompt
    console.log('Nome do usuário',nome);//Comando console.log serve para imprimir mensagens ou valores no console do navegador, q não é visível ao usuário, nesse caso está sendo usado para conferir o nome do usuário

let nindigena = 16; // É o comando que cria uma variável que vai ser ARMAZENADA na memória, o "nindigena" é o nome da variável q foi setado 16
    console.log('número indígena',nindigena); // Conferir qual é o número índigena

let tentativas = 1;
    console.log('número de tentativas',tentativas);

let chute=prompt (`${nome}, qual é o número indígena?`); // Criar a variável chute que será preenchida pelo usuário
    console.log('valor do chute',chute); // Conferir se foi computado corretamente o valor do chute
    console.log('resultado da comparação', chute==nindigena); // Conferir se o valor "chute" foi igual ao "nindigena"

if (chute==nindigena)// O if serve para criar uma condição; os dois sinais de iguais são para verificar se uma variável é igual a outra, e entre chaves é o comando que vai ser executado se as variáveis forem iguais
    {
        alert(`Boa ${nome}, você sabe o número indígena, ${nindigena}!! Seja bem-vindo ao nosso site!`);//Nesse caso eu adicionei uma variável dentro do texto, para tanto ao invés de usar aspas simples se fez necessário usar a CRASE, e antes da variável usa-se o ${} com o nome da variável para ser lida dentro das chaves
    }

//while numa tradução direta é "enquanto", é um comando para criar o looping, ou seja, ENQUANTO a condição não for atendida ele vai ficar travado na leitura
// != é o sinal de diferente
while (chute!=nindigena)
{
    if (chute == nindigena)
    {
        alert(`Boa ${nome}, você sabe o número indígena, ${nindigena}!! Seja bem-vindo ao nosso site!`);
    }
    else //caso o chute não seja igual ao número indígena, executa o comando else
    {
        alert(`Poxa vida ${nome}, você errou!`);
        tentativas++; // Quando for feita a leitura desse parâmetro será somado +1 na memória da variável "tentativas"
      //tentativas = tentativas +1; também poderia ser escrito dessa maneira
        console.log('número de tentativas',tentativas);
            if (chute>nindigena)
            {
                chute=prompt(`${nome}, o número índigena é MENOR do que ${chute}, tente novamente`);
                    console.log('valor do chute',chute);// Conferir se foi computado corretamente o valor do chute
                    console.log('resultado da comparação', chute==nindigena);// Conferir se o valor "chute" foi igual ao "nindigena"
            } else 
            {
                chute=prompt(`${nome}, o número índigena é MAIOR do que ${chute}, tente novamente`);
                    console.log('valor do chute',chute);// Conferir se foi computado corretamente o valor do chute
                    console.log('resultado da comparação', chute==nindigena);// Conferir se o valor "chute" foi igual ao "nindigena"
            }
            if (chute==nindigena)
            {
                alert(`Boa ${nome}, com ${tentativas} tentativas você descobriu o número indígena, ${nindigena}!! Seja bem-vindo ao nosso site!`);
            }
                
    }
}
