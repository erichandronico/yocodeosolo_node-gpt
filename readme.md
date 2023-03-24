# @yocodeosolo Node App + ChatGPT

Este proyecto es un API REST en Node.js que se conecta a la API de OpenAI, permitiendo utilizar ChatGPT en tu backend. Utiliza Express.js como framework.

## Requisitos previos

- Node.js
- npm

## Instalación

1. Clona este repositorio en tu máquina local.
2. Ejecuta `npm install` para instalar las dependencias del proyecto.

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto con los siguientes campos:

```
PORT=5555
OPENAIKEY=your_openai_api_key
```

Reemplaza `your_openai_api_key` con la clave API de OpenAI.

## Ejecutar el servidor

Ejecuta `node index.js` para iniciar el servidor. El servidor estará escuchando en el puerto especificado en el archivo `.env`.

## Conexión desde Postman u otra herramienta similar

Para conectarse al servidor desde Postman u otra herramienta similar, realiza una solicitud POST a la siguiente URL:
```
http://localhost:5555/gpt
```

En el body de la solicitud, envía un JSON con el siguiente formato:

```json
{
  "prompt": "Tu consulta"
}
```

Reemplaza "Tu consulta" con el texto que deseas enviar a ChatGPT.

## Estructura del proyecto
`index.js`: Archivo principal que inicia el servidor y carga la configuración.
`routes/gpt.js`: Archivo de rutas que maneja las solicitudes a la ruta /gpt.
`controllers/gptController.js`: Controlador que maneja la lógica de la API de OpenAI.

## @yocodeosolo
Sígueme en TikTok, Instagram y YouTube 