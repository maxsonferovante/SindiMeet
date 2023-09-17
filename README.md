# SindiMeet - Sistema de Reservas para Atendimento Jurídico

## Propósito do Projeto

O SindiMeet é um sistema que visa facilitar o agendamento de atendimento jurídico para os associados de um sindicato. Permite que os associados façam login em suas contas, agendem atendimentos e verifiquem o status das reservas. O sistema foi desenvolvido com foco na praticidade e comodidade dos usuários.

### Com este sistema, os associados poderão:

✅ Agendar Reservas Online: Adeus, longas filas! Agora você pode reservar seu horário de atendimento com apenas alguns cliques, escolhendo a data que melhor se adequa à sua agenda.

✅ Verificar o Status da Reserva: Mantenha-se informado sobre o andamento da sua reserva. Saiba exatamente quando você será atendido e evite esperas desnecessárias.

✅ Atendimento Personalizado: Nosso sistema organiza as reservas por ordem de chegada, garantindo um atendimento justo e eficiente.

✅ Notificações por E-mail: Você receberá lembretes por e-mail para garantir que você não perca o seu horário de atendimento e esteja sempre atualizado.

## Tecnologias Utilizadas

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-00C7B7?style=for-the-badge&logo=nodemailer&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![JWT](https://img.shields.io/badge/JSON_Web_Tokens-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)


## Como Executar o Projeto

1. **Instalação de Dependências**: Certifique-se de ter o Node.js instalado em seu sistema. Execute `npm install` para instalar as dependências do projeto.

2. **Configuração do Banco de Dados com Docker**: Utilize Docker para rodar uma instância do PostgreSQL com o seguinte comando:

    ```bash
    docker run --name sindimeet-postgres -e POSTGRES_PASSWORD=suasenha -p 5432:5432 -d postgres
    ```

    Certifique-se de substituir `suasenha` pela senha desejada.

3. **Configuração do Banco de Dados sem Docker**: Se preferir, configure um banco de dados PostgreSQL localmente e ajuste as variáveis de ambiente no arquivo `.env`.

4. **Migrações do Prisma**: Execute `npx prisma migrate dev` para criar as tabelas do banco de dados.

5. **Iniciar o Servidor**: Inicie o servidor Node.js com `npm run dev`.

6. **Acesso à Aplicação**: Acesse a aplicação em seu navegador ou via ferramentas como o Postman, configurando as rotas e autenticação conforme a documentação da API.

7. **Utilização da API**: Utilize a API para criar, listar, atualizar e excluir reservas, além de autenticar usuários.

8. **Envio de E-mails**: Configure as credenciais de envio de e-mails no arquivo `.env` para receber notificações sobre suas reservas.

Lembre-se de consultar a documentação da API para obter detalhes sobre como usar cada rota e endpoint.

Além disso, você pode adaptar o arquivo `docker-compose.yml` para incluir a configuração do banco de dados PostgreSQL com Docker.
