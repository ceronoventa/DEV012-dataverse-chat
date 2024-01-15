# Dataverse Chat Estudio Gihbli

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Consideraciones generales](#3-consideraciones-generales)
* [4. Funcionalidades](#4-funcionalidades)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)
* [6. Criterios de aceptación mínimos del proyecto](#6-criterios-de-aceptación-mínimos-del-proyecto)
* [7. Objetivos de aprendizaje](#7-objetivos-de-aprendizaje)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Consideraciones para pedir tu Project Feedback](#9-consideraciones-para-pedir-tu-project-feedback)

***

## 1. Preámbulo

¡Bienvenido a Dataverse Chat: Películas de Animación Japonesa del Estudio Gilbhi! Sumérgete en una experiencia única donde no solo podrás explorar y aprender más sobre las fascinantes películas de animación japonesa producidas por el renombrado estudio Gilbhi, sino que también tendrás la oportunidad de interactuar directamente con los personajes de estas obras maestras gracias a la potencia de la inteligencia artificial.

La incorporación de la tecnología de chat impulsada por la API de OpenAI permite una experiencia envolvente y dinámica. Imagina la posibilidad de entablar conversaciones individuales con tus personajes favoritos o participar en un chat grupal para descubrir nuevas perspectivas sobre estas icónicas películas.

¡Prepárate para sumergirte en un viaje único donde la magia del cine se combina con las maravillas de la inteligencia artificial!

## 2. Resumen del proyecto

Este proyecto se centra en la construcción de una página web diseñada para visualizar un conjunto de datos generado mediante técnicas de prompting, enfocándose específicamente en películas de animación japonesa producidas por el reconocido estudio Gilbhi. Con el objetivo de satisfacer las necesidades del usuario, se emplearon herramientas de inteligencia artificial como ChatGPT, ExplainDev, entre otras, para la generación de datos que fueron almacenados en un archivo JavaScript.

Como resultado final, se ha desarrollado una página web utilizando Dataverse como plataforma y adoptando el enfoque de Single Page Application (SPA). La aplicación ofrece funcionalidades clave, tales como la visualización, filtrado, ordenamiento y cálculo de estadísticas sobre el conjunto de datos. Además, se ha incorporado una nueva vista que permite consultar información detallada de cada película de animación japonesa producida por el estudio Gilbhi. Destacando la interactividad, se ha implementado un sistema de chat impulsado por la API de OpenAI, brindando la posibilidad de interactuar con una película específica o con un grupo de ellas.






## 5. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto.

El _boilerplate_ que viene con el proyecto es una estructura inicial:

```text
.
├── src
|  ├── components
|  ├── data
|  |  └── dataset.js
|  ├── lib
|  |  └── dataFunctions.js
|  ├── views
|  ├── index.html
|  ├── index.js
|  ├── router.js
|  └── style.css
├── test
|  └── dataFunctions.spec.js
|  └── example.spec.js
├── README.md
└── package.json

```

### Historias de usuaria

HU-1
Como usuario, deseo ingresar a la SPA de Dataverse Chat para explorar las películas de animación japonesa producidas por el estudio Gilbhi y ver información detallada sobre cada una. Esto implica la conveniencia de una interfaz clara y accesible que me permita navegar fácilmente por las diferentes películas, acceder a sus detalles y obtener una visión general de la oferta cinematográfica del estudio Gilbhi.

HU-2
Como usuario, me gustaría tener la capacidad de interactuar con cada personaje de las películas de animación japonesa producidas por el estudio Gilbhi de manera individual. Esto incluye la posibilidad de entablar conversaciones con los personajes, explorar diálogos específicos y conocer más sobre la historia y características únicas de cada uno. La experiencia debería ser fluida y brindarme la oportunidad de sumergirme en la personalidad de los personajes de Gilbhi a través del sistema de chat impulsado por la tecnología de OpenAI.

HU-3
Como usuario, me gustaría tener la capacidad de conectar la SPA de Dataverse Chat a la API de OpenAI de manera personalizada. Para lograr esto, deseo la opción de ingresar mi API key en la interfaz de la aplicación, y que esta información se almacene de forma segura en el local storage de mi navegador. Esta funcionalidad no solo me proporcionaría una experiencia personalizada al interactuar con los personajes, sino que también aseguraría la privacidad y seguridad de mi información al guardarla localmente. La implementación de esta característica debería ser sencilla y transparente, permitiéndome disfrutar de conversaciones con los personajes de animación japonesa de Gilbhi de manera segura y personalizada. 

HU-4
Como usuario, deseo tener la posibilidad de participar en un chat grupal donde pueda interactuar con todos los personajes de las películas de animación japonesa producidas por el estudio Gilbhi de manera simultánea. Esto implica la conveniencia de un sistema de chat grupal accesible desde la SPA de Dataverse Chat, permitiéndome disfrutar de conversaciones colectivas explorando diálogos interactivos.

HU-5
Como visitante de Dataverse Chat, deseo tener la capacidad de visualizar el sitio tanto en mi computadora como en mi celular. Esto implica la conveniencia de una interfaz responsiva que se adapte a diferentes tamaños de pantalla, proporcionándome una experiencia consistente y accesible sin importar el dispositivo que esté utilizando.




### Diseño de la Interfaz de Usuaria

#### Prototipo de baja fidelidad

PEGAR IMAGEN BAJA FIDELIDAD



#### Prototipo de alta fidelidad
PEGAR ALTA FIDELIDAD
 [Figma]

### Testeos de usabilidad

Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarias,
y con base en los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final.



### Pruebas unitarias

El _boilerplate_ pegar prueba?? (conversarlo)

### Autoras
Belen Osorio
Camila Palma