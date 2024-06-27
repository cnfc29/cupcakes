import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { NotifyType } from '../../types/notifyTypes';

const initialState: {
  notify: NotifyType | null;
} = {
  notify: null,
};

const notifySlice = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    setNotify(state, action: PayloadAction<NotifyType | null>) {
      state.notify = action.payload;
    },
  },
});

export const { setNotify } = notifySlice.actions;
const notifyReducer = notifySlice.reducer;

export default notifyReducer;
