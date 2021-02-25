import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import { Student, MyApi, Homework } from './MyApi';
import Footer from './Footer';

function App() {

  const [student, setStudent] = useState<Student>();
  const [students, setStudents] = useState<Student[]>();
  const [navBarData, setNavBarData] = useState<any>({name: 'name1'});
  const [footData, setFooterData] = useState<any>();
  const [homework, setHomework] = useState<Homework[]>();

  useEffect(() => {
    MyApi.getNavBarData().then(res => {
      setNavBarData(res);
    })
  }, []);

  useEffect(() => {
    MyApi.getFooterData().then(res => {
      setFooterData(res);
    })
  }, []);

  const handleShowStudents = () => {

    MyApi.getStudents().then(res => {
      setStudents(res);
    })
  }

  const handleSelectStudent = (student: Student) => () => {
    setStudent(student);
    setHomework([]);
  }

  const handleShowHomework = (student: Student) => () => {

    MyApi.getHomeworkFor(student.id).then(res => {
      setHomework(res);
    })
  }

  return (
    <div className="App">
      <div className="grid">
        <div className="top"><NavBar data={navBarData}/></div>
        <div className="content">

          <button onClick={handleShowStudents} >Click Me</button>
          <hr />

          <div>
            {students?.map(s =>

              <div key={`student=${s.id}`}>
                <div>
                  Name: {s.name} <button onClick={handleSelectStudent(s)} >Click Me 2</button>
                </div>
                {student && student.id === s.id && <div>
                  Details: {student.name} (id: {student.id}) <button onClick={handleShowHomework(s)} >Show homework</button>
                  { student && student.id === s.id && homework && 
                      <div> 
                          {homework.map(h => 
                            <div key={`homework-${h.id}`}>
                              Date: {h.date.toDateString()} Type: {h.description}, Mark: {h.mark}
                            </div>
                          )}
                      </div>
                  }
                </div>}
              </div>
            )}
          </div>

          <hr />

        </div>

      </div>
      <div className="bottom"><Footer data={footData} /></div>

    </div>
  );
}

export default App;
