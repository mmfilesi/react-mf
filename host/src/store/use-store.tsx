import { create } from 'zustand';
import coconutSlice from './coconut-store';

const useStore = create((set) => ({
  ...coconutSlice(set),
}));

export default useStore;