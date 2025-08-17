import Link from "next/link";

export default function StudentInfo() {
  return (
    <section>
      <p>Name: Naol Wonberi</p>
      <p>
        GitHub:{" "}
        <Link
          href="https://github.com/naolwonberi/cprg306-assignments"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          naolwonberi/cprg306-assignments
        </Link>
      </p>
    </section>
  );
}
