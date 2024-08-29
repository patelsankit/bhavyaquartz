"use client";

const Loader = ({
  fullScreen = false,
  className = "",
  blueVarient = false,
}: {
  fullScreen?: boolean;
  className?: string;
  blueVarient?: boolean;
}) => {
  return (
    <div
      className={`flex items-center justify-center ${className && className} ${
        fullScreen ? "h-screen" : ""
      }`}
    >
      <div className={`lds-ellipsis ${blueVarient ? "blue-variant" : ""}`}>
        <div></div>
        <div></div> <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Loader;
