import Link from "next/link";

function UserList({ list }) {
  console.log(list);
  return (
    <div className="card">
      <img className="" src={list.avatar} alt={list.first_name} />
      <div className="card-body">
        <h3>
          {list.first_name}
          {list.last_name}
        </h3>
        <p>{list.email}</p>
        <Link href={`/detail/${list.id}`}>
          <button>Read more</button>
        </Link>
      </div>
    </div>
  );
}

export default UserList;
