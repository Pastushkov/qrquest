"use client";

import { useParams } from "next/navigation";

interface RouteParams {
  part: string;
}

export const useRouteParams = (): RouteParams => {
  const params = useParams();
  return params as unknown as RouteParams;
};
