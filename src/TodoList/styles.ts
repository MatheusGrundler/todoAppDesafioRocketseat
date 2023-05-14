import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  wrapper: {
    marginTop: 32,
    paddingLeft: 24,
    paddingRight: 24,
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderColor: '#333',
    marginBottom: 20,
  },

  countersWrapper: {
    flexDirection: 'row',
    gap: 8,
  },

  createdCountText: {
    fontSize: 14,
    color: '#4EA8DE',
    fontWeight: 'bold',
  },
  finishedCountText: {
    fontSize: 14,
    color: '#8284FA',
    fontWeight: 'bold',
  },

  counterNumber: {
    fontSize: 12,
    color: '#D9D9D9',
    fontWeight: 'bold',
    backgroundColor: '#333333',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 50,
  },

  ItemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    paddingLeft: 12,
    paddingTop: 12,
    paddingRight: 8,
    paddingBottom: 12,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
  },

  ItemContentText: {
    maxWidth: 235,
    color: '#F2F2F2',
    fontSize: 14,
    lineHeight: 20,
  },
  ItemContentTextFinished: {
    maxWidth: 235,
    color: '#808080',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'left',
    textDecorationLine: 'line-through',
  },
});
