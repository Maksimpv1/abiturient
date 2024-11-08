import { createSlice } from "@reduxjs/toolkit";

interface ProfileState {
  name: string[];
}

const initialState: ProfileState = {
  name: [],
};

const profileSlice = createSlice({
  name: "eventsProfile",
  initialState,
  reducers: {
    setProfile(state) {
      console.log(state.name);
    },
  },
});

export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;
