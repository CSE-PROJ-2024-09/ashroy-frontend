interface CommonAttributes {
  id: string;
  name: string;
  image: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  sectors: string[];
}

export interface OrphanageData extends CommonAttributes {}

export interface AnimalWelfareData extends CommonAttributes {}

export interface ElderlyCareData extends CommonAttributes {}

export interface ShelterHomeData extends CommonAttributes {}
