"use client";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiLogOut, FiSettings, FiUser } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";

const ProfileCard = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const user = session?.user;
  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const menuItems = [
    { label: "Dashboard", icon: MdDashboard, link: "/" },
    { label: "Profile", icon: FiUser, link: "/profile" },
    { label: "Settings", icon: FiSettings, link: "/settings" },
  ];

  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar
          src={`${baseUrl}/images/no-image.jpg`}
          name={`${user?.firstName} ${user?.lastName}`}
          size="sm"
        />
      </MenuButton>

      <MenuList>
        <Stack direction="column" p={2}>
          <Flex align="center">
            <Avatar
              src={`${baseUrl}/images/no-image.jpg`}
              name={`${user?.firstName} ${user?.lastName}`}
              size="md"
            />
            <Box ml={3}>
              <Text fontWeight={700}>
                {user?.firstName} {user?.lastName}
              </Text>
              <Text fontSize="sm" color="gray.300">
                {user?.role}
              </Text>
            </Box>
          </Flex>
        </Stack>
        <MenuList border="transparent">
          {menuItems.map((item, i) => (
            <Link href={item.link} key={i}>
              <MenuItem icon={<item.icon />} fontSize="sm">
                {item.label}
              </MenuItem>
            </Link>
          ))}
          <MenuItem icon={<FiLogOut />} fontSize="sm" onClick={handleLogout}>
            Logout
          </MenuItem>
        </MenuList>
      </MenuList>
    </Menu>
  );
};

export default ProfileCard;
