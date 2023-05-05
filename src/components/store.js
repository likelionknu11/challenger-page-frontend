import { create } from "zustand";

export const auth = create(set => ({
  id: "",
  setId: id => {
    set(state => ({ id: id }));
  },
  realId: "aaaa",
  pw: "",
  setPw: pw => {
    set(state => ({ pw: pw }));
  },
  realPw: "aaaa",
  isAuth: false,
  loginAuth: () => {
    set(() => ({ isAuth: true }));
  },
  logoutAuth: () => {
    set(() => ({ isAuth: false }));
  },
}));
