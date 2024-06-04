import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IncomeReportServiceBase } from "./base/incomeReport.service.base";

@Injectable()
export class IncomeReportService extends IncomeReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
