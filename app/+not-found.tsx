import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { styles } from '@/styles/NotFound.styles';
import { RootStackParamList } from '@/types/navigation';
/**
 * NotFoundPage Component - A React Functional Component that displays a 404 error page.
 * 
 * This component renders a 404 error page with an animation of eyes, an error message,
 * and a link to navigate back to the home page.
 * @returns {JSX.Element} The rendered NotFoundPage component.
 */

const NotFoundPage: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.errorPage}>
      <View style={styles.container}>
        <View style={styles.eyes}>
          <View style={styles.eye}>
            <View style={[styles.eyePupil]} />
          </View>
          <View style={styles.eye}>
            <View style={[styles.eyePupil ]} />
          </View>
        </View>

        <View>
          <Text style={styles.errorPageHeadingTitle}>Looks like you're lost</Text>
          <Text style={styles.errorPageHeadingDescription}>404 error</Text>
        </View>

      <TouchableOpacity
          style={styles.errorPageButton}
          onPress={() => navigation.navigate('Home')}
          accessibilityLabel="Back to home"
        >
          <Text style={styles.errorPageButton}>Back to home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default NotFoundPage;