import {
  ICursesData,
  ProfileKeysType,
  rowData,
} from "@/app/(main)/(protected)/profile/_components/ProfileMarks/MarksData";
import { ITeacherData, teacherData } from "@/app/(main)/(protected)/profile/_components/ProfileTeachers/TeacherData";
import filterTeachers from "@/app/components/hooks/FilterTeachers";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  name: string[];
  profilePage: number;
  profileCurses: ProfileKeysType;
  cursesData: ICursesData;
  profileTeachersSearchData:ITeacherData[];
  baseTeacherData: ITeacherData[];
  profileTeachersSearch:boolean;
}

const initialState: ProfileState = {
  name: [],
  profilePage: 0,
  profileCurses: "cursesFir",
  cursesData: rowData["cursesFir"],
  baseTeacherData: teacherData,
  profileTeachersSearchData: [],
  profileTeachersSearch:false,
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
    setSearchTeacherData(state, action) {
      const value = action.payload
      const data = state.baseTeacherData
      if (data) {
        const filtered = filterTeachers(data,value)
        state.profileTeachersSearchData = filtered;
      } else {
        state.profileTeachersSearchData =[];
      }
    },
  },
});

export const { setProfilePage, setCursesMarks,setSearchTeacherData } = profileSlice.actions;

export default profileSlice.reducer;
