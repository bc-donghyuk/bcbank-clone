import React from "react";

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="100"
    height="91"
    viewBox="0 0 100 91"
  >
    <defs>
      <path
        id="emailIcon__a"
        d="M0 0h100v83.857A7.143 7.143 0 0192.857 91H7.143A7.143 7.143 0 010 83.857V0z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="emailIcon__b" fill="#fff">
        <use xlinkHref="#emailIcon__a" />
      </mask>
      <path
        fill="#6C44EA"
        d="M0 34.125L41.698 4.104a14.193 14.193 0 0116.604 0L100 34.125H0z"
        mask="url(#emailIcon__b)"
      />
      <path
        fill="#5C25DD"
        d="M0 34.125L50 62.563 100 34.125z"
        mask="url(#emailIcon__b)"
      />
      <path
        fill="#FAFAFF"
        d="M81.568 62.863H18.431c-2.289 0-4.145-1.847-4.145-4.126V17.224c0-2.279 1.856-4.126 4.145-4.126h63.137c2.29 0 4.146 1.847 4.146 4.126v41.513c0 2.279-1.856 4.126-4.146 4.126"
        mask="url(#emailIcon__b)"
      />
      <path
        fill="#5C25DD"
        fillRule="nonzero"
        d="M62.749 25.594L65.516 28.807 44.181 47.008 34.286 37.159 37.292 34.167 44.402 41.243z"
        mask="url(#emailIcon__b)"
      />
      <g mask="url(#emailIcon__b)">
        <g>
          <path
            fill="#F0F0FB"
            d="M0 0L100 56.875 0 56.875z"
            transform="translate(0 34.125)"
          />
          <path
            fill="#E8E8F8"
            d="M100 0L0 56.875 100 56.875z"
            transform="translate(0 34.125)"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default EmailIcon;
