const readline = require("readline-sync");

// ========================================
// SISTEMA DE ALUNOS
// ========================================

const alunos = [];

let executando = true;

while (executando) {

    console.log("\n==============================");
    console.log("      SISTEMA DE ALUNOS");
    console.log("==============================");
    console.log("1 - Cadastrar aluno");
    console.log("2 - Listar alunos");
    console.log("3 - Consultar aluno");
    console.log("4 - Ver situação dos alunos");
    console.log("5 - Sair");
    console.log("==============================");

    let opcao = readline.question("Escolha uma opcao: ");

    switch (opcao) {

        // --------------------------------
        // CADASTRAR
        // --------------------------------
        case "1":

            console.log("\n--- CADASTRO DE ALUNO ---");

            let nome = readline.question("Nome: ");
            let idade = Number(readline.question("Idade: "));
            let nota = parseFloat(readline.question("Nota: "));

            // TODO:
            // Verificar se a nota está entre 0 e 10
            if (nota >= 0 && nota <= 10) {
                // TODO:
                // Criar um objeto aluno
                let aluno = {
                    nome: nome,
                    idade: idade,
                    nota: nota
                };
                // TODO:
                // Adicionar o aluno ao array
                alunos.push(aluno);
                
                console.log(alunos); 
            } else {
                console.log("Nota inválida! Deve estar entre 0 e 10.");

            }




            break;


        // --------------------------------
        // LISTAR
        // --------------------------------
        case "2":

            console.log("\n--- ALUNOS CADASTRADOS ---");

            if (alunos.length !== 0) {
                for (let i = 0; i < alunos.length; i++) {
                    console.log(
                        "Id: " + (i + 1) + "\n" +
                        "Nome: " + alunos[i].nome + "\n" +
                        "Idade: " + alunos[i].idade + "\n" +
                        "Nota: " + alunos[i].nota + "\n"
                    );
                }
            } else {
                console.log("Nenhum aluno cadastrado.");
            }

            break;


        // --------------------------------
        // CONSULTAR
        // --------------------------------
        case "3":

            console.log("\n--- CONSULTAR ALUNO ---");

            let nomeBusca = readline.question("Digite o nome: ");
            let alunoEncontrado = false;

            for (let i = 0; i < alunos.length; i++) {
                if (alunos[i].nome === nomeBusca) {
                    console.log("Nome: " + alunos[i].nome);
                    console.log("Idade: " + alunos[i].idade);
                    console.log("Nota: " + alunos[i].nota);
                    alunoEncontrado = true;
                    break;
                }
            }

            if (!alunoEncontrado) {
                console.log("Aluno nao encontrado.");
            }

            break;


        // --------------------------------
        // SITUAÇÃO
        // --------------------------------
        case "4":

            console.log("\n--- SITUACAO DOS ALUNOS ---");

            if (alunos.length === 0) {
                console.log("Nenhum aluno cadastrado.");
                break;
            }

            for (let i = 0; i < alunos.length; i++) {
                if (alunos[i].nota >= 7) {
                    console.log(alunos[i].nome + ": Aprovado");
                } else if (alunos[i].nota >= 5) {
                    console.log(alunos[i].nome + ": Recuperacao");
                } else {
                    console.log(alunos[i].nome + ": Reprovado");
                }
            }

            break;


        // --------------------------------
        // SAIR
        // --------------------------------
        case "5":

            console.log("\nSistema encerrado!");

            executando = false;

            break;


        // --------------------------------
        // OPÇÃO INVÁLIDA
        // --------------------------------
        default:

            console.log("\nOpcao invalida!");

            break;
    }
}
