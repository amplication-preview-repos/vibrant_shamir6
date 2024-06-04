import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CommissionModuleBase } from "./base/commission.module.base";
import { CommissionService } from "./commission.service";
import { CommissionController } from "./commission.controller";
import { CommissionResolver } from "./commission.resolver";

@Module({
  imports: [CommissionModuleBase, forwardRef(() => AuthModule)],
  controllers: [CommissionController],
  providers: [CommissionService, CommissionResolver],
  exports: [CommissionService],
})
export class CommissionModule {}
