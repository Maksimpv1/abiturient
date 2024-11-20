import { createSlice } from "@reduxjs/toolkit";

interface ProfileState {
  name: string[];
  profilePage: number;
}

const initialState: ProfileState = {
  name: [],
  profilePage: 0,
};

const profileSlice = createSlice({
  name: "eventsProfile",
  initialState,
  reducers: {
    setProfilePage(state, action) {
      state.profilePage = action.payload.id
    },
  },
});

export const { setProfilePage } = profileSlice.actions;

export default profileSlice.reducer;
