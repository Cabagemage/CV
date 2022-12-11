type AvatarProps = {
  className?: HTMLDivElement["className"];
};

const Avatar = ({ className }: AvatarProps) => {
  const avatarSrc =
    "https://sun9-86.userapi.com/impg/fqQ54TsGMi39bU0aW_LDMtXoyNe_z15WoF3nag/uQ7_ALjbwSg.jpg?size=1442x1920&quality=96&sign=dbf525a656463b266cc7e271ebab4f6a&type=album";
  return (
    <div className={className}>
      <img
        className="rounded-[50%] w-[290px] h-[269px] overflow-hidden"
        alt="avatar"
        src={avatarSrc}
      />
    </div>
  );
};

export default Avatar;
