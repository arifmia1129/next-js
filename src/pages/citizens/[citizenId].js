import { useRouter } from "next/router";

export default function CitizenInfo() {
  const router = useRouter();

  return (
    <div>
      <h1>This can try to find details of citizen: {router.query.citizenId}</h1>
    </div>
  );
}
