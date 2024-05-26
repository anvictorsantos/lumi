# Projeto Lumi

Este projeto é um sistema full stack desenvolvido para extrair dados relevantes de faturas de energia elétrica, organizá-los em um banco de dados PostgreSQL e disponibilizá-los por meio de uma API em uma aplicação web.

## Funcionalidades

- **Extração de Dados:** O sistema é capaz de extrair informações importantes das faturas de energia elétrica.
- **Armazenamento em Banco de Dados:** Os dados são estruturados e armazenados de forma organizada em um banco de dados PostgreSQL.
- **API Web:** Uma API é disponibilizada para acessar os dados armazenados e integrá-los em outras aplicações.

## Tecnologias Utilizadas

- **Frontend:** React
- **Backend:** Node.js
- **Banco de Dados:** PostgreSQL
- **API:** RESTfull

## Instalação

1. Clone este repositório.
2. Instale as dependências do client (frontend) e do server (backend).
3. Configure o banco de dados PostgreSQL.
4. Inicie a aplicação.

## Uso

### Client

1. Instale as dependências:

    ```bash
    cd client
    npm install
    ```

2. Execute o cliente:

    ```bash
    npm start
    ```

### Server

1. Instale as dependências:

    ```bash
    cd server
    npm install
    ```

2. Crie um arquivo `.env` no diretório raiz e adicione os detalhes de conexão do seu banco de dados PostgreSQL:

    ```plaintext
    DB_USER=seu_usuario
    DB_HOST=seu_host
    DB_DATABASE=sua_base_de_dados
    DB_PASSWORD=sua_senha
    DB_PORT=5432
    ```

3. Execute o servidor:

    ```bash
    npm run dev
    ```

4. Executando o Contêiner Docker PostgreSQL

    Para executar um contêiner Docker PostgreSQL com o comando fornecido, siga estas etapas:

    1. **Baixar a Imagem do PostgreSQL:**
       Se você ainda não baixou a imagem do PostgreSQL, pode fazê-lo executando:

       ```bash
       docker pull postgres
       ```

    2. **Executar o Contêiner Docker:**
       Execute o seguinte comando para iniciar o contêiner PostgreSQL:

       ```bash
       docker run --name my-postgres \
                  -e POSTGRES_PASSWORD=sua-senha \
                  -e POSTGRES_DB=invoice \
                  -e POSTGRES_USER=seu-usuario \
                  -p 5432:5432 \
                  -v /tmp/pgdata:/var/lib/postgresql/data \
                  -d postgres
       ```

       Este comando irá:

       - Criar um contêiner chamado `my-postgres`.
       - Definir a senha do PostgreSQL como `sua-senha`.
       - Criar um banco de dados chamado `invoice`.
       - Criar um usuário chamado `seu-usuario`.
       - Mapear a porta `5432` do host para a porta `5432` do contêiner.
       - Montar o diretório do host `/tmp/pgdata` em `/var/lib/postgresql/data` no contêiner para armazenamento de dados persistente.
       - Executar o contêiner em modo desanexado (`-d`).

    3. **Verificar o Status do Contêiner:**
       Você pode verificar se o contêiner está em execução executando:

       ```bash
       docker ps
       ```

       Isso listará todos os contêineres em execução.

    4. **Conectar-se ao PostgreSQL:**
       Depois que o contêiner estiver em execução, você pode se conectar ao banco de dados PostgreSQL usando seu cliente PostgreSQL preferido ou a ferramenta de linha de comando `psql`:

       ```bash
       psql -h localhost -U seu-usuario -d invoice
       ```

       Substitua `seu-usuario` pelo nome de usuário do PostgreSQL e `invoice` pelo nome do seu banco de dados PostgreSQL.

    5. **Realizar Operações no Banco de Dados:**
       Agora você pode realizar várias operações no banco de dados, como criar tabelas, inserir dados, consultar dados, etc., usando comandos SQL.

    6. **Parar e Remover o Contêiner:**
       Quando terminar de trabalhar com o banco de dados PostgreSQL, você pode parar e remover o contêiner usando:

       ```bash
       docker stop my-postgres
       docker rm my-postgres
       ```

       Isso irá parar e remover o contêiner `my-postgres`.

5. Crie um arquivo .env no diretório raiz e adicione os detalhes de conexão do seu banco de dados PostgreSQL:

    ```bash
    DB_URL="postgresql://user:password@localhost:5432/database"
    ```

6. Execute o comando de migração do Prisma para criar o banco de dados e as tabelas:

    ```bash
    npx prisma migrate dev
    ```

## Endpoints

### Obter todas as faturas

    ```bash
    curl http://localhost:4000/invoice
    ```

### Obter fatura por ID

    ```bash
    curl http://localhost:4000/invoice/{invoice_id}
    ```

Substitua {id_fatura} pelo ID da fatura que você deseja recuperar.

### Criar fatura

    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"title":"Nova fatura","description":"Descrição da nova fatura"}' http://localhost:4000/invoice
    ```

### Atualizar fatura

    ```bash
    curl -X PUT -H "Content-Type: application/json" -d '{"title":"Fatura atualizada","description":"Descrição atualizada da fatura"}' http://localhost:4000/invoice/{id_fatura}
    ```

Substitua {id_fatura} pelo ID da fatura que você deseja atualizar.

### Excluir fatura

    ```bash
    curl -X DELETE http://localhost:4000/invoice/{invoice_id}
    ```

Substitua {id_fatura} pelo ID da fatura que você deseja excluir.

## Dependências

*   express: "^4.17.1"
*   pg: "^8.7.1"
*   dotenv: "^10.0.0"
*   nodemon: "^2.0.14"
*   body-parser: "^1.19.0"
*   prisma: "^3.3.0"
*   @prisma/client: "^3.3.0"

## Contribuição

Contribuições são bem-vindas! Para sugestões, correções ou novas funcionalidades, por favor, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a [Licença XYZ]. Consulte o arquivo LICENSE para obter mais informações.
