import { useEffect, useState } from "react";

export const useFetchData = <T>(url: string) => {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result: T[] = await response.json();
        setData(result);
      } catch (err) {
        console.log(err);
        setError(
          err instanceof Error ? err : new Error("An unknown error occurred")
        );
      } finally {
        console.log("finally");
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
