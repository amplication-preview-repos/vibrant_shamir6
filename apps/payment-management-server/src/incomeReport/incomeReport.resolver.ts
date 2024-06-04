import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IncomeReportResolverBase } from "./base/incomeReport.resolver.base";
import { IncomeReport } from "./base/IncomeReport";
import { IncomeReportService } from "./incomeReport.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IncomeReport)
export class IncomeReportResolver extends IncomeReportResolverBase {
  constructor(
    protected readonly service: IncomeReportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
