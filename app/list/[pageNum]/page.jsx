import LoadingPage from "@/app/components/LoadingPage";
import Pagination from "@/app/components/Pagination";
import UserList from "@/app/components/UserList";
import { Suspense } from "react";

async function getUserData(pageNum) {
  const response = await fetch(`https://reqres.in/api/users?page=${pageNum}`, {
    next: {
      revalidate: 60,
    },
  });
  const result = response.json();
  return result;
}

async function UserPage({ params }) {
  const userData = await getUserData(params.pageNum);

  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <div className="card-container">
          {userData.data.map((data) => (
            <UserList key={data.id} list={data} />
          ))}
        </div>
      </Suspense>
      <Pagination />
    </>
  );
}
export default UserPage;
