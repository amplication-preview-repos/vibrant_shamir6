import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InviteCodeServiceBase } from "./base/inviteCode.service.base";

@Injectable()
export class InviteCodeService extends InviteCodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
