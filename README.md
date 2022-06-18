# Gherkin con CucumberJS en Node

Ejemplo de uso de Cucumber con Gherkin

## Instalación

Se requiere tener instalado Node y el gestor de paquete NPM.

```bash
npm install
```

## Cómo usar Cucumber en Node

En el fichero package.json se pueden ver dos scripts, el lanza los test es cucumber.

```bash
npm run cucumber
```

## Qué me puedo encontrar y dónde

En el directorio features se encuentran los ficheros de Gherkin. Tanto user.creation.feature como user.delete.feature son los distintos scenarios para dos casos de uso.

En el directorio steps se encuentran los ficheros de CucumberJS, que realizan el testeo.
