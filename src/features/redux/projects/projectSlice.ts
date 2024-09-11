import { ProjectInterface } from './interface'
import { createSlice } from '@reduxjs/toolkit';

const initialState: ProjectInterface = {
    projects: ["gay"],
    selectedProject: '',
    loading: false,
    error: null
};

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: (state, action) => {
            state.projects.push(action.payload);
        },
        selectProject: (state, action) => {
            state.selectedProject = action.payload;
        },
        resetProject: state => {
            state.selectedProject = ''
        },
        deleteProjectByName: (state, action) => {
            state.projects = state.projects.filter(project => project !== action.payload);
        }
    }
    /*,
    extraReducers: (builder) => {
        builder
            .addCase(authAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(authAsync.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
            });
    }
    */

});

export const { addProject, selectProject, resetProject, deleteProjectByName } = projectSlice.actions
export default projectSlice.reducer;
