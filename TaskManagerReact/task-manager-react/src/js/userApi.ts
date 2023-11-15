import { $host } from "./index.js"

export const login = async (username: string, password: string) => {
    const data = {
        username,
        password
    }

    const res = await $host.post(`/auth/login`, data)

    console.log(res);

    return res;
}

export const register = async (username: string, password: string) => {
    const data = {
        username,
        password
    }

    const res = await $host.post(`/auth/register`, data)

    console.log(res);

    return res;
}

export const createTask = async(text: string) => {
    const data = {
        text
    }

    const res = await $host.post('/tasks/createTask', data);

    console.log(res);

    return res;
}

export const getAllTasks = async() => {
    const res = await $host.post('/tasks/getAllTasks');

    console.log(res.data);

    res.data.forEach((element: any) => console.log(element.text));

    return res;
}