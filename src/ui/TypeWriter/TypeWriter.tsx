import "./typeWriter.css";
import classNames from "classnames";

type TypeWriterProps = {
  text: string;
  className?: HTMLHeadingElement["className"];
};
export function TypeWriter({ text, className }: TypeWriterProps) {
  return (
    <div className="typewriter">
      <h2 className={classNames("typewriter__text", className)}>{text}</h2>
    </div>
  );
}
