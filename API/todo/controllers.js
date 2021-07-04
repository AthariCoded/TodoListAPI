let todos = require("../../data");
// const slugify = require("slugify");

//fetch list
exports.todoFetch = (req, res) => {
  res.json(todos);
};

//delete
exports.deleteTodo = (req, res) => {
  const { todoId } = req.params;
  const foundTodo = todos.find((todo) => todo.id === +todoId);
  if (foundTodo) {
    todos = todos.filter((todo) => todo.id !== +todoId);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Todo Not Found." });
  }
};

//add
exports.createTodo = (req, res) => {
  const id = todos.length + 1;
  //   const slug = slugify(req.body.name, { lower: true });
  const newTodo = {
    id,
    ...req.body,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo); // response end with created perfume
};

// //update
// exports.updateTodo = (req, res) => {
//   //*
//   const { todoId } = req.params; //*
//   const foundTodo = todos.find((todo) => todo.id === +todoId); //*
//   //*
//   if (foundTodo.status === "undone") {
//     foundTodo.status = "done" & res.status(204).end();
//     //to tell no content and end response //*
//   } else {
//     //*
//     //if the id was not in the identified list this message will appear
//     res.status(404).json({ message: "Todo Not Found." });
//   }
// };

//update trail
exports.updateTodo = (req, res) => {
  //*
  const { todoId } = req.params; //*
  const foundTodo = todos.find((todo) => todo.id === +todoId); //*
  //*
  if (foundTodo) {
    for (const key in req.body) foundTodo[key] = req.body[key];
    if (foundTodo.status === "undone") foundTodo.status = "done";
    else foundTodo.status = "undone";
    res.status(204).end();
    //to tell no content and end response //*
  } else {
    //*
    //if the id was not in the identified list this message will appear
    res.status(404).json({ message: "Todo Not Found." });
  }
};

// if (foundPerfume) {
//   //*
//   for (const key in req.body) foundPerfume[key] = req.body[key]; //loop over the keys variable which are the attributes in each object at the array
//   foundPerfume.slug = slugify(foundPerfume.name, { lower: true });
//   res.status(204).end(); //to tell no content and end response //*
// } else {
//   //*
//   //if the id was not in the identified list this message will appear
//   res.status(404).json({ message: "Perfume Not Found." });
// }
