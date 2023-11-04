// Utility Types

// ---------------------------------------------------------------

type AnimalFunction = (name: string) => { name: string };

const animalFunction: AnimalFunction = (name) => ({
  name,
});

console.log('Animal Function: ', animalFunction('Elephant'));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type AnimalObject = ReturnType<AnimalFunction>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type AnimalObject2 = ReturnType<typeof animalFunction>;

// ---------------------------------------------------------------

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
};

const todo2 = updateTodo(todo1, {
  description: 'throw out trash',
});

console.log('Utility types Partial todo', todo2);

// ---------------------------------------------------------------

type TodoTitle = Omit<Todo, 'description'>;

const todoTitle: TodoTitle = {
  title: 'Pick up kids',
  //   description: 'Kindergarten closes at 5pm', // wskazuje, że nie może tego zawierać
};

type TodoDescription = Pick<Todo, 'description'>;
const todoDescription: TodoDescription = {
  //   title: 'Not', - nie może tego użyć bo wybiera tylko przekazane
  description: 'Hello',
};

console.log(todoTitle, todoDescription);

interface MyTodo {
  id: number;
  title: string;
  description: string;
  author: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const addTodo = (todo: Omit<MyTodo, 'id'>) => {
  // zapisz dane na serwerze fetch...
  console.log(todo);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const editTodo = (todo: Omit<MyTodo, 'author'>) => {
  // zapisz dane na serwerze
  console.log(todo);
};
