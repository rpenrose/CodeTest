import React, { useState } from 'react';
import './App.css';

class Student {
  id: number = 0;
  name: string = '';
}

const testStudents = [ 
  {id: 1, name: 'Arthur Ash'} as Student,
  {id: 2, name: 'Martina Navratolova'} as Student,
  {id: 3, name: 'John McEnroe'} as Student,
  {id: 4, name: 'Venus Williams'} as Student,
];

function App() {

  const [student, setStudent] = useState<Student>();
  const [students, setStudents] = useState<Student[]>();
  
  const handleShowStudents = () => {
    setStudents(testStudents);
  }

  const handleShowStudent = (student: Student) => () => {
    setStudent(student);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleShowStudents} >Click Show Students</button>
        <hr />

        <div>
          {students?.map(s => 
            
            <div key={s.id}>
              Student: {s.name} <button onClick={handleShowStudent(s)} >Show</button>
            </div>
          )}
        </div>

        <hr />
        {student && <div>
          Details for Student: {student.name} (id: {student.id})  
        </div>}



      </header>
    </div>
  );
}

export default App;
