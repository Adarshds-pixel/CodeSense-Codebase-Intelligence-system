import { Badge } from "@/components/ui/badge";
import type { Repository } from "@/types";

export function StatusBadge({ status }: { status: Repository["status"] }) {
  if (status === "Analyzed") {
    return <Badge variant="success">{status}</Badge>;
  }

  if (status === "Queued") {
    return <Badge variant="warning">{status}</Badge>;
  }

  if (status === "Failed") {
    return <Badge variant="danger">{status}</Badge>;
  }

  return <Badge variant="default">{status}</Badge>;
}
