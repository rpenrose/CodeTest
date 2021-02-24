import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import { Student, StudentApi } from './StudentApi';
import SideBar from './SideBar';
import Footer from './Footer';

function App() {

  const [student, setStudent] = useState<Student>();
  const [students, setStudents] = useState<Student[]>();
  const [testData, setTestData] = useState<Student[]>();

  useEffect(() => {
    StudentApi.getStudents().then(res => {
      setTestData(res);
    })
  }, []);

  const handleButton1 = () => {
    setStudents(testData);
  }

  const handleButton2 = (student: Student) => () => {
    setStudent(student);
  }

  return (
    <div className="App">
      <div className="grid">
        <div className="top"><NavBar /></div>
        <div className="side"><SideBar /></div>
        <div className="content">

          <button onClick={handleButton1} >Click Me</button>
          <hr />

          <div>
            {students?.map(s =>

              <div key={s.id}>
                <div>
                  Name: {s.name} <button onClick={handleButton2(s)} >Click Me 2</button>
                </div>
                {student && student.id === s.id && <div>
                  Details: {student.name} (id: {student.id})
                </div>}
              </div>
            )}
          </div>

          <hr />

        </div>

      </div>
      <div className="bottom"><Footer /></div>

    </div>
  );
}

export default App;
