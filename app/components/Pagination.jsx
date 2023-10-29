import Link from "next/link";

function Pagination() {
  return (
    <div className="pagination">
      <Link href="/">
        <span>1</span>
      </Link>
      <Link href="/list/2">
        <span>2</span>
      </Link>
    </div>
  );
}

export default Pagination;
