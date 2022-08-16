import React, { useCallback } from 'react'
import { FlatList } from 'react-native'

import { Task } from 'app/types/Task'

import { Header } from 'app/ds'

import { TaskItemView } from './TaskItemView'

import styles from './TasksListView.styles'

export const TasksListView: React.FC<{
  tasks: Task[]
  onTaskPress: (task: Task) => void
  headerText: string
}> = ({ tasks, onTaskPress, headerText }) => {
  const renderItem = useCallback(
    ({ item }: { item: Task }) => <TaskItemView task={item} onPress={onTaskPress} />,
    [onTaskPress]
  )

  return (
    <FlatList
      data={tasks}
      ListHeaderComponent={<Header mb={12}>{headerText}</Header>}
      renderItem={renderItem}
      style={styles.list}
    />
  )
}
