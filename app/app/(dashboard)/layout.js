import DashboardHeader from "@/components/dashboard/header/Header";
import DashboardSidebar from "@/components/dashboard/sidebar/Sidebar";
import { Box, Stack } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Stack direction="row" h="100vh" spacing="none">
      <DashboardSidebar />
      <Box flex="1" overflowY="scroll">
        <DashboardHeader />
        <Box>{children}</Box>
      </Box>
    </Stack>
  );
};

export default Layout;
