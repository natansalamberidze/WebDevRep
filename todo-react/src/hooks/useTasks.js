import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import useTasksLocalStorage from './useTasksLocalStorage';

const useTasks = () => {

  const {
    savedTasks,
    saveTasks
  } = useTasksLocalStorage() // Destructure savedTasks and saveTasks from useTasksLocalStorage hook


    const [tasks, setTasks] = useState(savedTasks ?? [
      { id: "task-1", title: "Buy a car", isDone: false },
      { id: "task-2", title: "Buy a house", isDone: true },
    ]) // Tasks state with initial value from local storage or default tasks

  const [newTaskTitle, setNewTaskTitle] = useState(""); // New task title state

  const [searchQuery, setSearchQuery] = useState(""); // Search query state


  const newTaskInputRef = useRef(null); // Ref for new task input field


  // Handlers / useCallbacks(memo for functions):

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm("Are you sure you want to delete all tasks?");

    if (isConfirmed) {
      setTasks([]);
    }
  }, []);

  const deleteTask = useCallback(
    (taskId) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
    },
    [tasks],
  );

  const toggleTaskComplete = useCallback(
    (taskId, isDone) => {
      setTasks(
        tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, isDone };
          }
          return task;
        }),
      );
    },
    [tasks],
  );

  const addTask = useCallback((title) => {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title,
        isDone: false,
      };
      setTasks((prevTask) => [...prevTask, newTask]); // Add new task to tasks array
      setNewTaskTitle(""); // Clear new task title input
      setSearchQuery(""); // Clear search query after adding a task
      newTaskInputRef.current.focus(); // Focus the new task input field after adding a task
  }, []);

  // Effects / Hooks / useMemo (memo for values)

  useEffect(() => {
    // console.log('Save data in the storage couse tasks were changed!', tasks)
    saveTasks(tasks); // Save tasks using saveTasks function from useTasksLocalStorage hook
  }, [tasks]);

  useEffect(() => {
    newTaskInputRef.current.focus(); // Focus the new task input field when the component mounts
    return () => {};
  }, []);

  // useMemo (memo for values)

  const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase();
    return clearSearchQuery.length > 0
      ? tasks.filter(({ title }) =>
        title.toLowerCase().includes(clearSearchQuery),
        ) // Filter tasks by search query with ternary operator
      : null;
  }, [searchQuery, tasks]);

  return {
    tasks,
    filteredTasks,
    deleteTask,
    deleteAllTasks,
    toggleTaskComplete,
    addTask,
    newTaskTitle,
    setNewTaskTitle,
    newTaskInputRef,
    searchQuery, 
    setSearchQuery
  }
}

export default useTasks;