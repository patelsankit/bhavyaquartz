const IconPlusRounded = ({ className }: any) => {
  return (
    <>
      <svg
        className={className}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_48_5098)">
          <path
            d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M11.25 9H9M9 9H6.75M9 9V6.75M9 9V11.25"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_48_5098">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default IconPlusRounded;
