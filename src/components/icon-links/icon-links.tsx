import { FC } from "react";
import styled from 'styled-components';

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

  const IconImage = styled.img`
    transition: opacity ease-out 0.2s;

    &:hover{
      transition: opacity ease-out 0.2s;
      opacity: 0.5;
    }
  `

  return (
    <>
      {iconArray.map(({ icon, link, width, height, alt }, index) => {
        return (
          <a key={index} rel="noreferrer" target="_blank"  href={link ? link : undefined}>
            <IconImage alt={alt} src={icon} width={width} height={height} />
          </a>
        );
      })}
    </>
  );
};

export default IconLinks;
