"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      const keyword = searchRef.current.value;
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button
        className="btn btn-outline-success"
        type="submit"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default InputSearch;
