# Étape 1 : Construction (build) de l'application
FROM node:20 AS builder

# Crée le répertoire de travail
WORKDIR /app

# Copie des fichiers package.json et yarn.lock (ou package-lock.json) pour installer les dépendances
COPY package.json yarn.lock ./

# Installation des dépendances
RUN yarn install

# Copie du reste du code source de l'application
COPY . .

# Construction de l'application (compilation/transpilation)
RUN yarn build

# Étape 2 : Serveur de production
# FROM node:20-slim

# Définition du répertoire de travail
WORKDIR /app

# Copie uniquement les fichiers nécessaires de l'étape précédente
# COPY --from=builder /app /app

# Expose le port de l'application (généralement 3000 pour une app Node.js)
EXPOSE 3000

# Commande pour démarrer l'application en production
CMD ["yarn", "start"]
