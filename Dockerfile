# Etapa 1: Utilizando uma imagem Node.js para a instalação e build do projeto

FROM node:18-alpine AS build

# Diretório de trabalho no container
WORKDIR /app

# Copiando package.json e package-lock.json
COPY package.json package-lock.json ./

# Instalando as dependências do projeto
RUN npm install

# Copiando os demais arquivos do repositório
COPY . .

# Realizando o build do projeto
RUN npm run build

# Etapa 2: Criando a imagem final com o serve para servir os arquivos estáticos
FROM node:18-alpine

# Diretório de trabalho no container
WORKDIR /app

# Instalando o pacote 'serve' globalmente
RUN npm i -g serve

# Copiando os arquivos buildados da etapa anterior
COPY --from=build /app/dist /app/dist

# Expondo a porta que o servidor vai usar
EXPOSE 3000

# Comando para rodar o servidor de arquivos estáticos com 'serve'
CMD ["serve", "-s", "dist"]
