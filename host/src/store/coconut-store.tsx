interface coconutSlice {
  coconuts: number;
  addCoconut: () => void;
  removeCoconut: () => void;
}

const coconutSlice = (set: any) => ({
  coconuts: 0, // Estado inicial

  addCoconut: () => {
    set((state: any) => ({
      coconuts: state.coconuts + 1,
    }));
  },

  removeCoconut: () => {
    set((state: any) => ({
      coconuts: state.coconuts - 1,
    }));
  },

});

export default coconutSlice;
