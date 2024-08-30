import { sideBarBottomItems, sideBarItems } from "@/app/configs/constants";
import useRouteChange from "@/shared/hooks/useRouteChange";
import { ICONS } from "@/shared/utils/icons";
import { SignOutButton, useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";
import SidebarLogo from "./sidebar.logo";

const DashboardItems = ({ bottomContent }: { bottomContent?: boolean }) => {
  const { activeRoute, setActiveRoute } = useRouteChange();
  const { signOut, user } = useClerk();
  const pathName = usePathname();

  // const LogoutHandler = () => {
  //   signOut();
  //   redirect("/");
  // };

  useEffect(() => {
    setActiveRoute(pathName);
  }, [pathName, setActiveRoute]);

  return (
    <>
      {!bottomContent ? (
        <>
          {sideBarItems.map((item: DashboardSideBarTypes, index: number) => (
            <Link
              key={index}
              href={item.url}
              className="flex p-2 py-5 items-center"
            >
              <span
                className={`text-2xl mr-2 ${
                  item.url === activeRoute && "text-[#463bbd]"
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`text-lg mr-2 ${
                  item.url === activeRoute && "text-[#463bbd]"
                }`}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </>
      ) : (
        <>
          {sideBarBottomItems.map(
            (item: DashboardSideBarTypes, index: number) => (
              <Link
                key={index}
                className="p-2 py-5 flex items-center"
                href={
                  item.url === "/"
                    ? `/subscribe?username=${user?.username}`
                    : item.url
                }
              >
                <span
                  className={`text-2xl mr-2 ${
                    item.url === activeRoute && "text-[#463bbd]"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-lg mr-2 ${
                    item.url === activeRoute && "text-[#463bbd]"
                  }`}
                >
                  {item.title}
                </span>
              </Link>
            )
          )}
          {/* sign-out  */}
          <div className="p-2 py-5 flex items-center cursor-pointer border-b">
            <span className="text-2xl mr-2">{ICONS.logOut}</span>
            <span className="text-lg">
              <SignOutButton />
            </span>
          </div>

          {/* footer */}
          <br />
          <br />
          <div className="w-full flex justify-center cursor-pointer">
            <SidebarLogo />
          </div>
          <p className="text-xs text-center pt-5 pb-10">
            © 2024 Nletterly. All rights reserved.
          </p>
        </>
      )}
    </>
  );
};

export default DashboardItems;
