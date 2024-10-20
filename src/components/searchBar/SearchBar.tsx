import React from 'react';
import {TextInput} from 'react-native-paper';
import {useTheme} from 'react-native-paper';
import {styles} from './styles';

interface CustomSearchBarProps {
  searchQuery: string;
  onChangeSearch: (query: string) => void;
  onEndEditing: (query: string) => void;
}

const CustomSearchBar: React.FC<CustomSearchBarProps> = ({
  searchQuery,
  onChangeSearch,
  onEndEditing,
}) => {
  const {colors} = useTheme();

  return (
    <TextInput
      mode="outlined"
      placeholder="Search for tickers"
      value={searchQuery}
      onChangeText={onChangeSearch}
      onEndEditing={() => onEndEditing(searchQuery)}
      style={styles.searchBar}
      placeholderTextColor={colors.onSurface}
      outlineColor={colors.primary}
      selectionColor={colors.primary}
      theme={{
        colors: {
          text: colors.onSurface,
        },
      }}
    />
  );
};

export default CustomSearchBar;
