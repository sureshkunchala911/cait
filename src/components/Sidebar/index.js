import { AiFillSetting } from "react-icons/ai";
import { BsFillHouseFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import MenuItems from "../MenuItems";
import {
  BlogAndImageContainer,
  SidebarContainer,
  MenuList,
  MenuLink,
  MenuHeading
} from "./styledComponents";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <BlogAndImageContainer>
        <MenuItems />
      </BlogAndImageContainer>
      <MenuList>
        <MenuLink>
          <BsFillHouseFill size={25} />

          <MenuHeading>My Organization</MenuHeading>
        </MenuLink>

        <MenuLink>
          <AiFillSetting size={25} />

          <MenuHeading>Settings</MenuHeading>
        </MenuLink>
        <MenuLink>
          <MdLogout size={25} />

          <MenuHeading>Logout</MenuHeading>
        </MenuLink>
      </MenuList>
    </SidebarContainer>
  );
};

export default Sidebar;
