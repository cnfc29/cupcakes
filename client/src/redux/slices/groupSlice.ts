// import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { InitialStateType } from '../../types/groupTypes';
import { getCupcakesThunk } from './groupThunkActions';

const initialState: InitialStateType = {
  cupcakes: [],
};

const groupSlice = createSlice({
  name: 'groupSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCupcakesThunk.fulfilled, (state, { payload }) => {
      state.cupcakes = payload;
    });
  },
});

// export const { clearGroup } = groupSlice.actions;
export default groupSlice.reducer;
