import React from "react";

const Paciente = ({
  nombre,
  propietario,
  correo,
  fecha,
  sintoma,
  paciente,
  setPaciente,
  eliminarPaciente,
}) => {
  const handleEliminar = () => {
    const Eliminar = confirm("Desea eliminar el registro");

    if (Eliminar) {
      eliminarPaciente(paciente.id);
    }
  };

  return (
    <>
      <div className="m-3 bg-white shadow-md px-5 py-10 rounded-lg">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          {" "}
          Nombre: {""}
          <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          {" "}
          Propietario: {""}
          <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          {" "}
          Correo Electronico: {""}
          <span className="font-normal normal-case">{correo}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          {" "}
          Fecha alta: {""}
          <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          {" "}
          Sintomas: {""}
          <span className="font-normal normal-case">{sintoma}</span>
        </p>

        <div className="flex justify-between mt-10">
          <button
            className="py-2 px-10 bg-indigo-800 hover:bg-purple-600 text-white font-bold uppercase rounded-lg"
            onClick={() => setPaciente(paciente)}
          >
            Editar
          </button>

          <button
            className="py-2 px-10 bg-red-800 hover:bg-red-600 text-white font-bold uppercase rounded-lg"
            onClick={handleEliminar}
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};

export default Paciente;
