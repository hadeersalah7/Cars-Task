import "./table.css"
import { useContext } from "react";
import { CarsContext } from "../Cars/CarsContext";

interface CarModel {
  id: number;
  name: string;
}

interface TableProps {
  cars: CarModel[];
}

const Table: React.FC<TableProps> = ({ cars }) => {
  const { selectedCheckbox, handleCheckboxChange, changesApplied } = useContext(CarsContext);

  const selectedCars = changesApplied 
  ? cars.filter((car) => selectedCheckbox.includes(car.id)).sort((a, b) => a.id - b.id)
  : cars;

const unselectedCars = cars.filter((car) => !selectedCheckbox.includes(car.id));
  return (
    <>
      <div id="table-wrapper">
        <table>
          <tbody>
            {changesApplied && (
              // Render selected and sorted cars if changes have been applied
              selectedCars.map((car) => (
                <tr key={car.id}>
                  <td className="checkboxes">
                    <input
                      type="checkbox"
                      checked={selectedCheckbox.includes(car.id)}
                      onChange={() => handleCheckboxChange(car.id)}
                    />
                  </td>
                  <td className="carName">{car.name}</td>
                  <td className="carId">{car.id}</td>
                </tr>
              ))
            )}
            {/* Render unselected cars regardless of changesApplied */}
            {unselectedCars.map((car) => (
              <tr key={car.id}>
                <td className="checkboxes">
                  <input
                    type="checkbox"
                    checked={selectedCheckbox.includes(car.id)}
                    onChange={() => handleCheckboxChange(car.id)}
                  />
                </td>
                <td className="carName">{car.name}</td>
                <td className="carId">{car.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Table;

