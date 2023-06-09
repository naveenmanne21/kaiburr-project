# Java SpringBoot Application

## Required Tools

- Java 17
- Docker
- Kubectl
- Minikube

### Start docker and minikube

### Start Docker Daemon

```bash
minikube start
```

### CD into resources folder

```bash
cd app-kaiburr/src/main/resources
```

### Run Kubectl config files and deploy

```bash
kubectl apply -f mongo-conf.yml && kubectl apply -f mongo-secret.yml && kubectl apply -f mongo-deployment.yml && kubectl apply -f deployment.yml
```

### View deployments and pods

```bash
kubectl get all
```

### Get the IP address of the spring application service

```bash
minikube service project-k-service
```

### Copy the URL Tunneling url of App

![Screenshot](Screenshot.png)

### Swagger UI

```
url/swagger-ui.html
```

![Screenshot](Screenshot2.png)

### Get back to source folder

```bash
cd ../../../../
```

## React App

```bash
cd react
```

## Paste the ip address into this file

```
cd src
```

- open ip_address.js file
- ```
  export const address="copied_ip_address"
  ```

## Start React app

```bash
npm start
```
