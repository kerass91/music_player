import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userSlice'
import { shazamCoreApi } from './services/shazamCore';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  
});
