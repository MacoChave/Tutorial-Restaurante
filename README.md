-   [Tutorial de Restaurante](#tutorial-de-restaurante)
-   [Crear los proyectos](#crear-los-proyectos)
    -   [Crear un proyecto de API REST con .NET Core 8](#crear-un-proyecto-de-api-rest-con-net-core-8)
        -   [Desde la terminal](#desde-la-terminal)
        -   [Desde Visual Studio](#desde-visual-studio)
    -   [Crear un proyecto de aplicación web con React y Vite](#crear-un-proyecto-de-aplicación-web-con-react-y-vite)
    -   [Base de datos - Mongo DB](#base-de-datos---mongo-db)
    -   [Árbol de directorios](#árbol-de-directorios)

# Tutorial de Restaurante

[Enunciado del problema](Enunciado.md)

# Crear los proyectos

## Crear un proyecto de API REST con .NET Core 8

### Desde la terminal

Crear un directorio para el proyecto de la API REST y navegar a él.

```bash
mkdir restaurante-api && cd restaurante-api
```

Crear un proyecto de API REST con .NET Core 8.

```bash
dotnet new webapi -n restaurante-api
```

Crear el archivo solución

```bash
dotnet new sln -n restaurante-api
```

Agregar el proyecto a la solución

```bash
dotnet sln restaurante-api add restaurante-api/restaurante-api.csproj
```

### Desde Visual Studio

1. Seleccionar `Crear un proyecto` > Buscar y seleccionar `ASP.NET Core Web API` y hacer clic en `Siguiente`
2. Escribir el nombre del proyecto `restaurante-api`
3. Cambiar la ubicación si se desea y hacer clic en `Siguiente`
4. Seleccionar el framework de destino `.NET 8.0` y hacer clic en `Crear`

## Crear un proyecto de aplicación web con React y Vite

```bash
npx create-vite restaurante-web --template react
```

## Base de datos - Mongo DB

[Crear base de datos MongoDB](https://account.mongodb.com/account/login?n=https%3A%2F%2Fcloud.mongodb.com%2Fv2%2F6600ffc9ef409c31f908c973&nextHash=%23overview&signedOut=true)

## Árbol de directorios

    D:.
    ├───restaurante-api
        └───restaurante-api
            ├───bin => Archivos binarios
            │   └───Debug
            │       └───net8.0
            ├───Controllers => Controladores de la API
            ├───obj => Archivos de objetos
            │   └───Debug
            │       └───net8.0
            │           ├───ref
            │           ├───refint
            │           └───staticwebassets
            └───Properties => Propiedades del proyecto
    └───restaurante-web
        ├───node_modules => Módulos de Node.js
        ├───public => Archivos públicos
        └───src => Código fuente
            └───assets => Recursos
