import type { AxiosInstance } from 'axios';
import axiosInstance from './axiosInstance';
import type { CupcakesType } from '../types/groupTypes';

class GroupAPI {
  constructor(private readonly api: AxiosInstance) {}

  getCupcakes(): Promise<CupcakesType[]> {
    return this.api<CupcakesType[]>('/api/cupcakes').then(({ data }) => data);
  }
}

const groupAPI = new GroupAPI(axiosInstance);
export default groupAPI;
