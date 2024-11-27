# Problem Statement

## Combining Log streams from multiple sources

We want to create an application with which you can view the logs of multiple different systems in one place. 
The logs can come from various sources which use different technologies for providing their Logs.
These could include:
 - A Http Api
 - A Kafka Topic
 - WebSockets
 - ...

The application should be able to handle logs from multiple sources and display them in a single view.

Additionally, the application should be able to filter the logs based on an input string and display only the logs that contain the input string.

## Structure

The project is divided into 3 parts:
- Frontend containing the SPA Angular Application `frontend`
- Backend containing the Spring Webflux Server `backend`
- Sample Code used in the presentation `rxjs-samples`


## Getting Started

### Prerequisites

- npm
- Java 21

### Installation

#### Frontend

```bash
cd frontend
(npm|yarn|pnpm) install
```

#### Backend

```bash
cd backend
./mvnw clean install
```

### Running the application

#### Frontend

Navigate 

```bash
cd frontend
(npm|yarn|pnpm) start
```

#### Backend

First navigate into the backend directory

```bash
cd backend
```

Then start the docker container for the Kafka broker

```bash
docker-compose up -d
```

Then start the Spring Boot application

```bash
./mvnw spring-boot:run
```
