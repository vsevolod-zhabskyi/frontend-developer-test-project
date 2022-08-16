import { StyleSheet } from 'react-native'

import colors from '../../theme/colors'

export default StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  taskText: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%'
  },
  taskMark: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.card.border
  },
  taskMarkCompleted: {
    backgroundColor: colors.primary.main
  },
  taskMarkNonCompleted: {
    backgroundColor: colors.primary.contrast
  }
})
