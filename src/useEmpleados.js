import React, { useState, useEffect } from 'react';

const useEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);
  const [nombre, setNombre] = useState('');
  const [apelllido, setApellido] = useState('');
  const [numero, setNumero] = useState('');
  const [correo, setCorreo] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedEmpleados = JSON.parse(localStorage.getItem('empleados')) || [];
    setEmpleados(storedEmpleados);
  }, []);

  useEffect(() => {
    localStorage.setItem('empleados', JSON.stringify(empleados));
  }, [empleados]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedEmpleados = empleados.map((empleado, index) =>
        index === editIndex ? { nombre, apelllido, numero, correo } : empleado
      );
      setEmpleados(updatedEmpleados);
      setEditIndex(null);
    } else {
      setEmpleados([...empleados, { nombre, apelllido, numero, correo }]);
    }
    resetForm();
  };

  const resetForm = () => {
    setNombre('');
    setApellido('');
    setNumero('');
    setCorreo('');
  };

  const handleEdit = (index) => {
    setNombre(empleados[index].nombre);
    setApellido(empleados[index].apelllido);
    setNumero(empleados[index].numero);
    setCorreo(empleados[index].correo);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedEmpleados = empleados.filter((_, i) => i !== index);
    setEmpleados(updatedEmpleados);
  };

  return {
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
  };
};

export default useEmpleados;
