import { FC } from "react";

interface IconArrayObject {
  link?: string | null | undefined;
  icon: string;
  width: string;
  height: string;
  alt?: string;
}

interface IconLinksProps {
  iconArray: IconArrayObject[];
}

const IconLinks: FC<IconLinksProps> = ({ iconArray }) => {
  return (
    <>
      {iconArray.map(({ icon, link, width, height, alt }, index) => {
        return (
          <a key={index} rel="noreferrer" target="_blank"  href={link ? link : undefined}>
            <img alt={alt} src={icon} width={width} height={height} />
          </a>
        );
      })}
    </>
  );
};

export default IconLinks;
