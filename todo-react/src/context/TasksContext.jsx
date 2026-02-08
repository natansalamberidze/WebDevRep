import { createContext } from "react";
import useTasks from "../hooks/useTasks.js";
import useIncompleteTaskScroll from "../hooks/useIncompleteTaskScroll.js";

export const TasksContext = createContext({})

export const TasksProvider = (props) => {

  const {children} = props

  const {
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
  } = useTasks()

  const {
    firstIncompleteTaskRef,
    firstIncompleteTaskId
  } = useIncompleteTaskScroll(tasks)

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