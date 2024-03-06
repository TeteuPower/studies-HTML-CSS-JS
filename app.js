// Quando o projeto ficar disponível para todas as pessoas, os comandos console.log devem ser removidos ou desabilitados, pois podem causar problemas de desempenho e segurança.
let nome=prompt('Olá mundo! Qual o seu nome?'); // Let cria uma variável que vai ser armazenada na memória, nesse caso chamada 'nome', o prompt cria uma janela com espaço para o usuário digitar informação, o "=" informa que o conteúdo inserido pelo usuário vai ser armazenado na variável 'nome'; o ('') serve para a inserção de uma mensagem na janela prompt
    console.log('Nome do usuário',nome);//Comando console.log serve para imprimir mensagens ou valores no console do navegador, q não é visível ao usuário, nesse caso está sendo usado para conferir o nome do usuário

let nindigena = parseInt(Math.random() * 100 + 1) // O comando parseInt serve para ser selecionado apenas a parte inteira do número, descartando tudo depois da vírgula; Math.random() cria um número aleatório entre [0,1[; * é sinal de multiplicação, ou seja, o número do Math.random vezes 10 e somado mais 1... A soma dessas ordens será o valor da variável nindigena. Que é um número entre [1 e 100]
    console.log('número indígena',nindigena); // Conferir qual é o número índigena

let tentativas = 1;
    console.log('número de tentativas',tentativas);

let chute=prompt (`${nome}, qual é o número indígena? Ele está entre 1 e 100`); // Criar a variável chute que será preenchida pelo usuário
    console.log('valor do chute',chute); // Conferir se foi computado corretamente o valor do chute
    console.log('resultado da comparação', chute==nindigena); // Conferir se o valor "chute" foi igual ao "nindigena"

if (chute==nindigena)// O if serve para criar uma condição; os dois sinais de iguais são para verificar se uma variável é igual a outra, e entre chaves é o comando que vai ser executado se as variáveis forem iguais
    {
        alert(`UAU ${nome}, você descobriu o número indígena, ${nindigena}, de PRIMEIRA!! Seja bem-vindo ao nosso site!`);//Nesse caso eu adicionei uma variável dentro do texto, para tanto ao invés de usar aspas simples se fez necessário usar a CRASE, e antes da variável usa-se o ${} com o nome da variável para ser lida dentro das chaves
    }

//while numa tradução direta é "enquanto", é um comando para criar o looping, ou seja, ENQUANTO a condição estiver sendo atendida ele vai ficar travado na leitura
// != é o sinal de diferente
// comando BREAK, usado dentro do while breca o looping, quando ele é lido pelo navegador, ele segue a leitura fora do while
while (chute!=nindigena)
{
    // Criei a variável 'palavratentativa'; tentativas é maior do que 1? se sim o valor de 'palavratentativa' é 'tentativas'; se não o valor é 'tentativa' no singular
    let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //Isso chama "Operador ternário"
    if (tentativas==1)
    {
        alert(`Poxa vida ${nome}, você errou! Essa foi a sua primeira ${palavratentativa}, tente novamente!`);
        tentativas++; // Quando for feita a leitura desse parâmetro será somado +1 na memória da variável "tentativas"
        //tentativas = tentativas +1; também poderia ser escrito dessa maneira
    } else
    {
    alert(`Poxa vida ${nome}, você errou! Já são ${tentativas} ${palavratentativa}, tente novamente!`);
    tentativas++;
    }
        console.log('número de tentativas',tentativas);
    if (chute>nindigena)
    {
        chute=prompt(`${nome}, o número índigena é MENOR do que ${chute}.`);
            console.log('valor do chute',chute);// Conferir se foi computado corretamente o valor do chute
            console.log('resultado da comparação', chute==nindigena);// Conferir se o valor "chute" foi igual ao "nindigena"
    } else 
    {
        chute=prompt(`${nome}, o número índigena é MAIOR do que ${chute}.`);
            console.log('valor do chute',chute);// Conferir se foi computado corretamente o valor do chute
            console.log('resultado da comparação', chute==nindigena);// Conferir se o valor "chute" foi igual ao "nindigena"
    }
    if (chute==nindigena)
    {
        alert(`Boa ${nome}, com ${tentativas} ${palavratentativa} você descobriu o número indígena, ${nindigena}!! Seja bem-vindo ao nosso site!`);
    }        
}
