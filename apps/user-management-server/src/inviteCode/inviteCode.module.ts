import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InviteCodeModuleBase } from "./base/inviteCode.module.base";
import { InviteCodeService } from "./inviteCode.service";
import { InviteCodeController } from "./inviteCode.controller";
import { InviteCodeResolver } from "./inviteCode.resolver";

@Module({
  imports: [InviteCodeModuleBase, forwardRef(() => AuthModule)],
  controllers: [InviteCodeController],
  providers: [InviteCodeService, InviteCodeResolver],
  exports: [InviteCodeService],
})
export class InviteCodeModule {}
