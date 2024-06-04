import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { InviteCodeResolverBase } from "./base/inviteCode.resolver.base";
import { InviteCode } from "./base/InviteCode";
import { InviteCodeService } from "./inviteCode.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InviteCode)
export class InviteCodeResolver extends InviteCodeResolverBase {
  constructor(
    protected readonly service: InviteCodeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
