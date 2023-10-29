import { Suspense } from "react";
import UserList from "./components/UserList";
import LoadingPage from "./components/LoadingPage";

async function getUserData() {
  const response = await fetch(`https://reqres.in/api/users`, {
    next: {
      revalidate: 60,
    },
  });
  const result = response.json();
  return result;
}

async function HomePage() {
  const userData = await getUserData();

  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <div className="card-container">
          {userData.data.map((data) => (
            <UserList key={data.id} list={data} />
          ))}
        </div>
      </Suspense>
    </>
  );
}
export default HomePage;
