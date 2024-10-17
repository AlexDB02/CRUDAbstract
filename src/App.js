import React from 'react';
import './App.css';
import useEmpleados from './useEmpleados';

const App = () => {
  const {
    empleados,
    nombre,
    setNombre,
    apelllido,
    setApellido,
    numero,
    setNumero,
    correo,
    setCorreo,
    editIndex,
    handleSubmit,
    handleEdit,
    handleDelete,
  } = useEmpleados();

  return (
    <div className="container">
      <h1 className="title">CRUD Abstract</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          className="input"
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apelllido}
          onChange={(e) => setApellido(e.target.value)}
          required
          className="input"
        />
        <input
          type="text"
          placeholder="Número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          required
          className="input"
        />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
          className="input"
        />
        <button type="submit" className="button">
          {editIndex !== null ? 'Actualizar' : 'Agregar'}
        </button>
      </form>

      <ul className="list">
        {empleados.map((empleado, index) => (
          <li key={index} className="list-item">
            <span>{empleado.nombre} - {empleado.apelllido} - {empleado.numero} - {empleado.correo}</span>
            <div>
              <button onClick={() => handleEdit(index)} className="edit-button">Editar</button>
              <button onClick={() => handleDelete(index)} className="delete-button">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
