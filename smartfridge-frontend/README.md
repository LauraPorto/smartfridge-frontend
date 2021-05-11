<p align="center">
  <a href="" rel="noopener">
 <img src="https://i.imgur.com/AZ2iWek.png" alt="Project logo"></a>
</p>
<h3 align="center">SMARTFRIDGE Project - Frontend</h3>

<div align="center">

[![Hackathon](https://img.shields.io/badge/hackathon-name-orange.svg)](http://hackathon.url.com)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

<p align="center"> Proyecto Full Stack MERN - Frontend SMART FRIDGE
    <br> 
</p>

## 📝 Table of Contents

- [Problem Statement](#problem_statement)
- [Idea / Solution](#idea)
- [Dependencies / Limitations](#limitations)
- [Future Scope](#future_scope)
- [Setting up a local environment](#getting_started)
- [Usage](#usage)
- [Technology Stack](#tech_stack)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## 🧐 Problem Statement <a name = "problem_statement"></a>

Este proyecto aborda la parte Frontend del proyecto full stack para final del bootcamps de GeeksHubs. La idea del trabajo es poder buscar recetas fácilmente con los ingredientes que hay en tu nevera. De este modo, se ofrecen las diferentes posibilidades para poder encontrar tu plato ideal sin esfuerzo, mediante una lista de tus alimentos para la búsqueda.
Además de esto, también existe la opción de explorar por la aplicación y descubrir recetas nuevas en función de diferentes criterios, como la dieta (gluten, vegan, etc.), la preparación en minutos o los ingredientes extendidos para dicha receta. Además, podrás guardar en favoritos todas las recetas que quieras, para poder tener acceso rápido a tus platos favoritos. 


## 💡 Idea / Solution <a name = "idea"></a>

En esta parte frontend del proyecto, se ofrece un recorrido por las distintas funcionalidades de la aplicación, mediante la implementación de contenedores y componentes que permiten una experiencia de usuario fluída. 
Así, sin necesidad de realizar un registro o log in, el usuario puede navegar por la vista Home, explorar las diferentes recetas (sin acceso a su información), así como conocer los diferentes servicios que ofrece la web. Por supuesto, existe la opción de hacer un registro y un log in.
Una vez el usuario ya está registrado, se podrá acceder a su espacio personal en el que se guardarán sus datos personales, con la opción de actualiza y borrar la cuenta (en su vista perfil). Además de esto, y como punto fuerte de esta web, el usuario puede acceder a su 'cocina', en la que realizará una búsqueda de los ingredientes que tiene en su casa o que quiere usar para buscar la receta, en la vista 'Store'. Desde aquí, se ofrecerá una vista de resultados con todas las recetas que coiniciden con la búsqueda, a partir de la cual se pueden extraer sus detalles, como la información nutricional, las instrucciones, ingredientes usados y sus medidas, así como ingredientes extra que se podrían añadir. Además, en esta vista ('Recipe Info'), también se podrán guardar tus recetas favoritas en la base de datos, para poder tener acceso fácil a su información. 


## ⛓️ Dependencies / Limitations <a name = "limitations"></a>

Existen algunas pequeñas limitaciones dentro de esta web. Así, en la búsqueda de ingredientes para las recetas, las imágenes que vienen de la API no se visualizan.

## 🚀 Future Scope <a name = "future_scope"></a>

En el futuro, se implementarán más funcionalidades como nuevos criterios de búsqueda o información nutricional para cada ingrediente de manera individual, además del que ofrece la receta. Además, se podrán visualizar también las recetas guardadas en favoritos y las vistas reservadas para el rol de usuario (Admin).

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development
and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

Para poder instalar el proyecto, se ha de tener instalado NodeJS, usándose en este caso la versión ***. Arrancamos el proyecto y todas sus dependencias mediante el comando: 

```
npm install
```

### Installing

Una vez instaladas las dependencias, el proyecto empieza mediante la ejecución del comando:

Say what the step will be

```
npm start
```


## 🎈 Usage <a name="usage"></a>

Add notes about how to use the system.

## ⛏️ Built With <a name = "tech_stack"></a>

- [ReactJS](https://www.mongodb.com/) - Web Framework
- [Express](https://expressjs.com/) - Server Framework
- [JavaScript](https://vuejs.org/) - Web Framework
- [Bootstrap](https://nodejs.org/en/) - Server Environment
- [Reacstrap](https://nodejs.org/en/) - Server Environment
- [Axios](https://nodejs.org/en/) - Server Environment
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Docker](https://nodejs.org/en/) - Server Environment
- [GitFlow](https://nodejs.org/en/) - Workflow Methodology

## ✍️ Authors <a name = "authors"></a>

- [@kylelobo](https://github.com/kylelobo) - Idea & Initial work

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors)
who participated in this project.

## 🎉 Acknowledgments <a name = "acknowledgments"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References