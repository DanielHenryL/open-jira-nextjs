This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

## Para correr localmente, se necesita la bd
```
docker-compose up -d

```


## Configuracion las variables de entorno
Renombrar el archivo __.env.template__ a __.env__
* MongoDB URL Local:
```
MONGO_URL=mongodb://localhost:27017/entriesdb

```

## Reconstruir modulos de node y levantar next
```
yarn install
yarn dev
```

## Llenar la BD con informacion de pruebas
```
http://localhost:3000/api/seed
```

