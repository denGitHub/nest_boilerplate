import { IsNotEmpty } from 'class-validator';


export class GrowerDTO {
  @IsNotEmpty()
  company: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  zip: string;

  @IsNotEmpty()
  contact: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  siteCost: string;
}

export class GrowerRO {
  id: string;
  created: Date;
  company: string;
  address: string;
  city: string;
}
