import { StyleSheet } from 'react-native';
import theme from '../../../themes/constants';

export const Styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: theme.h_spacing_lg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.border_color_base,
  },
  label: {
    color: theme.color_text_paragraph,
    fontSize: theme.font_size_base,
    textAlignVertical: 'center',
  },
  input: {
    flex: 1,
    fontSize: theme.font_size_base,
    color: theme.color_text_paragraph,
    marginLeft: theme.h_spacing_sm,
    height: theme.list_item_height,
  },
  errorTip: {
    color: theme.brand_error,
    fontSize: theme.font_size_base,
    marginLeft: theme.h_spacing_md,
  },
  extraText: {
    color: theme.color_text_caption,
    fontSize: theme.font_size_base,
    marginLeft: theme.h_spacing_md,
  },
};
