import themes from '../../../themes/constants';

export default {
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  item: {
    marginRight: themes.h_spacing_sm,
    marginBottom: themes.v_spacing_sm,
    overflow: 'hidden',
  },
  size: {
    width: 80,
    height: 80,
  },
  image: {
    overflow: 'hidden',
    borderRadius: themes.radius_sm,
  },
  closeWrap: {
    width: 16,
    height: 16,
    backgroundColor: '#999',
    borderRadius: 8,
    position: 'absolute',
    top: 4,
    right: 4,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  closeText: {
    color: themes.color_text_base_inverse,
    backgroundColor: 'transparent',
    fontSize: 20,
    height: 20,
    marginTop: -8,
    fontWeight: '300',
  },
};
