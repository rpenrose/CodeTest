export class Student {
    id: number = 0;
    name: string = '';
}

export class StudentApi {

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
}