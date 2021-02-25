export class Student {
    id: number = 0;
    name: string = '';
}

export class Homework {
    id: number = 0;
    studentId: number= 0;
    date: Date = new Date();
    description: string= '';
    mark: number = 0;
}

export class MyApi {

    static getStudents(): Promise<Student[]> {

        const testStudents = [ 
            {id: 1, name: 'Arthur Ash'} as Student,
            {id: 2, name: 'Martina Navratolova'} as Student,
            {id: 3, name: 'John McEnroe'} as Student,
            {id: 4, name: 'Venus Williams'} as Student,
          ];

        return new Promise((res, rej) => {
            res(testStudents);
        });
    }

    static getNavBarData(): Promise<any> {
        return new Promise((res, rej) => {
            res({name: "name2"});
        });
    }

    static getFooterData(): Promise<any> {
        return new Promise((res, rej) => {
            res({});
        });
    }

    static getHomeworkFor(studentId: number): Promise<Homework[]> {
        return new Promise((res, rej) => {
            res([
                { id:1, studentId: studentId, date: new Date(2020, 2, 3), description: 'Maths', mark: 80} as Homework,
                { id:2, studentId: studentId, date: new Date(2020, 2, 4), description: 'English', mark: 80} as Homework,
                { id:3, studentId: studentId, date: new Date(2020, 2, 5), description: 'Geograpy', mark: 80} as Homework,
            ]);
        });
    }
}