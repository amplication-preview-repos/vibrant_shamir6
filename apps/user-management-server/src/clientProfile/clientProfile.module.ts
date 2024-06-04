import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ClientProfileModuleBase } from "./base/clientProfile.module.base";
import { ClientProfileService } from "./clientProfile.service";
import { ClientProfileController } from "./clientProfile.controller";
import { ClientProfileResolver } from "./clientProfile.resolver";

@Module({
  imports: [ClientProfileModuleBase, forwardRef(() => AuthModule)],
  controllers: [ClientProfileController],
  providers: [ClientProfileService, ClientProfileResolver],
  exports: [ClientProfileService],
})
export class ClientProfileModule {}
