import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk to fetch data from SWAPI API
export const fetchCharacters = createAsyncThunk("characters/fetchCharacters", async (page) => {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    const responseData = await response.json()
    // console.log(responseData)
    return responseData
}
)

// Redux slice to manage character data state
const CharacterSlice = createSlice({
    name: "characters",
    initialState: {
        data: [],
        loading: false,
        error: null,
        page: 1

    },
    reducers: {
        setpage: (state, action) => {
            state.page = action.payload
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchCharacters.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.results;

        })
        builder.addCase(fetchCharacters.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }

})

export const { setpage } = CharacterSlice.actions

export default CharacterSlice.reducer
