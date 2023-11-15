import { createTask, getAllTasks } from "../js/userApi";
import { ReactNode, useState } from "react";

function Tasks() {
  const [data, setData] = useState("");

  const [text, setText] = useState("");

  return (
    <>
      <h1>Tasks creator</h1>
      <div>{created_alarm(data)}</div>
      <input
        type="text"
        className="form-control"
        placeholder="Task text"
        onChange={(e) => setText(e.target.value)}
      ></input>
      <br></br>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => send_create(text).then((res) => setData(res.data))}
      >
        Create
      </button>
      <br></br>
      <br></br>
      { create_list() }
    </>
  );
}

async function create_list() {
  console.log("Pizda cozla 2");

  const pizda: ReactNode[] = [];

  pizda.push(<h1>Pizda</h1>);

  pizda.push(<h1>Pizda 2</h1>);

  console.log(pizda);

  // return pizda;

  return await render_list();
}

async function render_list() {
  const res = await send_getAll();

  let array: ReactNode[] = [];

  array.push(<h1>pizda</h1>)

  await res.data.forEach((element: any) => {
    array.push(
      <div className="card">
        <div className="card-body">
          <p className="card-text">{element.text}</p>
          <button type="button" className="btn btn-primary">
            Complete
          </button>
          <br></br>
          <br></br>
          <button type="button" className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    );
  });

  return array;
}

function created_alarm(data: any) {
  if (data == "") {
    return;
  }

  return (
    <div className="alert alert-danger" role="alert">
      {data}
    </div>
  );
}

async function send_create(text: string) {
  const response = await createTask(text);

  return response;
}

async function send_getAll() {
  const response = await getAllTasks();

  return response;
}

export default Tasks;
