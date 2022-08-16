import React, { useCallback } from 'react'
import { ViewStyle } from 'react-native'

import { Task } from 'app/types/Task'

import { useMergedStyle } from 'app/utils/hooks/useMergedStyle'

import { Text, Card, Pressable, View } from 'app/ds'

import styles from './TaskItemView.styles'

export const TaskItemView: React.FC<{
  task: Task
  onPress: (task: Task) => void
}> = ({ task, onPress }) => {
  const markStyles = useMergedStyle<ViewStyle>(
    styles.taskMark,
    task.completed ? styles.taskMarkCompleted : styles.taskMarkNonCompleted
  )

  return (
    <Pressable onPress={useCallback(() => onPress(task), [onPress, task])}>
      <Card my={4} style={styles.taskItem}>
        <View style={styles.taskText}>
          <Text typeface='default/14' color='default' mb={2}>
            {task.name}
          </Text>
          <Text typeface='default/12' color='dimmed'>
            {task.description}
          </Text>
        </View>
        <View style={markStyles} mx={10}></View>
      </Card>
    </Pressable>
  )
}
