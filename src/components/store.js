import { create } from "zustand";

export const auth = create(set => ({
  id: "",
  setId: id => {
    set(state => ({ id: id }));
  },
  realId: "likelion",
  pw: "",
  setPw: pw => {
    set(state => ({ pw: pw }));
  },
  realPw: "qaearqa",
  adminState: false,
  loginAuth: () => {
    set(() => ({ adminState: true }));
  },
  logoutAuth: () => {
    set(() => ({ adminState: false }));
  },
}));
