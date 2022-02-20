import {StyleSheet} from 'react-native';

export const TAB_BAR_HEIGHT = 64;

export const style = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    zIndex: 1,
    elevation: 12,
  },
  container: {
    flexDirection: 'row',
    height: TAB_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  bottomFill: {
    width: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
  },
  activeIconStyle: {
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 2,
    shadowRadius: 15,
    elevation: 8,
  },
});
