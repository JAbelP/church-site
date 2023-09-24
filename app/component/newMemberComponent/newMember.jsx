import React from "react";
import Link from "next/link";

function NewMember() {
  return (
    <div className="bg-red-600 rounded-md w-[1220px] min-h-[379px] flex flex-col justify-end relative">
      <Link href={"/SoyNuevo"}>
        <button className="bg-sky-500 p-3 rounded-xl text-3xl absolute bottom-14 right-20 text-black">
          Soy Nuevo
        </button>
      </Link>
    </div>
  );
}

export default NewMember;
