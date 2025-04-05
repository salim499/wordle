import React from "react";
import { InputS, DivContainerS } from "./Common/Table.style";
type TableT = {
  rows: number[];
  cols: number[];
  ref: React.RefObject<HTMLInputElement[][]>;
  handleChange: (rowState: number, colState: number) => void;
};
function Table(props: TableT) {
  return (
    <>
      {props.rows.map((rowIndex) => (
        <DivContainerS key={rowIndex}>
          {props.cols.map((colIndex) => (
            <InputS
              key={rowIndex + colIndex}
              type="text"
              readOnly={true}
              maxLength={1}
              ref={(el) => {
                if (el) {
                  // Vérification si la ligne n'est pas encore initialisée
                  if (!props.ref.current[rowIndex]) {
                    props.ref.current[rowIndex] = []; // Initialisation de la ligne
                  }
                  props.ref.current[rowIndex][colIndex] = el; // Assignation de la référence à la bonne case
                }
              }}
              //onChange={() => props.handleChange(rowIndex, colIndex)}
            />
          ))}
        </DivContainerS>
      ))}
    </>
  );
}

export default Table;
