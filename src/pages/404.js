import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 5000);

  return (
    <div>
      <img
        src="https://static.vecteezy.com/system/resources/previews/019/633/898/original/404-error-in-desktop-free-png.png"
        alt="not found"
        width="60%"
      />
    </div>
  );
};

export default NotFound;
