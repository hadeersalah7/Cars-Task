import React, { createContext, useState } from "react";

interface CarsContextProps {
  selectedCheckbox: number[];
  handleCheckboxChange: (carId: number) => void;
  setSelectedCheckbox: React.Dispatch<React.SetStateAction<number[]>>;
  changesApplied: boolean,
  setChangesApplied: React.Dispatch<React.SetStateAction<boolean>>
}

export const CarsContext = createContext<CarsContextProps>({
  selectedCheckbox: [],
  handleCheckboxChange: () => {},
  setSelectedCheckbox: () => {},
  changesApplied: false,
  setChangesApplied: () => {}
});

export const CarsProvider: React.FC = ({ children }) => {
  const [selectedCheckbox, setSelectedCheckbox] = useState<number[]>([]);
  const [changesApplied, setChangesApplied] = useState(false)

  const handleCheckboxChange = (carId: number) => {
    if (selectedCheckbox.includes(carId)) {
      setSelectedCheckbox(selectedCheckbox.filter((id) => id !== carId));
    } else {
      setSelectedCheckbox([...selectedCheckbox, carId]);
    }
  };

  return (
    <CarsContext.Provider value={{ selectedCheckbox, handleCheckboxChange, setSelectedCheckbox, changesApplied, setChangesApplied }}>
      {children}
    </CarsContext.Provider>
  );
};
