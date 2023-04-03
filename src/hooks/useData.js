import useSWR from 'swr';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());
function useData() {
  const { data, error, isValidating } = useSWR('/api/staticdata', fetcher);
  return {
    data,
    isLoading: isValidating,
    isError: error,
  };
}

export default useData;
