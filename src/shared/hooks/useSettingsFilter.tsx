import { settingsActiveItem } from "@/app/configs/constants";
import { useAtom } from "jotai";

const useSettingsFilter = () => {
  const [activeItem, setActiveItem] = useAtom<string>(settingsActiveItem);

  const handleSetActiveItem = (key: string) => {
    setActiveItem(key);
  };

  return { activeItem, setActiveItem: handleSetActiveItem };
};

export default useSettingsFilter;