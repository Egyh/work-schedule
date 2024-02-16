import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Status = "Done" | "Progress" | "Incomplete"


export type Plate = {
	name: string;
	comment: string;
	status: Status;
};

type PlateStore = {
  formUser: Plate;
  setFormUser: (plate: Plate) => void;
};

const usePlateStore = create<PlateStore>((set) => ({
    formUser: {
    name: "name",
    comment: "comment",
    status: "Incomplete",
  },
  setFormUser: (plate) => set({ formUser: plate }),
}),);

export default usePlateStore;

