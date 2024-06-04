import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ArtistProfileResolverBase } from "./base/artistProfile.resolver.base";
import { ArtistProfile } from "./base/ArtistProfile";
import { ArtistProfileService } from "./artistProfile.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ArtistProfile)
export class ArtistProfileResolver extends ArtistProfileResolverBase {
  constructor(
    protected readonly service: ArtistProfileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
