import Link from "next/link";

async function getUserDetails(id) {
  const response = await fetch(`https://reqres.in/api/users/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  const result = response.json();
  return result;
}

async function DetailsPage({ params }) {
  const detail = await getUserDetails(params.id);
  console.log(detail.data);
  return (
    <div className="details-container">
      <img src={detail.data.avatar} alt={detail.data.first_name} />
      <div>
        <h2>
          {detail.data.first_name}
          {detail.data.last_name}
        </h2>
        <p>{detail.data.email}</p>
        <Link href="/">
          <button>Back To Home</button>
        </Link>
      </div>
    </div>
  );
}
export default DetailsPage;
