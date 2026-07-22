import axios from "axios";
import { API } from "../constants/api";

export const getStudents = async () => {
  const response = await axios.get(API);
  return response.data;
};

export const addStudent = async (
  name: string,
  course: string,
  year_level: string
) => {
  return axios.post(API, {
    name,
    course,
    year_level,
  });
};

export const updateStudent = async (
  id: number,
  name: string,
  course: string,
  year_level: string
) => {
  return axios.put(`${API}?id=${id}`, {
    name,
    course,
    year_level,
  });
};

export const deleteStudent = async (id: number) => {
  return axios.delete(`${API}?id=${id}`);
};