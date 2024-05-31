import React from "react";
import CareerForm from "../components/CareerForm";

const Career = () => {
  return (
    <div className="mt-[87px] w-11/12 mx-auto">
      <div className="flex flex-col gap-8">
        <p className="font-bold text-3xl">
          Life of <span className="text-orange-600">I NEXT ETS</span>
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 ">
          <img
            src="https://www.coretus.com/_next/image?url=%2Flife2.png&w=640&q=75"
            alt="not found"
            className="rounded-md hover:opacity-80"
          />
          <img
            src="https://www.coretus.com/_next/image?url=%2Flife1.png&w=640&q=75"
            alt="not found"
            className="rounded-md hover:opacity-80"
          />
          <img
            src="https://www.coretus.com/_next/image?url=%2Flife3.png&w=640&q=75"
            alt="not found"
            className="rounded-md hover:opacity-80"
          />
          <img
            src="https://www.coretus.com/_next/image?url=%2Flife4.png&w=640&q=75"
            alt="not found"
            className="rounded-md hover:opacity-80"
          />
        </div>
      </div>

      <div className="my-10">
        <p className="text-3xl font-bold">Benefits</p>
        <br />
        <br />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 ">
          <div className="grid gap-6 lg:gap-12">
            <div className="flex gap-6 items-center">
              <svg
                width="70"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.1"
                  y="0.197266"
                  width="100"
                  height="100"
                  rx="20"
                  fill="#F266AB"
                ></rect>
                <path
                  d="M73.5 50.1973C73.5 63.1758 62.9786 73.6973 50 73.6973C37.0213 73.6973 26.5 63.1758 26.5 50.1973C26.5 37.2186 37.0213 26.6973 50 26.6973C62.9786 26.6973 73.5 37.2186 73.5 50.1973Z"
                  stroke="#F266AB"
                  stroke-width="3"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M50 38.3223C51.0355 38.3223 51.875 39.1617 51.875 40.1973V49.4205L57.5758 55.1215C58.308 55.8538 58.308 57.0408 57.5758 57.773C56.8435 58.5053 55.6565 58.5053 54.9242 57.773L48.6742 51.523C48.3225 51.1715 48.125 50.6945 48.125 50.1973V40.1973C48.125 39.1617 48.9645 38.3223 50 38.3223Z"
                  fill="#F266AB"
                ></path>
              </svg>
              <p className="text-xl">Flexible Timing</p>
            </div>
            <div className="flex gap-6 items-center">
              <svg
                width="70"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.1"
                  y="0.197266"
                  width="100"
                  height="100"
                  rx="20"
                  fill="#FFA500"
                ></rect>
                <path
                  d="M62.375 57.6973H62.625"
                  stroke="#FFA500"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M44.6992 42.6973L55.2242 27.6973L67.4992 36.2973L63.0242 42.6973H44.6992ZM44.6992 42.6973H32.1992L42.7242 27.6973L51.0992 33.5723L44.6992 42.6973Z"
                  stroke="#FFA500"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M70 42.6973H30C28.6193 42.6973 27.5 43.8166 27.5 45.1973V70.1973C27.5 71.578 28.6193 72.6973 30 72.6973H70C71.3807 72.6973 72.5 71.578 72.5 70.1973V45.1973C72.5 43.8166 71.3807 42.6973 70 42.6973Z"
                  stroke="#FFA500"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-xl">Great Salary</p>
            </div>
          </div>
          <div className="grid gap-6 lg:gap-12">
            <div className="flex gap-6 items-center">
              <svg
                width="70"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.1"
                  y="0.197266"
                  width="100"
                  height="100"
                  rx="20"
                  fill="#0CAA00"
                ></rect>
                <path
                  d="M66.9325 64.7129H62.0938V66.3258H66.9325V64.7129Z"
                  fill="#0CAA00"
                ></path>
                <path
                  d="M66.9325 58.2627H62.0938V59.8756H66.9325V58.2627Z"
                  fill="#0CAA00"
                ></path>
                <path
                  d="M66.9325 51.8096H62.0938V53.4225H66.9325V51.8096Z"
                  fill="#0CAA00"
                ></path>
                <path
                  d="M75.0003 26.8102V25.1973H25V26.8102H26.6129V37.2941H25V38.907H75.0003V37.2941H73.3874V26.8102H75.0003ZM49.1937 37.2941H39.5162V35.6812H49.1937V37.2941ZM49.1937 34.0683H41.1291V32.4554H49.1937V34.0683ZM49.1937 30.8425H39.5162V34.0683H37.9033V37.2941H28.2258V26.8102H49.1937V30.8425ZM52.4195 37.2941H50.8066V30.8425H52.4195V37.2941ZM55.6454 37.2941H54.0324V30.8425H55.6454V37.2941ZM58.8712 37.2941H57.2583V30.8425H58.8712V37.2941ZM62.097 37.2941H60.4841V30.8425H62.097V37.2941ZM71.7745 37.2941H63.7099V29.2295H50.8066V26.8102H71.7745V37.2941Z"
                  fill="#0CAA00"
                ></path>
                <path
                  d="M49.6502 44.9292C49.3364 42.4155 47.1889 40.5195 44.655 40.5195H39.2162C36.6823 40.5195 34.5347 42.4155 34.221 44.9292C34.2033 45.0712 34.1976 45.2163 34.1807 45.3583H25V50.197H26.6129V75.1972H28.2258V50.197H33.8823C33.8807 50.3139 33.871 50.4309 33.871 50.5478C33.871 52.947 33.671 55.3632 33.2767 57.7293L33.1686 58.3777C32.1783 58.6809 31.4517 59.593 31.4517 60.681C31.4517 62.0148 32.5371 63.1003 33.871 63.1003H41.1291V70.3584H33.871C32.5371 70.3584 31.4517 71.4439 31.4517 72.7778C31.4517 74.1117 32.5371 75.1972 33.871 75.1972C35.2049 75.1972 36.2904 74.1117 36.2904 72.7778C36.2904 72.4939 36.2323 72.2246 36.142 71.9713H47.73C47.6389 72.2246 47.5808 72.4939 47.5808 72.7778C47.5808 74.1117 48.6663 75.1972 50.0002 75.1972C51.334 75.1972 52.4195 74.1117 52.4195 72.7778C52.4195 71.4439 51.334 70.3584 50.0002 70.3584H42.742V63.1003H50.0002C51.334 63.1003 52.4195 62.0148 52.4195 60.681C52.4195 59.593 51.6929 58.6809 50.7026 58.3777L50.5945 57.7293C50.2002 55.3624 50.0002 52.9462 50.0002 50.5478C50.0002 50.4317 49.9905 50.3139 49.9889 50.197H55.6454V73.5843H57.2583V75.1972H58.8712V73.5843H70.1616V75.1972H71.7745V73.5843H73.3874V50.197H75.0003V45.3583H49.6905C49.6744 45.2155 49.6679 45.0712 49.6502 44.9292ZM33.871 73.5843C33.4267 73.5843 33.0646 73.223 33.0646 72.7778C33.0646 72.3326 33.4267 71.9713 33.871 71.9713C34.3154 71.9713 34.6775 72.3326 34.6775 72.7778C34.6775 73.223 34.3154 73.5843 33.871 73.5843ZM50.0002 71.9713C50.4445 71.9713 50.8066 72.3326 50.8066 72.7778C50.8066 73.223 50.4445 73.5843 50.0002 73.5843C49.5558 73.5843 49.1937 73.223 49.1937 72.7778C49.1937 72.3326 49.5558 71.9713 50.0002 71.9713ZM34.867 57.9938C35.2767 55.5398 35.4839 53.0349 35.4839 50.5478C35.4839 48.7422 35.5976 46.9196 35.821 45.1292C36.0347 43.4212 37.4944 42.1324 39.2162 42.1324H44.655C46.3767 42.1324 47.8364 43.4212 48.0501 45.1292C48.2735 46.9196 48.3872 48.7422 48.3872 50.5478C48.3872 53.0349 48.5945 55.5398 49.0034 57.9938L49.0485 58.2616H34.8226L34.867 57.9938ZM26.6129 48.5841V46.9712H34.0299C33.9872 47.5091 33.9557 48.0446 33.9323 48.5841H26.6129ZM50.0002 59.8745C50.4445 59.8745 50.8066 60.2358 50.8066 60.681C50.8066 61.1261 50.4445 61.4874 50.0002 61.4874H33.871C33.4267 61.4874 33.0646 61.1261 33.0646 60.681C33.0646 60.2358 33.4267 59.8745 33.871 59.8745H50.0002ZM71.7745 71.9713H57.2583V63.1003H71.7745V71.9713ZM71.7745 61.4874H57.2583V56.6487H71.7745V61.4874ZM71.7745 55.0358H57.2583V50.197H71.7745V55.0358ZM73.3874 46.9712V48.5841H49.9389C49.9155 48.0446 49.884 47.5091 49.8413 46.9712H73.3874Z"
                  fill="#0CAA00"
                ></path>
              </svg>
              <p className="text-xl">Cool Office Space</p>
            </div>
            <div className="flex gap-6 items-center">
              <svg
                width="70"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.1"
                  y="0.197266"
                  width="100"
                  height="100"
                  rx="20"
                  fill="#2CD3E1"
                ></rect>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M68.7744 71.1592C70.1904 71.1592 71.3379 71.4033 71.3379 71.7061C71.3379 72.0088 70.1904 72.2529 68.7744 72.2529C67.3584 72.2529 66.2109 72.0088 66.2109 71.7061C66.2061 71.4082 67.3535 71.1592 68.7744 71.1592ZM36.3428 23.9668H61.9287C62.334 23.9668 62.666 24.2988 62.666 24.6992V39.9238C62.666 40.3291 62.334 40.6611 61.9287 40.6611H36.3428C35.9375 40.6611 35.6055 40.3291 35.6055 39.9238V24.7041C35.6055 24.2988 35.9375 23.9668 36.3428 23.9668ZM45.8008 41.6768H52.4707C52.4853 42.7656 52.9102 43.7471 54.0381 44.5381H78.7061C79.0625 44.5381 79.3848 44.6846 79.6191 44.9141C79.8535 45.1484 80 45.4707 80 45.8271V49.665C80 50.0215 79.8535 50.3438 79.6191 50.5781C79.3848 50.8125 79.0625 50.959 78.7061 50.959H78.623V75.5098C78.623 75.7588 78.5205 75.9883 78.3545 76.1494L78.3496 76.1543C78.1836 76.3203 77.959 76.4229 77.71 76.4229H60.0732C59.8242 76.4229 59.5947 76.3203 59.4287 76.1543C59.3994 76.125 59.3701 76.0908 59.3457 76.0566C59.2285 75.9053 59.1602 75.7148 59.1602 75.5098V50.959H30.9326V75.5098C30.9326 75.7637 30.8301 75.9883 30.6641 76.1543C30.498 76.3203 30.2686 76.4229 30.0195 76.4229H25.6934C25.4443 76.4229 25.2197 76.3203 25.0537 76.1543C24.8877 75.9883 24.7852 75.7637 24.7852 75.5146V50.959H21.2891C20.9326 50.959 20.6104 50.8125 20.376 50.5781C20.1465 50.3438 20 50.0215 20 49.665V45.8271C20 45.4707 20.1465 45.1484 20.3809 44.9141C20.6152 44.6797 20.9375 44.5381 21.2939 44.5381H44.2139C45.1416 43.8154 45.8057 42.9365 45.8008 41.6768ZM49.1357 38.1807C49.6582 38.1807 50.0781 38.6055 50.0781 39.123C50.0781 39.6455 49.6533 40.0654 49.1357 40.0654C48.6133 40.0654 48.1885 39.6406 48.1885 39.123C48.1934 38.6055 48.6133 38.1807 49.1357 38.1807ZM37.8174 25.3535H60.4492C60.8057 25.3535 61.0986 25.6465 61.0986 26.0029V36.9404C61.0986 37.2969 60.8057 37.5898 60.4492 37.5898H37.8174C37.4609 37.5898 37.168 37.2969 37.168 36.9404V26.0029C37.168 25.6465 37.4609 25.3535 37.8174 25.3535ZM60.6641 57.8975H77.1191V50.9639H60.6641V57.8975ZM77.124 59.3965H60.6689V66.4668H77.124V59.3965ZM77.124 67.9756H60.6689V74.9189H77.124V67.9756ZM78.4961 46.0371H21.5039V49.4502H78.4961V46.0371ZM29.4287 50.959H26.2842V74.9141H29.4287V50.959ZM68.7744 53.8105C70.1904 53.8105 71.3379 54.04 71.3379 54.3281C71.3379 54.6162 70.1904 54.8457 68.7744 54.8457C67.3584 54.8457 66.2109 54.6113 66.2109 54.3281C66.2109 54.0449 67.3535 53.8105 68.7744 53.8105ZM68.7744 62.4727C70.1904 62.4727 71.3379 62.7168 71.3379 63.0195C71.3379 63.3223 70.1904 63.5664 68.7744 63.5664C67.3584 63.5664 66.2109 63.3223 66.2109 63.0195C66.2061 62.7168 67.3535 62.4727 68.7744 62.4727Z"
                  fill="#2CD3E1"
                ></path>
              </svg>
              <p className="text-xl">Best Equipment</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <CareerForm />
    </div>
  );
};

export default Career;
