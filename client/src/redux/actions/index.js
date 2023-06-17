// APIs calls
//external package use "axios"
import axios from "axios";
import {
  ADDNEW_TODO,
  GETALL_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_TAB,
} from "./type";

// url
const API_URL = "";
// APIs
//ye ek reducder hai ek dispatch funtion hai,So use middleware think
export const addNewTodo = (data) => async (dispatch) => {
  //call api
  try {
    const res = await axios.post(`${API_URL}/todos`, { data });
    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling addanewTodo API", error.message);
  }
};

//make api to get all todos
export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos`);
    dispatch({ type: GETALL_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling getAllTodos API", error.message);
  }
};

export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos/${id}`);
    dispatch({ type: TOGGLE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling toggleTodo API", error.message);
  }
};
export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/todos/${id}`, { data });
    dispatch({ type: UPDATE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling updateTodo API", error.message);
  }
};
export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${API_URL}/todos/${id}`);
    dispatch({ type: DELETE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling deleteTodo API", error.message);
  }
};

export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOGGLE_TAB, selected: tab });
};
