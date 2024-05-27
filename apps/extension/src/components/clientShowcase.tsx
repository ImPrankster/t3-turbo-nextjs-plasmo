import { Card, CardContent, CardHeader } from "@henry/ui/card";
import { Skeleton } from "@henry/ui/skeleton";

import { api } from "~/utils/api";

function ClientShowcase() {
  const { data, isLoading } = api.post.all.useQuery();
  return (
    <Card>
      <CardHeader>Posts fetched on client</CardHeader>
      <CardContent className="flex flex-col gap-2">
        {data?.map((post) => (
          <div key={post.id} className="rounded-md bg-primary/10 p-2">
            {post.title}
          </div>
        ))}
        {isLoading && (
          <>
            <Skeleton className="h-8" />
            <Skeleton className="h-8" />
            <Skeleton className="h-8" />
            <Skeleton className="h-8" />
            <Skeleton className="h-8" />
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default ClientShowcase;
