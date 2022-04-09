import { PropsWithChildren } from "react";

export default function SiteHeading({ children }: PropsWithChildren<{}>) {
  return <h1 className="text-8xl my-8 font-extrabold self-center text-transparent bg-clip-text bg-gradient-to-t from-purple-700 to-cyan-400">{children}</h1>
}
