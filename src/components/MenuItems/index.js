import { AiOutlineAppstore } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import "./index.css";

import { MenuList, MenuLink, MenuHeading } from "./styledComponents";

const MenuItems = () => {
  return (
    <>
      <img
        className="image"
        src="https://res.cloudinary.com/dxwppeplp/image/upload/v1663606947/301980383_604433578135878_5764772405582386951_n-removebg-preview_duhyuq.png"
        alt="image"
      />
      <MenuList>
        <MenuLink>
          <AiOutlineAppstore size={25} />

          <MenuHeading>My Apps</MenuHeading>
        </MenuLink>

        <MenuLink>
          <FiUsers size={25} />

          <MenuHeading>Resources</MenuHeading>
        </MenuLink>
      </MenuList>
    </>
  );
};

export default MenuItems;
