import React from 'react';
import { ActivityIndicator, Modal, Text, View } from 'react-native';
import { styles } from './styles';

interface ProcessingLoadingProps {
  text?: string;
  isLoading?: boolean;
}

const LoadingSpinner: React.FC<ProcessingLoadingProps> = ({
  text = 'Loading',
  isLoading = false,
}) => {
  if (!isLoading) return null;

  return (
    <Modal visible={isLoading} transparent={true} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#16a34a" />
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default LoadingSpinner;
