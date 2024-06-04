import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IncomeReportModuleBase } from "./base/incomeReport.module.base";
import { IncomeReportService } from "./incomeReport.service";
import { IncomeReportController } from "./incomeReport.controller";
import { IncomeReportResolver } from "./incomeReport.resolver";

@Module({
  imports: [IncomeReportModuleBase, forwardRef(() => AuthModule)],
  controllers: [IncomeReportController],
  providers: [IncomeReportService, IncomeReportResolver],
  exports: [IncomeReportService],
})
export class IncomeReportModule {}
