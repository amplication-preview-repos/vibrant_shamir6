import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MoodboardServiceBase } from "./base/moodboard.service.base";

@Injectable()
export class MoodboardService extends MoodboardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
