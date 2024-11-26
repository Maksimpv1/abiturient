import {
  ICursesData,
  ProfileKeysType,
  rowData,
} from "@/app/(main)/(protected)/profile/_components/ProfileMarks/MarksData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  name: string[];
  profilePage: number;
  profileCurses: ProfileKeysType;
  cursesData: ICursesData;
}

const initialState: ProfileState = {
  name: [],
  profilePage: 0,
  profileCurses: "cursesFir",
  cursesData: rowData["cursesFir"],
};

const profileSlice = createSlice({
  name: "eventsProfile",
  initialState,
  reducers: {
    setProfilePage(state, action) {
      state.profilePage = action.payload.id;
    },
    setCursesMarks(state, action: PayloadAction<{ name: ProfileKeysType }>) {
      const curse = action.payload.name;
      state.profileCurses = curse;
      state.cursesData = rowData[curse];
    },
  },
});

export const { setProfilePage, setCursesMarks } = profileSlice.actions;

export default profileSlice.reducer;
