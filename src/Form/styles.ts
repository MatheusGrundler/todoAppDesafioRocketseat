import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  wrapper: {
    marginTop: -28,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingLeft: 24,
    paddingRight: 24,
  },

  inputWrapper: {
    flex: 1,
    height: 54,
  },

  input: {
    backgroundColor: '#262626',
    height: 54,
    borderRadius: 6,
    paddingLeft: 16,
    color: '#F2F2F2',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
  },
  focusedInput: {
    backgroundColor: '#262626',
    height: 54,
    borderRadius: 6,
    paddingLeft: 16,
    color: '#F2F2F2',

    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#5E60CE',
  },
  inputErrorMessage: {
    color: '#ef4444',
  },
  button: {
    height: 52,
    width: 52,
    backgroundColor: '#1E6F9F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
});
