import { IsNotEmpty } from 'class-validator';

import { PermissionToEntity } from '../permission/permission.to.entity';

export class RoleDto {
  @IsNotEmpty()
  role: string;
}

export class RoleRO {
  id: string;
  role: string;
  created: Date;
  permissions?: PermissionToEntity[];
 // bookmarks?: IdeaEntity[];
}
