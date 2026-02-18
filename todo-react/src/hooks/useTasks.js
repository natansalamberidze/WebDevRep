import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import tasksAPI from '../api/tasksAPI/'

const useTasks = () => {

  const [tasks, setTasks] = useState([]) // Tasks state with initial value from local storage or default tasks

  const [newTaskTitle, setNewTaskTitle] = useState(""); // New task title state

  const [searchQuery, setSearchQuery] = useState(""); // Search query state

  const [disappearingTaskId, setDisappearingTaskId] = useState(null) // State to track the ID of the task that is currently disappearing
  const [appearingTaskId, setAppearingTaskId] = useState(null) // State to track the ID of the task that is currently appearing

  const newTaskInputRef = useRef(null); // Ref for new task input field


  // Handlers / useCallbacks(memo for functions):

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm("Are you sure you want to delete all tasks?");

    if (isConfirmed) {

    tasksAPI.deleteAll(tasks)
    .then(() => setTasks([])) // Clear tasks state after all delete requests are completed
    }
  }, [tasks])

  const deleteTask = useCallback((taskId) => {

    tasksAPI.delete(taskId)
    .then(() => {
      setDisappearingTaskId(taskId) // Set the ID of the task that is disappearing
        setTimeout(() => {
          setTasks(
          tasks.filter((task) => task.id !== taskId)
          ) // Remove the task from tasks state after the animation duration
          setDisappearingTaskId(null) // Reset disappearing task ID after the task is removed
        }, 400) // Match the duration of the disappearing animation
    })
  }, [tasks]);

  const toggleTaskComplete = useCallback((taskId, isDone) => {
    tasksAPI.toggleComplete(taskId, isDone)
    .then(() => {
      setTasks(
        tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, isDone }
          }
          return task
        })
      )
    })
  }, [tasks]
  )

  const addTask = useCallback((title) => {
      const newTask = {
        title,
        isDone: false,
      };

        tasksAPI.add(newTask)
        .then((addedTask) => {
          setTasks((prevTask) => [...prevTask, addedTask]); // Add new task to tasks array
          setNewTaskTitle(""); // Clear new task title input
          setSearchQuery(""); // Clear search query after adding a task
          newTaskInputRef.current.focus(); // Focus the new task input field after adding a task
          setAppearingTaskId(addedTask.id) // Set the ID of the task that is appearing
          setTimeout(() => {
            setAppearingTaskId(null) // Reset appearing task ID after the animation duration
          }, 400) // Match the duration of the appearing animation
        })
  }, []);

  // Effects / Hooks / useMemo (memo for values)



  useEffect(() => {
    newTaskInputRef.current.focus(); // Focus the new task input field when the component mounts
    tasksAPI.getAll().then(setTasks)
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
    setSearchQuery,
    disappearingTaskId,
    appearingTaskId,
  }
}

export default useTasks;