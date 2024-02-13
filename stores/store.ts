import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Status = "Done" | "Progress" | "Incomplete"

 interface Plate  {
	name: string;
	comment: string;
	status: Status;
}

interface PlateState {
    plate: Plate | null;
    setPlate: (newPlate: Plate) => void;

}

const usePlateStore = create<PlateState>()(
    persist(
        (set) => ({
            plate: null,
            setPlate: (newPlate: Plate) => set((state) => ({plate: newPlate})),
        }),
        {name: 'plate-store'},
    ),
)

export default usePlateStore;

