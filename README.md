# 03Bases

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
# course-angular




# 🚀 Cómo Subir una Imagen a Docker Hub

Esta guía describe paso a paso cómo subir una imagen Docker a Docker Hub, desde el login hasta el push final.

---

## 📌 Requisitos

- Tener Docker instalado.
- Tener una cuenta en Docker Hub.
- Tener una imagen creada localmente.

---

## 1️⃣ Iniciar sesión en Docker Hub

Desde la terminal, ejecuta:

```bash
docker login


docker images

REPOSITORY        TAG       IMAGE ID       CREATED         SIZE
dragonball-app    1.0.1     abc123456789   2 hours ago     450MB


# Etiquetar la imagen
##Antes de subir la imagen a Docker Hub, debes etiquetarla con tu usuario:

1.-login y push en docker:
		docker login
	#Te pedirá:Username, Password
	Si dice Login Succeeded → listo.

2.-Etiquetar Imagen
	ver imagen docker cmd:
	docker images
	2.1.- Ahora la etiquetas con tu usuario de Docker Hub:
	el docker tag es el nombre que le das cuando lo compilas es importante la version
	      docker tag dragonball-app:1.0.1 jeanaleman/dragonball-app:1.0.1
3.- push:
		docker push jeanaleman/dragonball-app:1.0.1
					 nombre  / repo          :version	

4.- buscar la imagen en dockerhub:
         docker pull jeanaleman/dragonball-app-public:1.0.3
		              dentro de la imagen te indican el comando
		