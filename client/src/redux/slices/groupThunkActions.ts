import { createAsyncThunk } from '@reduxjs/toolkit';
import groupAPI from '../../services/groupAPI';
import type { CupcakesType } from '../../types/groupTypes';

export const getCupcakesThunk = createAsyncThunk<CupcakesType[]>('group/getGroups', async () =>
  groupAPI.getCupcakes().then((data) => data),
);
