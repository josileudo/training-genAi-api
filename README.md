# Training API

This section provides information on how to use the Training API to create and manage machine learning models.

# Objective

The purpose of this API is to mount a training for peoples that living im small cities and don't have a money to payment a personal trainer.

## Overview

The Training API allows you to:

- Create training using gemini-api
- List traines

## Getting Started

To begin using the Training API, you'll need to:

1. Obtain gemini-api token
2. Install packages
3. Set up your development environment

## Run locale project

To runing your api in localle you need to:

1. Install packages
2. npm run dev

## API Endpoints

The main endpoints for the Training API are:

- `/create`: Create training using gemini-api
- `/list`: List your traines

## Payload model

1. Interface model

```js
{
  name: string;
  gender: string;
  age: string;
  weight: string;
  height: string;
  goal: string;
  experienceLevel: string;
  equipment: string[];
  weeklyFrequency: number;
  trainingDuration: number;
  priorityMuscleGroups: string[];
  restrictionsOrInjuries: string[];
  exercisePreferences: string[];
  progressGoal: string;
  specialConditions: string[];
  preferredIntensity: string;
  trainingLocation: string;
}
```

2. Example of payload:

```json
{
  "name": "Test",
  "gender": "feminino",
  "age": "24",
  "weight": "70kg",
  "height": "172cm",
  "goal": "ganho de massa muscular",
  "experienceLevel": "intermediário",
  "equipment": ["halteres", "barra", "anilhas", "máquinas de musculação"],
  "weeklyFrequency": 5,
  "trainingDuration": 60,
  "priorityMuscleGroups": ["abdomen", "bumbum", "pernas"],
  "restrictionsOrInjuries": ["lesão no ombro"],
  "exercisePreferences": ["exercícios com peso livre", "treino funcional"],
  "progressGoal": "perder pesos",
  "specialConditions": [],
  "preferredIntensity": "intenso",
  "trainingLocation": "academia"
}
```
