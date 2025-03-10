-   [Tutorial de Restaurante](#tutorial-de-restaurante)
-   [Crear los proyectos](#crear-los-proyectos)
    -   [Crear un proyecto de API REST con .NET Core 8](#crear-un-proyecto-de-api-rest-con-net-core-8)
        -   [Desde la terminal](#desde-la-terminal)
        -   [Desde Visual Studio](#desde-visual-studio)
    -   [Crear un proyecto de aplicación web con React y Vite](#crear-un-proyecto-de-aplicación-web-con-react-y-vite)
    -   [Árbol de directorios](#árbol-de-directorios)

# Tutorial de Restaurante

# Crear los proyectos

## Crear un proyecto de API REST con .NET Core 8

### Desde la terminal

```bash
dotnet new webapi -n restaurante-api
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

## Árbol de directorios

    D:.
    ├───restaurante-api
    │   ├───bin => Archivos binarios
    │   ├───Controllers => Libreta donde apunta el mesero
    │   ├───obj => Archivos intermedios
    │   └───Properties => Propiedades del proyecto
    └───restaurante-web
        ├───node_modules => Módulos de Node.js
        ├───public => Archivos públicos
        └───src => Código fuente
            └───assets => Recursos
