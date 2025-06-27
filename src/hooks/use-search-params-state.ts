import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

type UseQueryStateParams<T extends string[]> = {
  key: string;
  defaultValue?: T;
};
export const useQueryState = <T extends string[]>(
  { key, defaultValue }: UseQueryStateParams<T>,
) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState<T>(() => {
    const urlValues = searchParams.getAll(key) as T;
    return urlValues.length > 0
      ? urlValues
      : defaultValue || [] as unknown as T;
  });

  useEffect(() => {
    const urlValues = searchParams.getAll(key) as T;
    setState(
      urlValues.length > 0 ? urlValues : defaultValue || [] as unknown as T,
    );
  }, [searchParams, key, defaultValue]);

  const updateState = useCallback(
    (values: string[] | ((prev: string[]) => string[])) => {
      setState((prevState) => {
        const newValues =
          (typeof values === 'function' ? values(prevState) : values) as T;

        setSearchParams((params) => {
          params.delete(key);
          newValues.forEach((value) => params.append(key, value));
          return params;
        });

        return newValues;
      });
    },
    [key, setSearchParams],
  );

  return [state, updateState] as const;
};
