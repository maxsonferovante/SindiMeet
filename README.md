# Sistema de Reservas para Atendimento Jurídico em Sindicato - SindiMeet

## Propósito do Projeto

O Sistema de Reservas foi desenvolvido com o propósito de facilitar o agendamento de atendimento jurídico para associados de um sindicato. 
Ele permite que os associados façam login em suas contas, façam reservas para atendimento e verifiquem o status das mesmas. 
Esse sistema visa otimizar o processo de agendamento, tornando-o mais conveniente tanto para os associados quanto para a equipe de atendimento.

Com este sistema, os associados poderão:

✅ Agendar Reservas Online: Adeus, longas filas! Agora você pode reservar seu horário de atendimento com apenas alguns cliques, escolhendo a data que melhor se adequa à sua agenda.

✅ Verificar o Status da Reserva: Mantenha-se informado sobre o andamento da sua reserva. Saiba exatamente quando você será atendido e evite esperas desnecessárias.

✅ Atendimento Personalizado: Nosso sistema organiza as reservas por ordem de chegada, garantindo um atendimento justo e eficiente.

✅ Notificações por E-mail: Você receberá lembretes por e-mail para garantir que você não perca o seu horário de atendimento e esteja sempre atualizado.

## Tecnologias Usadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- Node.js: Ambiente de execução JavaScript do lado do servidor.
- TypeScript: Linguagem de programação que melhora a escalabilidade e manutenibilidade do código.
- Express.js: Framework para construção de aplicativos web em Node.js.
- PostgreSQL: Sistema de gerenciamento de banco de dados relacional.
- Prisma: ORM (Object-Relational Mapping) para Node.js e TypeScript.
- Nodemailer: Módulo para envio de e-mails.
- Docker: Plataforma para desenvolvimento, envio e execução de aplicativos em contêineres.

## Como Usar

1. **Instalação de Dependências**

   Certifique-se de ter o Node.js e o PostgreSQL instalados em seu sistema. Em seguida, execute o seguinte comando para instalar as dependências do projeto:

   ```bash
   npm install
   ```

2. **Configuração do Banco de Dados**

   Crie um banco de dados PostgreSQL e configure as variáveis de ambiente necessárias para a conexão com o banco de dados no arquivo `.env`.

3. **Migrações do Prisma**

   Execute as migrações do Prisma para criar as tabelas do banco de dados:

   ```bash
   npx prisma migrate dev
   ```

4. **Iniciar o Servidor**

   Inicie o servidor Node.js com o seguinte comando:

   ```bash
   npm start
   ```

5. **Acesso à Aplicação**

   Acesse a aplicação em seu navegador ou utilizando uma ferramenta como o Postman. Certifique-se de configurar as rotas e autenticação conforme a documentação da API.

6. **Utilização da API**

   Utilize a API para criar, listar, atualizar e excluir reservas, bem como autenticar usuários.

7. **Envio de E-mails**

   Configure as credenciais de envio de e-mails no arquivo `.env` para que o sistema possa enviar notificações por e-mail quando houver atualizações nas reservas.

Lembre-se de consultar a documentação da API para obter detalhes sobre como usar cada rota e endpoint.
