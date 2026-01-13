FROM mcr.microsoft.com/playwright:v1.57.0-jammy

WORKDIR /app

COPY package*.json ./
RUN npm ci || npm install

COPY . .

CMD ["npx", "playwright", "test"]
