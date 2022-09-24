import { Text, View, StyleSheet } from "react-native";

interface TitleProps {
  label: string;
}

const Title: React.FC<TitleProps> = ({ label }: TitleProps) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 24,
    fontWeight: "800",
    padding: 20,
  },
});

export default Title;
