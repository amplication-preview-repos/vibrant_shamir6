import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ArtistProfileModuleBase } from "./base/artistProfile.module.base";
import { ArtistProfileService } from "./artistProfile.service";
import { ArtistProfileController } from "./artistProfile.controller";
import { ArtistProfileResolver } from "./artistProfile.resolver";

@Module({
  imports: [ArtistProfileModuleBase, forwardRef(() => AuthModule)],
  controllers: [ArtistProfileController],
  providers: [ArtistProfileService, ArtistProfileResolver],
  exports: [ArtistProfileService],
})
export class ArtistProfileModule {}
