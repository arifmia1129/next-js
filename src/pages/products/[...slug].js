import { useRouter } from "next/router";

export default function ProductDetailsWithFilter() {
  const router = useRouter();
  return (
    <div>
      <h1>This is product details page with filtering {router.query.slug}</h1>
    </div>
  );
}
