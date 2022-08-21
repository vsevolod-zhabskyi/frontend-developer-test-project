import React, { useCallback } from 'react'

import { Project } from 'app/types/Project'

import { Text, Card, Pressable } from 'app/ds'

import styles from './ProjectItemView.styles'

export const ProjectItemView: React.FC<{
  project: Project
  onPress: (project: Project) => void
  selected: boolean
}> = React.memo(({ project, onPress, selected }) => {
  return (
    <Pressable onPress={useCallback(() => onPress(project), [onPress, project])}>
      <Card my={4} style={selected ? styles.selected : null}>
        <Text typeface='default/14' color='default' mb={2}>
          {project.name}
        </Text>
        <Text typeface='default/12' color='dimmed'>
          {project.description}
        </Text>
      </Card>
    </Pressable>
  )
})
