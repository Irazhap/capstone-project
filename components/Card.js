import Image from "next/image";
import styled from "styled-components";

export default function Card({ image, title, year }) {
  return (
    <>
      <Image src={image} alt={title} width={180} height={250} />
      <p>{year}</p>
      <h2>{title}</h2>
    </>
  );
}
