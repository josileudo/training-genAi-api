import { FastifyRequest, FastifyReply } from "fastify";
import { CreateGymTrainingService } from "../services/CreateGymTrainingService";
import { UserInfor } from "../models/user-infor";

export class CreateGymTrainingController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    // Change to english
    const data = request.body as UserInfor;
    const create = new CreateGymTrainingService();
    const gymTraining = await create.execute(data);

    reply.send(gymTraining);
  }
}
