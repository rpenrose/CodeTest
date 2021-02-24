import React, { useEffect, useState } from 'react';
import './App.css';
import { Student, StudentApi } from './StudentApi';

function App() {

  const [student, setStudent] = useState<Student>();
  const [students, setStudents] = useState<Student[]>();
  const [testData, setTestData] = useState<Student[]>();

  useEffect(() => {
    StudentApi.getStudents().then(res => {
      setTestData(res);
    })
  }, []);

  const handleShowStudents = () => {
    setStudents(testData);
  }

  const handleShowStudent = (student: Student) => () => {
    setStudent(student);
  }

  console.log(`Render: ${new Date()}`)
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
