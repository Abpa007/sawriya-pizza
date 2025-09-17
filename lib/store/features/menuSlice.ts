import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Interface for a menu item, matching our backend product model
interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isFeatured: boolean;
}

interface MenuState {
  menuItems: MenuItem[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: MenuState = {
  menuItems: [],
  loading: 'idle',
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    // Action to set menu items after fetching
    setMenuItems: (state, action: PayloadAction<MenuItem[]>) => {
      state.menuItems = action.payload;
      state.loading = 'succeeded';
    },
    // Action to handle loading state
    setLoadingStatus: (state, action: PayloadAction<MenuState['loading']>) => {
      state.loading = action.payload;
    },
  },
});

export const { setMenuItems, setLoadingStatus } = menuSlice.actions;
export default menuSlice.reducer;