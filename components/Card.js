import { nowPlayingMovies } from "../lib/db";
import Image from "next/image";
import styled from "styled-components";

export default function MovieCard({ id, image, title, year }) {
  return (
    <>
      <div>
        <Image src={image} alt={title} width={180} height={250} />
        <p>{year}</p>
        <h4>{title}</h4>
      </div>
    </>
  );
}
