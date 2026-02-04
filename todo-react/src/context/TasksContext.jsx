import { createContext } from "react";
import { useState, useEffect, useRef, useCallback, useMemo } from 'react'

export const TasksContext = createContext({})

export const TasksProvider = (props) => {

  const {children} = props


    const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks"); // Load tasks from local storage

    if (savedTasks) {
      return JSON.parse(savedTasks); // Parse and set tasks
    }

    return [
      { id: "task-1", title: "Buy a car", isDone: false },
      { id: "task-2", title: "Buy a house", isDone: true },
    ];
  });

  const [newTaskTitle, setNewTaskTitle] = useState(""); // New task title state

  const [searchQuery, setSearchQuery] = useState(""); // Search query state


  const newTaskInputRef = useRef(null); // Ref for new task input field

  const firstIncompleteTaskRef = useRef(null); // Ref for first incomplete task

  const firstIncompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id; // Find the first incomplete task

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

  const addTask = useCallback(() => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      };
      setTasks((prevTask) => [...prevTask, newTask]); // Add new task to tasks array
      setNewTaskTitle(""); // Clear new task title input
      setSearchQuery(""); // Clear search query after adding a task
      newTaskInputRef.current.focus(); // Focus the new task input field after adding a task
    }
  }, [newTaskTitle]);

  // Effects / Hooks / useMemo (memo for values)

  useEffect(() => {
    // console.log('Save data in the storage couse tasks were changed!', tasks)
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save tasks to local storage
    return () => {};
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


    return (
      <TasksContext.Provider
        value={{
          tasks,
          filteredTasks,
          firstIncompleteTaskRef,
          firstIncompleteTaskId,
          deleteTask,
          deleteAllTasks,
          toggleTaskComplete,

          addTask,
          newTaskTitle,
          setNewTaskTitle,
          newTaskInputRef,
          searchQuery, 
          setSearchQuery
        }}
      >
        {children}
      </TasksContext.Provider>
    )
}