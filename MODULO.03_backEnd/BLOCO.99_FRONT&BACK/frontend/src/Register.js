/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi"
import api from './api';

function Register() {

  const history = useHistory();

  const [name, setName] = useState('');
  const [favoriteProject, setProject] = useState('');
  const [response, setResponse] = useState({});

  const handleNewStudent = async (e) => {
    e.preventDefault();

    const data = {  // data == body
      name,
      favoriteProject,
    };

    try {
      setResponse(await api.post('/students/new', data));
      console.log(response);
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <h1>Cadastrar nova pessoa estudante</h1>

        <Link className="back-link" to="/">
          <FiArrowLeft size={16} color="#E02041" />
          Voltar para Turma
        </Link>

        <br />
        <br />
        <form onSubmit={handleNewStudent}>
          <input type="text"
            placeholder="Seu nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <br />
          <input
            placeholder="Projeto Favorito"
            value={favoriteProject}
            onChange={e => setProject(e.target.value)}
          />
          <br />
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default Register;