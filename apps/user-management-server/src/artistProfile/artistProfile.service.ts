import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ArtistProfileServiceBase } from "./base/artistProfile.service.base";

@Injectable()
export class ArtistProfileService extends ArtistProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
