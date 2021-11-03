import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from '../../axios-instance';

const initialState = {
  users: [],
  status: 'idle',
  error: null
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('/users');
  return response.data;
})

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched users to the array
        state.users = state.users.concat(action.payload)
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default usersSlice.reducer;