import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ArtistProfileService } from "./artistProfile.service";
import { ArtistProfileControllerBase } from "./base/artistProfile.controller.base";

@swagger.ApiTags("artistProfiles")
@common.Controller("artistProfiles")
export class ArtistProfileController extends ArtistProfileControllerBase {
  constructor(
    protected readonly service: ArtistProfileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
