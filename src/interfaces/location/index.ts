import { CarInterface } from 'interfaces/car';
import { GetQueryInterface } from 'interfaces';

export interface LocationInterface {
  id?: string;
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  state: string;
  car_id: string;
  created_at?: any;
  updated_at?: any;

  car?: CarInterface;
  _count?: {};
}

export interface LocationGetQueryInterface extends GetQueryInterface {
  id?: string;
  address?: string;
  city?: string;
  state?: string;
  car_id?: string;
}
