import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IncomeReportService } from "./incomeReport.service";
import { IncomeReportControllerBase } from "./base/incomeReport.controller.base";

@swagger.ApiTags("incomeReports")
@common.Controller("incomeReports")
export class IncomeReportController extends IncomeReportControllerBase {
  constructor(
    protected readonly service: IncomeReportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
