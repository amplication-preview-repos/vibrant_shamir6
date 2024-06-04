/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ArtistProfileListRelationFilter } from "../../artistProfile/base/ArtistProfileListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ClientProfileListRelationFilter } from "../../clientProfile/base/ClientProfileListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: () => ArtistProfileListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ArtistProfileListRelationFilter)
  @IsOptional()
  @Field(() => ArtistProfileListRelationFilter, {
    nullable: true,
  })
  artistProfiles?: ArtistProfileListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ClientProfileListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ClientProfileListRelationFilter)
  @IsOptional()
  @Field(() => ClientProfileListRelationFilter, {
    nullable: true,
  })
  clientProfiles?: ClientProfileListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;
}

export { UserWhereInput as UserWhereInput };
