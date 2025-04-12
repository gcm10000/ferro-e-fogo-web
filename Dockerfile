# Use a imagem oficial do Nginx como base
FROM nginx:alpine

# Copie os arquivos estáticos gerados pelo Vite para o diretório de conteúdo do Nginx
COPY dist /usr/share/nginx/html

# Exponha a porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
