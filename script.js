//complete this code
class Person {
    constructor(name,age) {
        this.name = name;
		this.age = age
    }
    getName() {
        return this.name;
    }
    setName(newAge) {
        this.age = newAge;
        }
        
    
}
let person = new Person("Jhon")

class Student extends Person {
	study(){
		console.log(person.getName()+" is studying.")
	}
}

class Teacher extends Person {
	teach(){
		console.log(person.getName()+" is teaching.")
	}
}
let student = new Student()
student.study()
let teacher = new Teacher()
teacher.teach()

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
