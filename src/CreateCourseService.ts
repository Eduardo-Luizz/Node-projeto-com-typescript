
/**
 * name - string
 * duration - number
 * educator - string
 */

interface Course {
  name: string;
  duration?: number; // Atributo opcional
  educator: string;
}

class CreateCourseService {

  // execute(data: Course) {
  //   console.log(data.name, data.duration, data.educator);
  // }

  // Outra forma de fazer
  execute({ duration = 8, educator, name }: Course) { // Definindo o valor default
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();