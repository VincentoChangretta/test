import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SeminarData } from "app/server/config/config";

interface SeminarsState {
  seminars: SeminarData[];
}

const initialState: SeminarsState = {
  seminars: [],
};

const seminarsSlice = createSlice({
  name: "seminars",
  initialState,
  reducers: {
    setSeminars: (state, action: PayloadAction<SeminarData[]>) => {
      state.seminars = action.payload;
    },
    updateSeminar: (state, action: PayloadAction<SeminarData>) => {
      state.seminars = state.seminars.map((seminar) =>
        seminar.id === action.payload.id ? action.payload : seminar
      );
    },
  },
});

export const { setSeminars, updateSeminar } = seminarsSlice.actions;
export default seminarsSlice.reducer;
