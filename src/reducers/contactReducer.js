import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    {
        name: 'John',
        location: '3 kf accra',
        phone: 1,
        id: 'hiqkosabz828q',
      },
      {
        name: 'Jane',
        location: '19 remdel accra',
        phone: 5,
        id: 'ncdsuocwasw82wis',
      },
  ],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
