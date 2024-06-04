import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MoodboardService } from "./moodboard.service";
import { MoodboardControllerBase } from "./base/moodboard.controller.base";

@swagger.ApiTags("moodboards")
@common.Controller("moodboards")
export class MoodboardController extends MoodboardControllerBase {
  constructor(
    protected readonly service: MoodboardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
