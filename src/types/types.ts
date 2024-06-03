interface CommonAttributes {
  id: number;
  name: string;
  image: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  description: string;
  capacity: number;
  services: string[];
}

export interface OrphanageData extends CommonAttributes {
  current_children: number;
}

export interface AnimalWelfareData extends CommonAttributes {
  current_animals: number;
}

export interface ElderlyCareData extends CommonAttributes {
  current_residents: number;
}

export interface ShelterHomeData extends CommonAttributes {
  current_residents: number;
}
