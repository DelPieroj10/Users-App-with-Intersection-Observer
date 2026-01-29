import { hookUserApp } from "./Hook/hookUserApp";
import { EmptyEstate } from "./UX Components/EmptyEstate";
import { UserSkeleton } from "./UX Components/UserSkeleton";


export default function UsersApp() {
  const { users, loading, observerRef, error, isEmpty, isInitialLoading } = hookUserApp();

  return (
    <main className="container">
      <h1>Users App Exercise</h1>
      <hr />

      <ul className="user-list">
        {isInitialLoading &&
          Array.from({ length: 6 }).map((_, index) => (
            <UserSkeleton key={index} />
          ))}
        <br />

        {users.map((user, index) => (
          <li
          className="user-card"
          key={user.login.uuid}
          ref={index === users.length - 1 ? observerRef : null}
          >
            <img
              src={user.picture.medium}
              alt={`Photo of ${user.name.first}`}
              />
            <div className="user-info">
              <h2>
                Name: {user.name.first} {user.name.last}
              </h2>
              <p>Email: {user.email}</p>
            </div>
          </li>
        ))}
      </ul>

      {isEmpty && <EmptyEstate />}

      {loading && users.length > 0 && <p>Loading more users...</p> }
      
      {error && <p className="error">{error}</p>}
    </main>
  );
}
