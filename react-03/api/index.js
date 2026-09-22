import axios from "axios";

const headerJson = { "Content-Type": "application/json" };

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com",
  timeout: 5000,
  headers: {
    "X-Parse-Application-Id": "29KRMelSZQwYTStH1V9MYUHjNiUp65mAmm54sk4y",
    "X-Parse-REST-API-Key": "VdVpbJD9DP53VTzZ5j3zo5inrehQ5mmlJhRw8eQ6",
  },
});

export async function getTarefas() {
  const response = await instance.get("/classes/Tarefa");
  return response.data;
}

export async function addTarefas(descricao) {
  return await instance.post(
    "/classes/Tarefa",
    {
      descricao: descricao,
    },
    {
      headers: headerJson,
    },
  );
}

export async function updateTarefas({ objectId, concluida }) {
  return await instance.put(
    `/classes/Tarefa/${objectId}`,
    {
      concluida: concluida,
    },
    {
      headers: headerJson,
    },
  );
}

export async function deleteTarefas({ objectId }) {
  return await instance.delete(`/classes/Tarefa/${objectId}`);
}
