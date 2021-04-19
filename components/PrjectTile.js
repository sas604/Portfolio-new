import Image from 'next/image';

export default function ProjectTile({ project }) {
  return (
    <Image
      src={`http:${project.image.fields.file.url}`}
      layout="intrinsic"
      objectFit="cover"
      width="280"
      height="280"
    />
  );
}
