"use client";
import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import React from "react";
function Providers({ children }: React.PropsWithChildren) {
  const router = useRouter();

  const mutationCache = new MutationCache({
    onError: (error: any) => {
      if (error?.status === 401) {
      }
      if (error?.status === 403) {
        router.push("/home");
      }
    },
  });
  const queryClient = new QueryClient({ mutationCache });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default Providers;
