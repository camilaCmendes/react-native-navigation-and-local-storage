import { Header, HighLight } from "@/components";
import { View } from "react-native";
import { GroupCard } from "./components";

export const Groups: React.FC = () => {
  return (
    <View>
      <Header />
      <HighLight title="Turmas" subtitle="Jogue com suas turmas" />
      <GroupCard title="Galera do Ignite" onPress={() => null} />
    </View>
  );
};
