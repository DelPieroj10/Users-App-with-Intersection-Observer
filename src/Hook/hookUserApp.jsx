import { useRef, useState, useEffect } from "react";
import { fetchCallingUsers } from "../Service/ApiUsersApp";

export function hookUserApp() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const observerRef = useRef(null);

  const isInitialLoading = loading && users.length === 0;

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedUsers = await fetchCallingUsers(page);
        setUsers((prevUsers) => [...prevUsers, ...fetchedUsers]);
      } catch (e) {
        setError("Something went wrong loading users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loading])

  return {
    users,
    loading,
    observerRef,
    error,
    isEmpty: !loading && users.length === 0,
    isInitialLoading  
  };
}
