
import Paciente from "./Paciente";

export const ListadoPaciente = ({ pacientes, setPaciente, eliminarPaciente }) => {



  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Paciente</h2>

          <p className="text-lg mt-6 text-center mb-10">
            Añade paciente y {""}
            <span className="text-indigo-600 font-bold">Citas</span>
          </p>

          {pacientes.map(
            (paciente) => {
              const { id, nombre, propietario, correo, fecha, sintoma } = paciente
              return (
                <Paciente
                  key={id}
                  nombre={nombre}
                  propietario={propietario}
                  correo={correo}
                  fecha={fecha}
                  sintoma={sintoma}
                  setPaciente={setPaciente}
                  paciente={paciente}
                  eliminarPaciente={eliminarPaciente}
                />
              );
            }
          )}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>

          <p className="text-lg mt-6 text-center mb-10">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};
