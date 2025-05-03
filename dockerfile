########################################
# Stage 1 : BUILD   --------------------
########################################
FROM node:23-alpine AS builder        
WORKDIR /app                          

COPY package*.json ./               
RUN npm ci                         

COPY . .                               
RUN npm run build                     

########################################
# Stage 2 : RUNTIME  -------------------
########################################
FROM node:23-alpine                   
WORKDIR /app
ENV NODE_ENV=production               

COPY --from=builder /app .            

EXPOSE 3000                          
CMD ["npm", "start"]                 