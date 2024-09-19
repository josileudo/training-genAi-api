import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateGymTrainingController } from "./controllers/CreateGymTrainingController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/list", (request: FastifyRequest, reply: FastifyReply) => {
    // After create a option to save in DB with mongooDB
    const result =
      '```json\n{\n  "nome": "Rayssa Brusa",\n  "sexo": "feminino",\n  "idade": 24,\n  "altura": 172,\n  "peso": 70,\n  "objetivo": "ganho de massa muscular",\n  "local_treino": "academia",\n  "equipamentos": [\n    "halteres",\n    "barra",\n    "anilhas",\n    "maquinas de musculacao"\n  ],\n  "frequencia_semanal": 5,\n  "duracao_treino": 60,\n  "nivel_experiencia": "intermediario",\n  "grupos_musculares_prioritarios": [\n    "abdomen",\n    "bumbum",\n    "pernas"\n  ],\n  "intensidade_treino": "intenso",\n  "restricoes_ou_lesoes": "lesao no ombro",\n  "treinos": [\n    {\n      "dia": "segunda-feira",\n      "nome": "Treino de Pernas e Gluteos",\n      "exercicios": [\n        {\n          "nome": "Agachamento Livre",\n          "series": "3",\n          "repeticoes": "8-12"\n        },\n        {\n          "nome": "Deadlift",\n          "series": "3",\n          "repeticoes": "8-12"\n        },\n        {\n          "nome": "Leg Press",\n          "series": "3",\n          "repeticoes": "10-15"\n        },\n        {\n          "nome": "Step Up com Halteres",\n          "series": "3",\n          "repeticoes": "12-15"\n        },\n        {\n          "nome": "Glute Bridge",\n          "series": "3",\n          "repeticoes": "15-20"\n        }\n      ]\n    },\n    {\n      "dia": "terca-feira",\n      "nome": "Treino de Peito e Triceps",\n      "exercicios": [\n        {\n          "nome": "Supino Inclinado com Halteres",\n          "series": "3",\n          "repeticoes": "8-12"\n        },\n        {\n          "nome": "Flexoes",\n          "series": "3",\n          "repeticoes": "10-15"\n        },\n        {\n          "nome": "Crucifixo Inclinado com Halteres",\n          "series": "3",\n          "repeticoes": "12-15"\n        },\n        {\n          "nome": "Triceps Testa",\n          "series": "3",\n          "repeticoes": "8-12"\n        },\n        {\n          "nome": "Triceps Corda",\n          "series": "3",\n          "repeticoes": "10-15"\n        }\n      ]\n    },\n    {\n      "dia": "quarta-feira",\n      "nome": "Treino de Costas e Biceps",\n      "exercicios": [\n        {\n          "nome": "Puxada Alta",\n          "series": "3",\n          "repeticoes": "8-12"\n        },\n        {\n          "nome": "Remada Baixa",\n          "series": "3",\n          "repeticoes": "10-15"\n        },\n        {\n          "nome": "Remada Inclinada com Halteres",\n          "series": "3",\n          "repeticoes": "12-15"\n        },\n        {\n          "nome": "Rosca Direta com Halteres",\n          "series": "3",\n          "repeticoes": "8-12"\n        },\n        {\n          "nome": "Rosca Concentrada com Halteres",\n          "series": "3",\n          "repeticoes": "10-15"\n        }\n      ]\n    },\n    {\n      "dia": "quinta-feira",\n      "nome": "Treino de Ombros e Abdomen",\n      "exercicios": [\n        {\n          "nome": "Elevaçao Lateral",\n          "series": "3",\n          "repeticoes": "10-15"\n        },\n        {\n          "nome": "Elevaçao Frontal",\n          "series": "3",\n          "repeticoes": "12-15"\n        },\n        {\n          "nome": "Remada Alta",\n          "series": "3",\n          "repeticoes": "8-12"\n        },\n        {\n          "nome": "Abdominal",\n          "series": "3",\n          "repeticoes": "15-20"\n        },\n        {\n          "nome": "Prancha",\n          "series": "3",\n          "duracao": "30-60 segundos"\n        }\n      ]\n    },\n    {\n      "dia": "sexta-feira",\n      "nome": "Treino Funcional",\n      "exercicios": [\n        {\n          "nome": "Burpees",\n          "series": "3",\n          "repeticoes": "10-15"\n        },\n        {\n          "nome": "Jumping Jacks",\n          "series": "3",\n          "repeticoes": "30-45 segundos"\n        },\n        {\n          "nome": "Agachamento Bulgaro",\n          "series": "3",\n          "repeticoes": "10-12"\n        },\n        {\n          "nome": "Mountain Climbers",\n          "series": "3",\n          "repeticoes": "30-45 segundos"\n        },\n        {\n          "nome": "Flexoes",\n          "series": "3",\n          "repeticoes": "10-15"\n        }\n      ]\n    }\n  ]\n}\n```';
    const jsonString = result
      .replace(/```\w*\n/g, "")
      .replace(/\n```/g, "")
      .trim();
    const jsonObject = JSON.parse(jsonString);

    reply.send({ data: jsonObject });
  });

  fastify.post("/create", (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateGymTrainingController().handle(request, reply);
  });
}
