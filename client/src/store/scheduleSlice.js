import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    schedules: [],
};

const scheduleSlice = createSlice({
    name: "schedule",
    initialState,
    reducers: {
        addSchedule: (state, action) => {
            state.schedules.push(action.payload);
        },
        removeSchedule: (state, action) => {
            state.schedules = state.schedules.filter(
                (schedule) => schedule.id !== action.payload.id
            );
        },
    },
});

export const { addSchedule, removeSchedule } = scheduleSlice.actions;

export const listSchedules = (state) => {
    return state.schedule.schedules.sort((a, b) => {
        if (a.date < b.date) {
            return -1;
        } else if (a.date > b.date) {
            return 1;
        } else {
            if (a.time < b.time) {
                return -1;
            } else if (a.time > b.time) {
                return 1;
            } else {
                return 0;
            }
        }
    });
};

export default scheduleSlice.reducer;