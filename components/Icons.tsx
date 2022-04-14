import Style from "../styles/Style";

type Icon = React.FC<{
  color?: string;
  className?: string;
}>;
type IconT<T> = React.FC<
  {
    color?: string;
    className?: string;
  } & T
>;

const IconClass = (c: string) => `icon ${c}`;

const Logo: Icon = ({ className = "", color = Style.Foreground }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="136"
      height="136"
      viewBox="0 0 136 136"
      className={IconClass(className)}
    >
      <path
        fill={color}
        d="M99.067 167.067a67.912 67.912 0 01-21.423-3.444L99.2 142.067A43.1 43.1 0 00142.067 99.2l21.557-21.557a67.979 67.979 0 01-64.557 89.424zM34.51 120.489a68.05 68.05 0 0185.98-85.978L98.933 56.067a43.1 43.1 0 00-42.866 42.866l-21.556 21.555z"
        data-name="Subtraction 1"
        transform="translate(-31.067 -31.067)"
      ></path>
    </svg>
  );
};

const Icons = { Logo };
export default Icons;
