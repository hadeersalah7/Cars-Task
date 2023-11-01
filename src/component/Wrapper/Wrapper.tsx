import { Row, Container, Col } from "react-bootstrap";
import "./wrapper.css";
import {  useContext } from "react";
import { CarsContext } from "../Cars/CarsContext";

interface CarModel {
  id: number;
  name: string;
}

interface WrapperProps {
  cars: CarModel[];
}

const Wrapper: React.FC<WrapperProps> = ({ cars }) => {
  const { selectedCheckbox, setSelectedCheckbox, 
    setChangesApplied } = useContext(CarsContext);

  const handleApplyChanges = () => {
    const sortedCars = cars
      .filter((car) => selectedCheckbox.includes(car.id))
      .sort((a, b) => a.id - b.id);
    setSelectedCheckbox(sortedCars.map((car) => car.id));
    setChangesApplied(true);
  };

  const handleReset = () => {
    setSelectedCheckbox([]);
    setChangesApplied(false); 
  };

  return (
    <>
      <Container id="wrapper-container">
        <div>
          <Row className="wrapper">
            <Col xs={3}>
              <button className="btn btn-dark" id="reset" onClick={handleReset}>
                RESET
              </button>
            </Col>

            <Col xs={5}>
              <h2>Furure Cars</h2>
            </Col>

            <Col xs={4}>
              {selectedCheckbox.length > 0 && (
                <button className="btn btn-dark" onClick={handleApplyChanges}>
                  Apply Changes
                </button>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Wrapper;
