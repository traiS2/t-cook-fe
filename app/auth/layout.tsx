import BackgroundImageAuth from "../ui/auth/backgroud-image-auth";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-auto h-[100vh] justify-center items-center bg-sixth-color">
      {children}
    </div>
  );
}
