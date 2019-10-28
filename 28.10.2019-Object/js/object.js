// let Memmed = {
//     id: 1,
//     name: "Memmed",
//     surname: "Necefov",
//     age: 29
// }

// let Sevda = {
//     id: 2,
//     name: "Sevda",
//     surname: "Huseynova",
//     age: 18
// }

class Student {
    constructor(id, name, surname, age) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}

let Sevda = new Student(1, "Sevda", "Huseynova", 18);
let Memmed = new Student(1, "Memmed", "Huseynov", 29);

class Group {
    constructor(name, place, start) {
        this.name = name;
        this.place = place;
        this.start = start;
    }
    students = [];
    addStudent(stu) {
        if (this.students.find(s => s.id == stu.id) === undefined) {
            this.students.push(stu)
        } else {
            console.log(stu.id + " id-li telebe movcuddur")
        }
    }
}

let p213 = new Group("p213", 16, "14:00");
let p214 = new Group("p214", 17, "19:00");

p213.addStudent(Memmed);
p214.addStudent(Sevda);

// console.log(p213.name + " yer sayi:-" + p213.place)
// console.log(p214.name + " yer sayi:-" + p214.place)
console.log(p213.students)
console.log(p214.students)




// let p213 = {
//     place: 17,
//     name: "p213",
//     students: [],
//     addStudent: function(stu) {
//         if (this.students.find(s => s.id == stu.id) === undefined) {
//             this.students.push(stu)
//         } else {
//             console.log(stu.id + " id-li telebe movcuddur")
//         }
//     }
// }

// let p214 = {
//     place: 10,
//     name: "p214",
//     students: [],
//     addStudent: function(stu) {
//         if (this.students.find(s => s.id == stu.id) === undefined) {
//             this.students.push(stu)
//         } else {
//             console.log(stu.id + " id-li telebe movcuddur")
//         }
//     }
// }

// p213.addStudent(Memmed);
// p213.addStudent(Sevda);

// console.log(p213.students)

// let arr = [1, true, "Kamran", { name: test, surname: testov }];