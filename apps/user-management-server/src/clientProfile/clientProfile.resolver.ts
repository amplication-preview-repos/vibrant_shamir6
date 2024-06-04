import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ClientProfileResolverBase } from "./base/clientProfile.resolver.base";
import { ClientProfile } from "./base/ClientProfile";
import { ClientProfileService } from "./clientProfile.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ClientProfile)
export class ClientProfileResolver extends ClientProfileResolverBase {
  constructor(
    protected readonly service: ClientProfileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
