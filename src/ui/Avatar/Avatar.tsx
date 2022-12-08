type AvatarProps = {
  avatarSrc: string;
  className?: HTMLDivElement["className"];
};

export const Avatar = ({ className, avatarSrc }: AvatarProps) => {
  return (
    <div className={className}>
      <img
        className="rounded-[50%] w-[290px] h-[269px] overflow-hidden"
        src={avatarSrc}
      />
    </div>
  );
};
