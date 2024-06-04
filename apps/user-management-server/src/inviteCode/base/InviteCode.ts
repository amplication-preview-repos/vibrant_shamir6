/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ArtistProfile } from "../../artistProfile/base/ArtistProfile";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";

@ObjectType()
class InviteCode {
  @ApiProperty({
    required: false,
    type: () => [ArtistProfile],
  })
  @ValidateNested()
  @Type(() => ArtistProfile)
  @IsOptional()
  artistProfiles?: Array<ArtistProfile>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  code!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  valid!: boolean | null;
}

export { InviteCode as InviteCode };
