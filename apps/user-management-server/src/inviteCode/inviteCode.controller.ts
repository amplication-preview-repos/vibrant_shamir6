import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InviteCodeService } from "./inviteCode.service";
import { InviteCodeControllerBase } from "./base/inviteCode.controller.base";

@swagger.ApiTags("inviteCodes")
@common.Controller("inviteCodes")
export class InviteCodeController extends InviteCodeControllerBase {
  constructor(
    protected readonly service: InviteCodeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
