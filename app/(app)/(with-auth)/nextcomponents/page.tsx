import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function ComponentPage() {
  const data = [
    {
      componentName: "Table",
      link: "/nextcomponents/table",
    },
    {
      componentName: "Accordion",
      link: "/nextcomponents/accordion",
    },
    {
      componentName: "toolTip",
      link: "/nextcomponents/tooltip",
    },
    {
      componentName: "card",
      link: "/nextcomponents/card",
    },
  ];
  return (
    <div>
      <div className="py-5 text-center text-2xl font-semibold">Components</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-7 lg:gap-16 container px-2">
        {data.map((item, index) => (
          <div key={index}>
            <Button
              color="secondary"
              size="lg"
              className="backdrop-blur-sm  w-full p-0 font-semibold capitalize h-full text-white"
            >
              <Link
                className="flex h-full w-full py-8 items-center justify-center"
                href={item.link}
              >
                {item.componentName}
              </Link>
            </Button>
          </div>
        ))}

        {/* {[...Array(10)].map(() => (
          <>hello sankit</>
        ))}

        {[...Array(15)].map(() => (
          <div>
            <div>Hello</div>
            {[...Array(10)].map((helo, index) => (
              <div>sankit &nbsp;</div>
            ))}
          </div>
        ))} */}
      </div>
    </div>
  );
}
