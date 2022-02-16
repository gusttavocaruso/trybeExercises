import React, { useState, useEffect } from 'react';
import api from './api';

function Students() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    api.get('/students')
      .then(response => {
        setStudents(response.data);
      })
  }, []);

  return (
    <div>
      <h1>Pessoas estudantes da Turma 13 C:</h1>

      <div>
        <a href="/register">Quero me registrar</a>
      </div>

      <ul>
        {students.map(student => (
          <li key={student._id} >
            {console.log(student)}
            <p>Name: {student.name}</p>
            <p>Favorite Project: {student.favoriteProject}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Students;
