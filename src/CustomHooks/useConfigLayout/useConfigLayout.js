import { useMatches } from "react-router";

const useConfigLayout = () => {
  const allRoutes = useMatches();
  // manage entire a section
  const isEnabled = (key) =>
    allRoutes.every((route) => route?.handle?.[key] !== false);
  // mange specific contents

  const isGetConfig = (key) =>
    [...allRoutes]
      ?.reverse()
      ?.find((route) => route?.handle?.[key] !== undefined)?.handle?.[key] ??
    true;

  const handleHeader = isEnabled("handleHeader");
  const handleFooter = isEnabled("handleFooter");

  return {
    isEnabled,
    isGetConfig,
    handleHeader,
    handleFooter,
  };
};
export default useConfigLayout;
