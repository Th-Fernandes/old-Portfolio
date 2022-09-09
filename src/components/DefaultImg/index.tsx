import Image from 'next/image';
import { DefaultImgContainer } from './styles';

interface Props {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export function DefaultImg({ src, width, height, alt }: Props) {
  return (
    <DefaultImgContainer width={width} height={height}>
      <Image
        className="img"
        // onLoad={() => console.log('aaa')}
        src={src}
        width={530}
        height={200}
        alt={alt}
        layout="responsive"
      />
    </DefaultImgContainer>
  );
}
