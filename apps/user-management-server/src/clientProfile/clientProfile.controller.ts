import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ClientProfileService } from "./clientProfile.service";
import { ClientProfileControllerBase } from "./base/clientProfile.controller.base";

@swagger.ApiTags("clientProfiles")
@common.Controller("clientProfiles")
export class ClientProfileController extends ClientProfileControllerBase {
  constructor(
    protected readonly service: ClientProfileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
