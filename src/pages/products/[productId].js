import { useRouter } from "next/router";

export default function ProductDetails() {
  const router = useRouter();
  return (
    <div>
      <h1>This is product details page: {router.query.productId}</h1>
    </div>
  );
}
