import React, { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'

import { Project } from 'app/types/Project'
import { Task } from 'app/types/Task'

import { ProjectsListView } from 'app/widgets/ProjectsList'
import { TasksListView } from 'app/widgets/TasksList'

import { PROJECTS } from 'app/mock/data'

import styles from './App.styles'

function App() {
  const [projects, setProjects] = useState<Project[]>(PROJECTS)
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<null | number>(null)
  const [tasks, setTasks] = useState<Task[]>([])

  const headerText =
    selectedProjectIndex !== null
      ? `Tasks for "${projects[selectedProjectIndex].name}"`
      : 'All tasks'

  const onProjectPress = useCallback(
    (project: Project) => {
      const index = projects.indexOf(project)

      if (index === selectedProjectIndex) {
        setSelectedProjectIndex(null)
        return
      }

      setSelectedProjectIndex(index)
    },
    [selectedProjectIndex]
  )

  const onTaskPress = useCallback(
    (changedTask: Task) => {
      const newTasks = [...tasks]
      const task: Task = tasks.find(task => task.name === changedTask.name)!

      task.completed = !task.completed

      setTasks(newTasks)
    },
    [tasks]
  )

  useEffect(() => {
    const newTasks: Task[] =
      selectedProjectIndex !== null
        ? projects[selectedProjectIndex].tasks
        : projects.reduce((prev, cur) => [...prev, ...cur.tasks], [] as Task[])

    setTasks([...newTasks])
  }, [selectedProjectIndex])

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <ProjectsListView
          projects={projects}
          onProjectPress={onProjectPress}
          selectedProjectIndex={selectedProjectIndex}
        />
      </View>
      <View style={styles.column}>
        <TasksListView tasks={tasks} onTaskPress={onTaskPress} headerText={headerText} />
      </View>
    </View>
  )
}

export default App
