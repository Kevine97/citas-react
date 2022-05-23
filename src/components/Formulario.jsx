import { useState, useEffect } from "react";
import Error from "./Error";

export const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [correo, setCorreo] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintoma, setSintoma] = useState("");

  const [error, setError] = useState(false);

  const generarID = () => {
    const ramdom = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return ramdom + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, correo, fecha, sintoma].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    const objPaciente = {
      nombre,
      propietario,
      correo,
      fecha,
      sintoma,
    };

    if (Object.keys(paciente).length > 0) {
      //Editando el registro

      objPaciente.id = paciente.id;

      const pacienteActualizado = pacientes.map((statePacinte) =>
        statePacinte.id === paciente.id ? objPaciente : statePacinte
      );

      setPacientes(pacienteActualizado);
      setPaciente({})
      
    } else {

      //Nuevo Registro
      objPaciente.id = generarID();
      setPacientes([...pacientes, objPaciente]);
    }

    setNombre("");
    setPropietario("");
    setCorreo("");
    setFecha("");
    setSintoma("");
  };

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setCorreo(paciente.correo);
      setFecha(paciente.fecha);
      setSintoma(paciente.sintoma);
    }
  }, [paciente]);

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-6 text-center mb-10">
        Añade tus paciente y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && <Error mensaje={"Todos los campos son obligatorios"} />}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="correo"
          >
            Correo electronico
          </label>
          <input
            id="correo"
            type="email"
            placeholder="Correo electronico"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta"
          >
            Fecha de Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none"
            placeholder="Describe los sintomas"
            value={sintoma}
            onChange={(e) => setSintoma(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full text-white p-3 uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={
            Object.keys(paciente).length > 0
              ? "Editar Paciente"
              : "Agregar Paciente"
          }
        />
      </form>
    </div>
  );
};
