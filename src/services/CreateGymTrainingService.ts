import { GoogleGenerativeAI } from "@google/generative-ai";
import { UserInfor } from "./../models/user-infor";

export class CreateGymTrainingService {
  async execute(data: UserInfor) {
    console.log("Test 123");
    try {
      const genAI = new GoogleGenerativeAI(process.env.API_KEY!);
      const model = await genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });
      const prompt = `Crie um plano de treino completo para uma pessoa com nome: ${data.name},
      do sexo: ${data.gender}, com peso atual: ${data.weight}kg, altura: ${data.height}cm, 
      idade: ${data.age} anos, com objetivo em ${data.goal}, atualmente no nível de experiência: ${data.experienceLevel}, 
      frequência semanal de treinos: ${data.weeklyFrequency} vezes, duração média de cada treino: ${data.trainingDuration} minutos, 
      preferindo treinos no local: ${data.trainingLocation}, com disponibilidade de equipamentos: ${data.equipment}, 
      priorizando os grupos musculares: ${data.priorityMuscleGroups}, e intensidade desejada: ${data.preferredIntensity}. 
      caso a pessoa tenha algum treino de preferëncia: ${data.exercisePreferences},
      Caso a pessoa tenha alguma lesão ou restrição: ${data.restrictionsOrInjuries}, 
      leve isso em consideração no plano. Retorne o treino em formato JSON com as seguintes propriedades: nome (nome da pessoa),
      sexo (sexo da pessoa), idade, altura, peso, objetivo (objetivo do treino), local_treino (local onde a pessoa vai treinar), 
      equipamentos (array de equipamentos disponíveis), 
      frequencia_semanal, 
      duracao_treino, 
      nivel_experiencia (nível de experiência), 
      grupos_musculares_prioritarios (array com os grupos musculares prioritários), 
      intensidade_treino, 
      restricoes_ou_lesoes (lesões ou restrições), 
      e treinos (array contendo objetos de cada treino, 
      com propriedade dia (dia da semana), 
      nome (nome do treino), 
      exercicios (array com nome dos exercícios, 
      número de séries e repetições ou duração de cada exercício em string)). Não retorne nenhuma observação além das passadas no prompt, 
      e nenhuma propriedade pode ter acento.`;
      const result = await model.generateContent(prompt);
      console.log(JSON.stringify(result, null, 2));

      if (result.response && result.response.candidates) {
        const jsonData = result.response.candidates[0].content.parts[0]
          .text as string;
        return JSON.stringify(jsonData);
      }
    } catch (error) {
      throw new Error("Error creating gym training");
    }
  }
}
