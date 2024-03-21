# Selecciona la imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos de la aplicación
COPY package*.json ./
COPY . .

# Instala las dependencias
RUN npm install

COPY .env ./

# Expone el puerto
EXPOSE 3002

# Comando de inicio de la aplicación
CMD ["npm", "run", "start"]