//complete this code
class Person {
    constructor(name,age) {
        this.name = name;
		this.age = age
    }
    getName() {
        return this.name;
    }
    setAge(newAge) {
        this.age = newAge;
        }
        
    
}
let person = new Person("John")
class Student extends Person {
	study(){
		console.log(person.getName()+" is studying.")
	}
}

class Teacher extends Person {
	teach(){
		console.log(teacher.name+" is teaching.")
	}
}


let student = new Student("Alice", 30)
student.study()
// let student1 = new Student("Alice", 30)
// student1.study()
let teacher = new Teacher("Alice", 30)
teacher.teach()

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
