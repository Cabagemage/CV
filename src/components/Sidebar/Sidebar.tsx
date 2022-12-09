import { Avatar } from "../../ui";
import { Contacts } from "../../components/Contacts";
import { contacts } from "../Contacts/Contacts.data";

export const SideBar = () => {
  const avatarSrc =
    "https://sun9-86.userapi.com/impg/fqQ54TsGMi39bU0aW_LDMtXoyNe_z15WoF3nag/uQ7_ALjbwSg.jpg?size=1442x1920&quality=96&sign=dbf525a656463b266cc7e271ebab4f6a&type=album";
  return (
    <aside className="bg-sidebar w-[355px] h-[100vh] flex  flex-col p-6 rounded-tr-[16px]">
      <Avatar avatarSrc={avatarSrc} className="self-center" />
      <Contacts contacts={contacts} />
    </aside>
  );
};
