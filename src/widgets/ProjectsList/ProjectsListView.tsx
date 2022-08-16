import React, { useCallback } from 'react'
import { FlatList } from 'react-native'

import { Project } from 'app/types/Project'

import { Header } from 'app/ds'

import { ProjectItemView } from './ProjectItemView'

import styles from './ProjectsListView.styles'

export const ProjectsListView: React.FC<{
  projects: Project[]
  selectedProjectIndex: number | null
  onProjectPress: (project: Project) => void
}> = ({ projects, selectedProjectIndex, onProjectPress }) => {
  const renderItem = useCallback(
    ({ item, index }: { item: Project; index: number }) => {
      const style = index === selectedProjectIndex ? styles.selectedProject : null

      return <ProjectItemView project={item} onPress={onProjectPress} style={style} />
    },
    [selectedProjectIndex, onProjectPress]
  )

  return (
    <FlatList
      data={projects}
      ListHeaderComponent={<Header mb={12}>Projects</Header>}
      renderItem={renderItem}
      style={styles.list}
    />
  )
}
