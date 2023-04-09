/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";

/* Elements Decoration Icons */

const IconsLibrary = ({ type, className }) => {
  return type === "menu-icon" ? (
    <svg
      width="60"
      height="30"
      viewBox="0 0 60 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 15H30H60" stroke="#202020" strokeWidth="2" />
      <path d="M0 1H30H60" stroke="#202020" strokeWidth="2" />
      <path d="M0 29H30H60" stroke="#202020" strokeWidth="2" />
    </svg>
  ) : type === "scroll-down" ? (
    <svg
      width="100"
      height="100"
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50.8723 14.4511C52.507 15.1015 54.1575 14.824 54.7515 13.3309C55.1851 12.241 54.765 11.2029 53.1035 10.2073L52.1964 9.66339C51.214 9.03901 51.103 8.47727 51.3414 7.87786C51.5886 7.25665 52.2883 6.97329 53.3673 7.40255C54.4734 7.84265 55.5523 8.82731 54.4062 10.3595L55.6426 10.5043C56.8147 8.35124 55.7469 6.87866 53.9105 6.14806C52.3194 5.51501 50.8659 5.75729 50.3044 7.16864C49.9034 8.17675 50.2744 9.1954 51.6634 10.0194L52.6174 10.5883C53.7502 11.3104 53.9855 11.9089 53.695 12.6391C53.4391 13.2821 52.7223 13.7038 51.4035 13.1792C49.7088 12.5049 49.4428 11.1431 50.3012 10.096L49.0986 9.94575C48.0236 11.6641 48.5346 13.521 50.8723 14.4511Z"
        fill="white"
      />
      <path
        d="M61.6998 15.4661L62.7809 15.9755C64.4543 14.3276 64.1176 12.233 62.3428 10.9178C60.3373 9.4317 58.2225 9.9138 56.5689 12.1452C54.9049 14.3908 55.1224 16.5575 57.0714 18.0018C58.7662 19.2577 60.5276 19.0753 61.8049 17.6371L61.0743 16.7237C60.1812 17.732 58.9987 17.7235 57.9489 16.9456C56.5555 15.913 56.4086 14.4185 57.5598 12.8649C58.7006 11.3255 60.1531 11.009 61.5042 12.0102C62.7046 12.8998 62.9861 14.37 61.6998 15.4661Z"
        fill="white"
      />
      <path
        d="M64.6008 25.6453C64.8512 25.1981 65.1335 24.8004 65.5009 24.3872L65.9545 23.8753C66.6253 23.1002 66.7142 22.2346 66.1105 21.2996L66.1206 21.284C67.1624 22.4017 68.2174 22.5119 69.2249 21.7078C70.521 20.6735 70.3332 19.3766 69.2733 18.0485L66.9306 15.1128L60.3723 20.3464L61.2055 21.3906L64.013 19.1502L65.2154 20.657C65.8879 21.4997 65.7323 22.2535 65.0377 23.0552L64.6226 23.5214C64.0636 24.1549 63.9105 24.4045 63.7931 24.6331L64.6008 25.6453ZM64.5076 18.7555L66.6876 17.0159L68.1313 18.8249C68.7599 19.6126 68.9942 20.3477 68.1927 20.9873C67.35 21.6598 66.6274 21.4118 65.9586 20.5737L64.5076 18.7555Z"
        fill="white"
      />
      <path
        d="M66.0477 29.4486C67.0738 31.8648 69.1066 32.5293 71.6846 31.4345C74.2679 30.3374 75.2013 28.4132 74.173 25.9916C73.1446 23.5701 71.1141 22.911 68.5307 24.0081C65.9528 25.1029 65.0193 27.0271 66.0477 29.4486ZM67.3074 28.9073C66.6157 27.2786 67.138 25.93 69.0094 25.1353C70.8808 24.3405 72.2139 24.9011 72.9056 26.5299C73.5973 28.1586 73.0773 29.5126 71.2059 30.3073C69.3345 31.1021 67.9991 30.536 67.3074 28.9073Z"
        fill="white"
      />
      <path
        d="M67.8091 33.6603L68.6297 39.3909L69.9928 39.1957L69.3615 34.7875L76.3043 33.7932L76.1149 32.4708L67.8091 33.6603Z"
        fill="white"
      />
      <path
        d="M68.5954 39.975L68.1291 45.7453L69.5015 45.8562L69.8602 41.4175L76.8511 41.9825L76.9587 40.6509L68.5954 39.975Z"
        fill="white"
      />
      <path
        d="M67.2861 49.2214L66.0044 51.9402C64.7726 54.5531 65.4615 56.4585 68.0002 57.6552C70.4806 58.8245 72.3472 58.1628 73.549 55.6135L74.8757 52.7992L67.2861 49.2214ZM67.1674 52.7023L67.962 51.0169L73.0605 53.4205L72.241 55.1589C71.409 56.9237 70.1679 57.3168 68.5196 56.5398C66.813 55.7352 66.3179 54.5043 67.1674 52.7023Z"
        fill="white"
      />
      <path
        d="M61.2583 58.8638C59.5203 60.8311 59.7967 62.9518 61.8957 64.8062C63.999 66.6644 66.1377 66.6774 67.8796 64.7058C69.6214 62.7342 69.3411 60.6179 67.2377 58.7596C65.1388 56.9052 63.0001 56.8922 61.2583 58.8638ZM62.2897 59.7672C63.4613 58.4411 64.9032 58.3312 66.4269 59.6773C67.9506 61.0235 68.0192 62.468 66.8476 63.7941C65.676 65.1203 64.2302 65.2346 62.7065 63.8884C61.1828 62.5422 61.1181 61.0934 62.2897 59.7672Z"
        fill="white"
      />
      <path
        d="M57.2021 63.173L55.6947 64.0307L57.664 70.8921L57.6386 70.9066L52.746 65.7085L51.2437 66.5634L53.3358 75.0268L54.6752 74.2647C53.9552 71.7553 53.2033 69.1899 52.3129 66.4876L52.3435 66.4702C54.227 68.6074 56.0279 70.5759 57.8581 72.4536L58.8818 71.8711C58.2076 69.3356 57.4354 66.7818 56.5602 64.0708L56.5857 64.0563C58.4539 66.2023 60.2803 68.1563 62.0647 70.06L63.404 69.2979L57.2021 63.173Z"
        fill="white"
      />
      <path
        d="M48.8706 67.4486L47.5732 67.6825L48.6034 73.397C48.6939 73.8987 48.7945 74.2258 48.8576 74.4764L48.8287 74.4816L43.035 68.5007L41.7952 68.7242L43.284 76.9817L44.5851 76.7352L43.5746 71.1302C43.4675 70.5363 43.3621 70.2159 43.2891 69.9433L43.318 69.9381L49.0792 75.9369L50.3593 75.7061L48.8706 67.4486Z"
        fill="white"
      />
      <path
        d="M36.9402 73.6365C36.919 73.8228 36.847 73.9718 36.7242 74.0837C36.5976 74.1951 36.4236 74.2383 36.2024 74.2131C35.9812 74.188 35.8213 74.1069 35.7229 73.97C35.6205 73.8325 35.5799 73.6707 35.6011 73.4844C35.6218 73.3019 35.6975 73.1552 35.828 73.0443C35.9542 72.9367 36.128 72.8955 36.3492 72.9207C36.5704 72.9458 36.7305 73.0249 36.8294 73.158C36.9239 73.2945 36.9609 73.454 36.9402 73.6365Z"
        fill="white"
      />
      <path
        d="M29.7048 66.2853C28.07 65.6173 26.4108 65.8805 25.8008 67.3736C25.3555 68.4634 25.7675 69.5093 27.4259 70.524L28.3313 71.0783C29.3115 71.7141 29.4178 72.279 29.1728 72.8784C28.919 73.4996 28.2141 73.7775 27.1351 73.3367C26.0289 72.8847 24.9552 71.8863 26.1198 70.3591L24.8802 70.2024C23.6837 72.3525 24.7418 73.8404 26.5782 74.5907C28.1694 75.2409 29.6304 75.0112 30.2071 73.5999C30.619 72.5918 30.256 71.5659 28.8696 70.726L27.9174 70.1461C26.787 69.4108 26.5565 68.8079 26.8548 68.0777C27.1175 67.4347 27.841 67.0181 29.1597 67.5569C30.8544 68.2494 31.1088 69.6188 30.2375 70.6617L31.4432 70.8237C32.5381 69.109 32.0425 67.2405 29.7048 66.2853Z"
        fill="white"
      />
      <path
        d="M18.8922 65.2501L17.8115 64.74C16.137 66.3868 16.4722 68.4816 18.2461 69.798C20.2505 71.2855 22.3657 70.8049 24.0208 68.5746C25.6864 66.3302 25.4704 64.1633 23.5224 62.7177C21.8285 61.4606 20.0669 61.6418 18.7886 63.0792L19.5187 63.993C20.4124 62.9854 21.5949 62.9946 22.6441 63.7733C24.0369 64.8069 24.1827 66.3015 23.0304 67.8542C21.8886 69.3928 20.4359 69.7084 19.0855 68.7062C17.8856 67.8158 17.6051 66.3453 18.8922 65.2501Z"
        fill="white"
      />
      <path
        d="M16.0631 55.0519C15.8128 55.4969 15.5307 55.8927 15.1638 56.3037L14.7108 56.8128C14.041 57.5839 13.9508 58.4462 14.5505 59.379L14.5405 59.3945C13.5045 58.2789 12.4536 58.1671 11.4481 58.9663C10.1547 59.9944 10.3394 61.2869 11.3929 62.6123L13.7215 65.5419L20.2662 60.3397L19.438 59.2977L16.6363 61.5246L15.4412 60.021C14.7727 59.18 14.9292 58.4292 15.6228 57.6318L16.0373 57.168C16.5955 56.5379 16.7485 56.2895 16.8659 56.0619L16.0631 55.0519ZM16.1428 61.9169L13.9673 63.6462L12.5323 61.8409C11.9075 61.0548 11.6755 60.3219 12.4753 59.6862C13.3162 59.0177 14.0357 59.2662 14.7005 60.1025L16.1428 61.9169Z"
        fill="white"
      />
      <path
        d="M14.5663 51.2618C13.5425 48.8468 11.5117 48.1815 8.93497 49.2738C6.35286 50.3684 5.41888 52.2905 6.44491 54.7109C7.47095 57.1313 9.49952 57.7913 12.0816 56.6967C14.6583 55.6044 15.5923 53.6822 14.5663 51.2618ZM13.3072 51.8019C13.9973 53.4299 13.4746 54.7771 11.604 55.57C9.73348 56.363 8.40182 55.8019 7.71171 54.1739C7.02159 52.546 7.54202 51.1934 9.41257 50.4004C11.2831 49.6075 12.6171 50.174 13.3072 51.8019Z"
        fill="white"
      />
      <path
        d="M12.816 47.071L12.0055 41.3399L10.6423 41.5326L11.2658 45.9412L4.32224 46.9232L4.50927 48.2457L12.816 47.071Z"
        fill="white"
      />
      <path
        d="M12.0167 40.7667L12.483 34.9964L11.1105 34.8855L10.7518 39.3242L3.76094 38.7592L3.65334 40.0908L12.0167 40.7667Z"
        fill="white"
      />
      <path
        d="M13.3364 31.4908L14.6205 28.773C15.8546 26.1612 15.1674 24.2553 12.6297 23.0563C10.1504 21.8848 8.28314 22.5449 7.07913 25.0932L5.74997 27.9063L13.3364 31.4908ZM13.4581 28.0099L12.6621 29.6946L7.56567 27.2866L8.38669 25.5489C9.22023 23.7848 10.4617 23.3928 12.1094 24.1713C13.8153 24.9773 14.3092 26.2087 13.4581 28.0099Z"
        fill="white"
      />
      <path
        d="M19.3658 21.8501C21.1052 19.8841 20.8302 17.7632 18.7325 15.9074C16.6305 14.0476 14.4919 14.0331 12.7486 16.0035C11.0053 17.9739 11.2842 20.0905 13.3863 21.9502C15.4839 23.8061 17.6226 23.8205 19.3658 21.8501ZM18.335 20.946C17.1625 22.2713 15.7205 22.3803 14.1977 21.033C12.6749 19.6858 12.6073 18.2412 13.7799 16.9159C14.9524 15.5906 16.3983 15.4773 17.9211 16.8245C19.4439 18.1718 19.5076 19.6207 18.335 20.946Z"
        fill="white"
      />
      <path
        d="M23.4308 17.5504L24.9389 16.6937L22.9743 9.83098L22.9998 9.81651L27.8887 15.018L29.3916 14.1642L27.3054 5.69935L25.9655 6.46052C26.6838 8.97041 27.4338 11.5363 28.3224 14.2393L28.2918 14.2566C26.4098 12.1181 24.6102 10.1483 22.7813 8.26939L21.7573 8.85112C22.4297 11.3871 23.2001 13.9414 24.0734 16.653L24.0479 16.6675C22.1812 14.5203 20.3561 12.565 18.5731 10.66L17.2332 11.4212L23.4308 17.5504Z"
        fill="white"
      />
      <path
        d="M31.7817 13.2743L33.0795 13.0425L32.0582 7.32634C31.9686 6.82452 31.8684 6.49719 31.8058 6.24649L31.8346 6.24133L37.6189 12.2314L38.8591 12.0098L37.3833 3.75001L36.0818 3.99446L37.0835 9.60099C37.1896 10.1951 37.2945 10.5156 37.3671 10.7884L37.3382 10.7935L31.5864 4.78573L30.3059 5.01451L31.7817 13.2743Z"
        fill="white"
      />
      <path
        d="M43.6889 7.15465C43.7095 6.96903 43.7808 6.82036 43.9029 6.70864C44.0288 6.59735 44.2019 6.55395 44.4224 6.57844C44.6428 6.60294 44.8022 6.68329 44.9006 6.8195C45.0029 6.95614 45.0437 7.11727 45.0231 7.3029C45.0029 7.48465 44.9279 7.63096 44.7981 7.74182C44.6727 7.84924 44.4997 7.89071 44.2793 7.86622C44.0588 7.84172 43.8992 7.76331 43.8004 7.63096C43.7059 7.49518 43.6687 7.33641 43.6889 7.15465Z"
        fill="white"
      />
    </svg>
  ) : type === "scroll-arrow" ? (
    <svg
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9393 26.7885C11.5251 27.3743 12.4749 27.3743 13.0607 26.7885L22.6066 17.2425C23.1924 16.6567 23.1924 15.707 22.6066 15.1212C22.0208 14.5354 21.0711 14.5354 20.4853 15.1212L12 23.6065L3.51472 15.1212C2.92893 14.5354 1.97919 14.5354 1.3934 15.1212C0.807611 15.707 0.807611 16.6567 1.3934 17.2425L10.9393 26.7885ZM10.5 0.271973L10.5 25.7278H13.5L13.5 0.271973L10.5 0.271973Z"
        fill="white"
      />
    </svg>
  ) : (
    <></>
  );
};

IconsLibrary.propTypes = {
  fill: PropTypes.string,
};

IconsLibrary.defaultProps = {
  fill: "black",
};

export default IconsLibrary;
