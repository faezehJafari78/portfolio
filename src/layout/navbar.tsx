import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import MenuLogo from "@/components/utility/menu-button";
import MobileMenu from "@/components/utility/mobile-menu";
import { classNames } from "@/utility/classNames";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useRouter } from "next/router";
import { Tooltip } from "react-tooltip";

export type NavbarRoute = {
  title: string;
  href: string;
};

export type NavbarRoutes = NavbarRoute[];

export interface NavbarProps {
  routes: NavbarRoutes;
}

export default function Navbar(props: NavbarProps) {
  const pathName = usePathname();
  const { push } = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const socialNetworks = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/example/",
      icon: <FaLinkedin color="white" size={24} />,
    },
    {
      name: "GitHub",
      link: "https://github.com/example",
      icon: <FaGithub color="white" size={24} />,
    },
    {
      name: "Email",
      link: "mailto:example@example.com",
      icon: <FaEnvelope color="white" size={24} />,
    },
  ];

  return (
    <header className="sticky top-0 z-50 mt-2 px-6 py-1 sm:mt-6 sm:px-14 md:px-20">
      <div className="mx-auto flex items-center justify-between lg:max-w-7xl">
        <Link
          href="/"
          className="drop-shadow-teralight flex items-center justify-center"
          aria-label="Return to home page"
        >
          <div className=" hidden items-center gap-2 space-x-4 rounded-full px-6 py-4  shadow-md ring-1  ring-zinc-200 backdrop-blur-md dark:ring-accent/50 md:flex">
            {socialNetworks.map((network) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                key={network.name}
                className="flex transform  cursor-pointer items-center justify-center rounded-full transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-gray-800"
                data-tip={network.name}
              >
                <div
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={network.name}
                  data-tooltip-place="top"
                  onClick={() => push(network.link)}
                  rel="noopener noreferrer"
                  className="mx-1"
                >
                  {network.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </Link>
        <nav className="hidden items-center gap-2 rounded-full px-2 py-2 shadow-md ring-1 ring-zinc-200 backdrop-blur-md dark:ring-accent/50 md:flex">
          <ul className="flex gap-2 text-sm font-medium">
            {props.routes.map((_link, index) => {
              return (
                <li
                  key={index}
                  className="my-3 transition-transform duration-100 hover:scale-[1.1]"
                >
                  <Link
                    href={_link.href}
                    className={classNames(
                      pathName === _link.href
                        ? "font-semibold text-background dark:hover:text-foreground"
                        : "text-foreground",
                      "group relative mx-3 rounded-full px-3 py-2 transition-colors duration-200",
                    )}
                  >
                    {_link.href === pathName && (
                      <motion.span
                        layoutId="tab-pill"
                        animate={{
                          transition: {
                            x: {
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            },
                          },
                        }}
                        className="absolute inset-0 -z-10 rounded-full bg-accent group-hover:bg-accent/80"
                      />
                    )}
                    {_link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/*<ThemeSwitch />*/}
        </nav>
        <AnimatePresence>
          <MenuLogo open={isModalOpen} toggle={toggleModal} />
        </AnimatePresence>
      </div>

      <MobileMenu
        routes={props.routes}
        openMenu={isModalOpen}
        setOpenMenu={setIsModalOpen}
      />
      <Tooltip id="my-tooltip" />
    </header>
  );
}
