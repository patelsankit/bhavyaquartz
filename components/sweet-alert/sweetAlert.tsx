import { IconCheck, IconX } from "@tabler/icons-react";
import * as ReactDOMServer from "react-dom/server";
import Swal from "sweetalert2";

export const sweetAlert = (data: any, status?: string) => {
  const body: any = document.querySelector("body");
  body.style.removeProperty("pointer-events");
  if (status === "error") {
    return Swal.fire({
      html: ReactDOMServer.renderToString(
        <div className="error_component">
          <div className="error_icon">
            <IconX className="icon_cross h-5 w-5" />
          </div>
          <div className="error_massage">
            <p className="mb-2 text-center text-18 font-500 text-muted-foreground sm:text-24">
              Error
            </p>
            <p className="text-center text-14 text-muted-foreground sm:text-16">
              {data}
              {/* {data?.errors
                ? Object.entries(data?.errors)?.map((item: any) => {
                    return (
                      <div className="text-left">
                        <span className="capitalize">{item[0]} : </span>
                        {item[1]?.toString()?.replace(/,/g, "")}
                      </div>
                    );
                  })
                : data?.message} */}
            </p>
          </div>
        </div>
      ),
      confirmButtonColor: "#ef4444cc",
      confirmButtonText: "Ok",
      // showCancelButton: true,
      denyButtonText: `Don't save`,
      customClass: {
        actions: "swal-actions",
      },
    });
  } else {
    return Swal.fire({
      confirmButtonText: `Ok`,
      confirmButtonColor: "#16A34A",
      html: ReactDOMServer.renderToString(
        <div className="success_component grid justify-center">
          <div className="success_icon mx-auto">
            <IconCheck className="icon_check h-5 w-5" />
          </div>
          <div className="success_massage mt-3">
            <p className="mb-2 text-center text-18 font-500 text-black md:text-24">
              Success
            </p>
            <p className="text-center text-14 text-muted-foreground md:text-16">
              {data}
            </p>
          </div>
        </div>
      ),
      customClass: {
        actions: "swal-actions",
      },
    });
  }
};
