"use client";
import { use } from "react";
import Link from "next/link";
import React from "react";
import { UserContext } from "../contexts/UserContext";

const BookCard = ({ book }) => {
  const { id, title, description } = book;

  const user = use(UserContext);
  console.log("context in the bookCard", user);

  return (
    <div className="card bg-base-100  shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{title} </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>

          <Link href={"/books/${id} "}>
            <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
